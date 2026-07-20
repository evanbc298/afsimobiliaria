#!/usr/bin/env node
'use strict';

// Publica o carrossel (ou foto única) de marketing/conteudo/<pasta>/instagram/
// no Instagram via Meta Graph API. Ver marketing/automacao-meta-setup.md pro setup.
//
// Uso: node --env-file=.env scripts/postar-instagram.js marketing/conteudo/<pasta>

const fs = require('fs');
const path = require('path');

const GRAPH_VERSION = 'v21.0';
const GRAPH_URL = `https://graph.facebook.com/${GRAPH_VERSION}`;

function requireEnv(name) {
  const val = process.env[name];
  if (!val) {
    console.error(`Erro: variável de ambiente ${name} não encontrada. Confira o .env (veja marketing/automacao-meta-setup.md).`);
    process.exit(1);
  }
  return val;
}

async function graphPost(pathSegment, params) {
  const res = await fetch(`${GRAPH_URL}/${pathSegment}`, { method: 'POST', body: new URLSearchParams(params) });
  const json = await res.json();
  if (!res.ok || json.error) {
    const err = json.error || { message: `HTTP ${res.status}` };
    throw new Error(`Graph API error (${pathSegment}): ${err.message} (code ${err.code ?? '?'})`);
  }
  return json;
}

async function graphGet(pathSegment, params) {
  const res = await fetch(`${GRAPH_URL}/${pathSegment}?${new URLSearchParams(params)}`);
  const json = await res.json();
  if (!res.ok || json.error) {
    const err = json.error || { message: `HTTP ${res.status}` };
    throw new Error(`Graph API error (${pathSegment}): ${err.message} (code ${err.code ?? '?'})`);
  }
  return json;
}

function slugFromFolder(folderPath) {
  const base = path.basename(folderPath.replace(/\/+$/, ''));
  return base.replace(/-\d{4}-\d{2}-\d{2}$/, '');
}

async function waitForContainer(containerId, accessToken, { timeoutMs = 120000, intervalMs = 3000 } = {}) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const status = await graphGet(containerId, { fields: 'status_code', access_token: accessToken });
    if (status.status_code === 'FINISHED') return;
    if (status.status_code === 'ERROR') {
      throw new Error(`Container ${containerId} falhou no processamento (status ERROR).`);
    }
    await new Promise((r) => setTimeout(r, intervalMs));
  }
  throw new Error(`Container ${containerId} não terminou de processar em ${timeoutMs / 1000}s.`);
}

async function main() {
  const folder = process.argv[2];
  if (!folder) {
    console.error('Uso: node postar-instagram.js marketing/conteudo/<pasta>');
    process.exit(1);
  }

  const accessToken = requireEnv('META_PAGE_ACCESS_TOKEN');
  const igUserId = requireEnv('META_IG_USER_ID');
  const siteUrl = requireEnv('SITE_URL').replace(/\/+$/, '');

  const slug = slugFromFolder(folder);
  const instaDir = path.join(folder, 'instagram');
  if (!fs.existsSync(instaDir)) {
    console.error(`Erro: pasta ${instaDir} não existe.`);
    process.exit(1);
  }
  const slides = fs.readdirSync(instaDir).filter((f) => /^slide-\d+\.png$/i.test(f)).sort();
  if (slides.length === 0) {
    console.error(`Erro: nenhum slide-NN.png encontrado em ${instaDir}.`);
    process.exit(1);
  }

  const legendaPath = path.join(folder, 'legenda.md');
  if (!fs.existsSync(legendaPath)) {
    console.error(`Erro: ${legendaPath} não encontrado.`);
    process.exit(1);
  }
  const caption = fs.readFileSync(legendaPath, 'utf8').trim();
  const imageUrls = slides.map((f) => `${siteUrl}/img/posts/${slug}/${f}`);

  console.log(`Slug: ${slug}`);
  console.log(`Slides: ${slides.length}`);
  imageUrls.forEach((u) => console.log(`  ${u}`));

  let creationId;

  if (imageUrls.length === 1) {
    console.log('Criando post único (imagem)...');
    const container = await graphPost(`${igUserId}/media`, {
      image_url: imageUrls[0],
      caption,
      access_token: accessToken,
    });
    creationId = container.id;
  } else {
    console.log('Criando containers do carrossel...');
    const childIds = [];
    for (const url of imageUrls) {
      const child = await graphPost(`${igUserId}/media`, {
        image_url: url,
        is_carousel_item: 'true',
        access_token: accessToken,
      });
      childIds.push(child.id);
      console.log(`  container criado: ${child.id}`);
    }
    console.log('Criando container do carrossel...');
    const carousel = await graphPost(`${igUserId}/media`, {
      media_type: 'CAROUSEL',
      children: childIds.join(','),
      caption,
      access_token: accessToken,
    });
    creationId = carousel.id;
  }

  console.log(`Aguardando processamento (${creationId})...`);
  await waitForContainer(creationId, accessToken);

  console.log('Publicando...');
  const published = await graphPost(`${igUserId}/media_publish`, {
    creation_id: creationId,
    access_token: accessToken,
  });

  const permalinkInfo = await graphGet(published.id, { fields: 'permalink', access_token: accessToken }).catch(() => null);

  console.log('✓ Publicado no Instagram');
  console.log(`  post id: ${published.id}`);
  if (permalinkInfo?.permalink) console.log(`  link: ${permalinkInfo.permalink}`);
}

main().catch((err) => {
  console.error('✗ Falha ao postar no Instagram:', err.message);
  process.exit(1);
});

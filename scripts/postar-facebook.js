#!/usr/bin/env node
'use strict';

// Publica o carrossel (ou foto única) de marketing/conteudo/<pasta>/instagram/
// na Página do Facebook via Meta Graph API. Ver marketing/automacao-meta-setup.md pro setup.
//
// Uso: node --env-file=.env scripts/postar-facebook.js marketing/conteudo/<pasta>

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

function slugFromFolder(folderPath) {
  const base = path.basename(folderPath.replace(/\/+$/, ''));
  return base.replace(/-\d{4}-\d{2}-\d{2}$/, '');
}

async function main() {
  const folder = process.argv[2];
  if (!folder) {
    console.error('Uso: node postar-facebook.js marketing/conteudo/<pasta>');
    process.exit(1);
  }

  const accessToken = requireEnv('META_PAGE_ACCESS_TOKEN');
  const pageId = requireEnv('META_PAGE_ID');
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

  let result;

  if (imageUrls.length === 1) {
    console.log('Publicando foto única...');
    result = await graphPost(`${pageId}/photos`, {
      url: imageUrls[0],
      caption,
      published: 'true',
      access_token: accessToken,
    });
    console.log('✓ Publicado no Facebook');
    console.log(`  post id: ${result.post_id || result.id}`);
  } else {
    console.log('Enviando fotos (ainda não publicadas)...');
    const photoIds = [];
    for (const url of imageUrls) {
      const photo = await graphPost(`${pageId}/photos`, {
        url,
        published: 'false',
        access_token: accessToken,
      });
      photoIds.push(photo.id);
      console.log(`  foto enviada: ${photo.id}`);
    }
    console.log('Criando post no feed com todas as fotos...');
    const params = { message: caption, access_token: accessToken };
    photoIds.forEach((id, i) => {
      params[`attached_media[${i}]`] = JSON.stringify({ media_fbid: id });
    });
    result = await graphPost(`${pageId}/feed`, params);
    console.log('✓ Publicado no Facebook');
    console.log(`  post id: ${result.id}`);
  }

  const rawId = result.post_id || result.id || '';
  const shortId = rawId.split('_').pop();
  if (shortId) console.log(`  link: https://www.facebook.com/${pageId}/posts/${shortId}`);
}

main().catch((err) => {
  console.error('✗ Falha ao postar no Facebook:', err.message);
  process.exit(1);
});

# Otimização on-page — SEO AFS Imobiliária

Data: 2026-07-21. Auditoria real do código do site (`site/`) + implementação direta
do que dava pra corrigir sem depender de ferramentas externas.

## O que já estava bem feito (confirmado no código)

- Meta title/description por página, incluindo título dinâmico por empreendimento
  (`${property.name} — ${property.neighborhood}`) e por post de blog
- Canonical URL em todas as páginas dinâmicas
- Open Graph + Twitter Card completos
- Schema JSON-LD: `RealEstateAgent` (organização), `RealEstateListing` por
  empreendimento (com `Offer` condicional quando há preço confirmado),
  `BlogPosting` por artigo
- Sitemap.xml e robots.txt gerados automaticamente (`app/sitemap.ts`, `app/robots.ts`),
  incluindo as 3 páginas de cidade, todos os empreendimentos e posts de blog
- robots.txt já libera explicitamente bots de IA (GPTBot, ChatGPT-User,
  PerplexityBot, Claude-Web, etc.) — decisão tomada de propósito, boa pra GEO
- Um H1 único por página, hierarquia de headings consistente

## O que foi corrigido agora (implementado no código)

### Alt text de imagens

Antes, os cards de empreendimento usavam só o nome (`alt={property.name}`) — pouco
descritivo pra busca de imagens. Atualizado em:
- `components/property-card.tsx`
- `components/property-carousel-card.tsx`
- `components/property-gallery.tsx` (galeria da página de empreendimento, agora
  inclui bairro/cidade e número da foto)

Novo padrão: `"{Nome do empreendimento} — {tipologia} em {bairro, cidade}"`.

### Internal linking (blog → páginas de conversão)

Os 6 posts do blog já citavam empreendimentos e cidades específicas em texto puro
(ex: "Senna Tower", "Sky Brava Residence", "Praia Brava") sem link nenhum — ou seja,
zero equity de link interno saindo do blog pras páginas que geram contato/venda.

Implementado: campo novo `links?: { label, href }[]` em `BlogSection`
(`lib/types.ts`), renderizado como uma linha "Confira:" ao final da seção
(`app/blog/[slug]/page.tsx`). Adicionado em todas as seções relevantes dos 6 posts,
linkando pra:
- `/empreendimento/senna-tower`, `/empreendimento/armani-casa-residences`
- `/empreendimento/sky-brava-residence`, `/empreendimento/habitah-praia-brava`,
  `/empreendimento/brava-garden-residence`, `/empreendimento/terrace-360`
- `/itajai`, `/balneario-camboriu` (páginas de cidade, em posts que mencionam a
  região de forma mais geral)

Build de produção testado depois da mudança (`npm run build`) — 46 páginas geradas
sem erro, incluindo todos os posts e empreendimentos.

## Checklist técnico — status

| Item | Status | Observação |
|---|---|---|
| URLs amigáveis | ✅ | slugs kebab-case em todas as rotas |
| Alt text | ✅ | corrigido nesta sessão |
| Internal linking | ✅ | corrigido nesta sessão |
| Sitemap.xml / robots.txt | ✅ | já existia, gerado automaticamente |
| Canonical / Open Graph | ✅ | já existia |
| Schema JSON-LD | ✅ | já existia (Organization, Listing, BlogPosting) |
| FAQ schema | ⏳ | ver `08-geo-otimizacao-ia.md` — implementado nesta sessão |
| Mobile-friendly | ⚠️ não testado com ferramenta real | O layout usa Tailwind responsivo (`sm:`, `md:`) em todo o site — visualmente parece ok, mas recomendo rodar o [PageSpeed Insights](https://pagespeed.web.dev/) depois do deploy pra confirmar com dado real |
| Velocidade de carregamento | ⚠️ não medido | Mesma recomendação acima — rodar PageSpeed Insights no site em produção |
| **Google Search Console (indexação)** | ❌ pendente | **O gap mais crítico de todos** — ver seção abaixo |

## Google Search Console — por que isso é o item #1

A auditoria de visibilidade (busca real no Google) mostrou que o site **não aparece
em nenhuma busca, nem pelo próprio nome/domínio**. Isso não é corrigível só com
código — precisa de ação manual sua, porque exige login Google:

1. Acessar https://search.google.com/search-console
2. Adicionar propriedade: `https://afsimobiliaria.com.br` (tipo "Prefixo do URL")
3. Verificar propriedade — método mais simples pra esse site: **meta tag HTML**
   (o Search Console te dá uma tag `<meta name="google-site-verification" ...>`
   pra colar no `<head>`) — me manda essa tag que eu já insiro no
   `app/layout.tsx` e faço o deploy
4. Depois de verificado: em "Sitemaps", submeter `https://afsimobiliaria.com.br/sitemap.xml`
5. Em "Inspeção de URL", colar a home e clicar "Solicitar indexação" — repetir pras
   páginas de cidade e pros empreendimentos principais

Isso sozinho tende a cortar de semanas para poucos dias o tempo até o site aparecer
no Google.

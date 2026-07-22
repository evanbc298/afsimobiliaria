# Resumo executivo — SEO AFS Imobiliária

Data: 2026-07-21. Índice dos 8 documentos em `marketing/seo/01` a `08`.

## O achado central

O site tem uma base técnica boa (sitemap, robots.txt, schema, meta tags), mas
**está com zero visibilidade no Google — não aparece nem pelo próprio nome**. A
causa provável não é qualidade do site, é simplesmente: 4 dias no ar, nunca
submetido ao Google Search Console, zero backlinks, zero perfil no Google Meu
Negócio. Isso explica também por que a AFS não aparece em nenhuma das buscas que
os concorrentes locais (Imobille, Guilherme Pilger, Max Imóveis, Décio) disputam
hoje.

## Top 5 oportunidades encontradas

1. **Indexação zero é o gargalo #1** — resolver Google Search Console corta
   semanas de espera (`04-otimizacao-on-page.md`)
2. **Perfil no Google (GBP) inexistente** — pra buscas tipo "imobiliária Balneário
   Camboriú", quem ganha é o Local Pack, não o site. Concorrentes têm de 0 a 164
   avaliações; a AFS tem zero (`03-google-meu-negocio.md`)
3. **Conteúdo informacional é o gap mais fácil de ocupar** — concorrentes
   (ex: LFB Imóveis) escrevem sobre "vale a pena investir" mas enterram a resposta
   no final e citam pouquíssimo dado concreto. Um artigo que responde de cara e
   cita números tem vantagem real, inclusive nas IAs (`02-`, `05-`, `08-`)
   **implementado**: FAQ schema + internal linking já foram pro código nesta sessão
4. **Itapema não tem nenhum conteúdo de blog** apesar de ser uma das 3 cidades
   principais — prioridade #1 do calendário editorial (`05-estrategia-conteudo.md`)
5. **GEO (aparecer em IAs) parte na frente tecnicamente** — o robots.txt já libera
   os bots de IA, e agora o FAQ schema dá material fácil de citar. Falta só a
   indexação geral pra isso valer (`08-geo-otimizacao-ia.md`)

## O que já foi implementado nesta sessão (código, no site)

- Alt text de imagens de empreendimento mais descritivo (nome + tipologia + local)
- Internal linking: os 6 posts do blog agora linkam pra empreendimentos e páginas
  de cidade específicas que citavam só em texto solto antes
- Componente de FAQ reutilizável com schema `FAQPage` (JSON-LD), usado na home (5
  perguntas) e nas 3 páginas de cidade (3-4 perguntas locais cada, com dados reais
  de ITBI, ticket médio e ROI já existentes no blog)
- Build de produção testado (`npm run build`) depois de cada mudança — 46 páginas
  geradas sem erro

Tudo commitado localmente, pronto pra sincronizar com `/salvar` quando você quiser.

## Ações prioritárias que só você consegue fazer (dependem do seu login Google)

Nessa ordem:

1. **Google Search Console** — verificar propriedade, submeter sitemap, pedir
   indexação manual da home e páginas principais (passo a passo em `04-`)
2. **Google Meu Negócio** — criar/completar perfil, pedir as primeiras avaliações
   dos últimos clientes fechados (passo a passo em `03-`)
3. Manter a cadência de 2 posts/mês do calendário editorial (`05-`)
4. Quando quiser, revisar e ativar a campanha do Google Ads (`06-`) — nada foi
   ativado, é só estrutura pronta

## Estimativa de investimento em ads (se decidir rodar)

CPC observado no setor imobiliário brasileiro: R$ 5-12/clique (fonte real, ver
`06-google-ads.md`). Sugestão de ponto de partida: R$ 50-80/dia, sem compromisso —
é só uma referência inicial pra calibrar com dado real depois de rodar.

## Próximos passos

1. Você configura Google Search Console e me manda a meta tag de verificação — eu
   insiro no código e faço o deploy
2. Você configura o Google Meu Negócio seguindo o `03-`
3. Quando tiver os dois no ar, retomamos a automação de Instagram/Facebook que
   estava em andamento (`marketing/automacao-meta-setup.md`)

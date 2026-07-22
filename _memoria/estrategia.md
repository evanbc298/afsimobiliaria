# Estratégia

> O que importa agora. Prioridades, metas, prazos.
> O Claude usa isso pra decidir o que sugerir primeiro e o que adiar.
> Atualize sempre que as prioridades mudarem.

## Fase

Estruturação inicial da operação — negócio recém-formalizado no MazyOS,
sócio único tocando sozinho.

## Prioridade principal

Gargalo atual: conseguir clientes qualificados pra comprar. Estruturar
a operação de marketing pra gerar demanda é a prioridade número um
(candidata a virar skill via `/mapear-rotinas`).

## O que pode esperar

*(a definir conforme a operação avança)*

## Contexto com prazo

*(nenhum prazo específico registrado ainda)*

## Pesquisa de mercado — Balneário Camboriú (2026-07-17)

Documento completo em `marketing/pesquisa/plano-ataque-digital-bc-2026-07-17.md`.
Análise das 3 imobiliárias líderes de BC (Bruno Cassola, Felicittà, Imobille) e
brechas digitais não ocupadas por nenhuma delas. Registrar aqui só o que é
acionável — consultar o documento completo pra contexto e fontes.

**Brechas priorizadas (nenhuma das líderes faz bem):**
1. Atendimento bilíngue PT/EN/ES pra comprador estrangeiro
2. Tour virtual 360 em escala (nenhuma cobre o portfólio inteiro)
3. Conteúdo educativo próprio sobre investimento (não é o mesmo que blog de bairro)
4. CRM com nutrição segmentada pós-visita (follow-up automatizado)
5. LinkedIn B2B — quase nenhuma tem presença lá
6. Calculadoras (ITBI, financiamento, ROI de aluguel) — nenhuma tem
7. Pinterest e YouTube long-form — subexplorados
8. Marca institucional independente do fundador
9. Parcerias com hotelaria/beach clubs
10. Dashboard público de mercado (preço por bairro, evolução)

**Quick wins sugeridos (0-30 dias):** LP "Anuncie seu imóvel" por bairro,
Google Meu Negócio ativo com posts semanais, 3 posts de blog SEO/semana em
long-tail, triagem de leads no WhatsApp com resposta em até 2 min.

**Confirmado:** Balneário Camboriú é a praça de atuação da AFS. Essas brechas
valem como prioridade real, não só referência.

**Site institucional:** essa pesquisa foi o motivo de mandar o plano — vai
virar o site da AFS. Briefing derivado em
`marketing/pesquisa/site-requisitos-2026-07-17.md`, com requisitos
obrigatórios e desejáveis.

**Especificação técnica completa recebida (2026-07-17):**
`marketing/pesquisa/site-imobiliario-especificacao-completa-2026-07-17.md` —
documento denso (stack Next.js + shadcn/ui, mapa de 22 páginas, os 20
empreendimentos que a AFS vende com copy/preço/verba de tráfego por tier,
plano de 90 dias, projeção de ROI). Confirmado com o usuário: os 20
empreendimentos são reais (AFS representa/vende), e esse documento
**complementa** (não substitui) o `site-requisitos-2026-07-17.md` — usar os
dois juntos quando o build começar.

**Correções a aplicar quando o build começar** (o documento tem placeholders
genéricos que não são da AFS):
- Paleta de cores do código é genérica (`brand` ciano + `gold`) — substituir
  pela identidade real da AFS (`identidade/design-guide.md`: navy `#172938`
  + laranja `#E19E4D` + creme `#F9F8F3`)
- Nome do site é placeholder (`SeuSiteImobiliario.com.br`) — trocar pelo
  domínio real da AFS quando definido
- Documento cobre Itajaí + BC — confirmar se a AFS atua nas duas cidades ou
  só em BC antes de construir as páginas de Itajaí

**Ainda pendente:** site de referência visual (link que o usuário disse que
ia mandar) — os 20 imóveis já chegaram via este documento, isso resolve
essa parte do que estava bloqueando o projeto do site.

## Site em construção (2026-07-17/18)

Código em `site/` no mesmo repositório (`evanbc298/afsimobiliaria`), deploy
via GitHub Actions pra GitHub Pages, domínio `afsimobiliaria.com.br`
(aguardando o usuário configurar DNS — cliente dele ainda não passou acesso
ao Registro.br).

**Diretriz explícita do usuário (2026-07-18):** o site precisa ser
impecável e o SEO tem que ser prioridade forte — "precisamos sobressair em
busca orgânica". Não é um requisito qualquer, é cobrança direta. Toda
decisão de conteúdo/estrutura do site daqui pra frente considerar SEO
primeiro, não como reboque.

**SEO implementado (2026-07-18):** sitemap.xml, robots.txt, JSON-LD
(Organization/RealEstateAgent no layout + RealEstateListing por imóvel),
canonical e Open Graph em todas as páginas. Deploy automático confirmado
funcionando (workflow do GitHub Actions passou com sucesso).

**Dados dos empreendimentos atualizados (2026-07-18):** usuário mandou
`marketing/pesquisa/fotos-caracteristicas-20-empreendimentos-2026-07-18.md`
com pesquisa real da web. 13 dos 20 empreendimentos tiveram dados
confirmados (endereço exato, preço real, diferenciais) e já foram
atualizados em `site/lib/data/properties.ts`. Preços mudaram bastante em
alguns casos (ex: Alameda Dom Bosco 400K→550K, Marina Bay 1,2M→2,159M,
Sky Brava 700K→1,29M + status virou "Pronto").

**Pendente — 7 empreendimentos sem dados confirmados:** Essência Residence,
Lago di San Pellegrino, Upper Smart Home, Space Soul, Atmosphere Spa Home
Club, Reserva Recife, Viva 360. Continuam com dados estimados/placeholder.
Usuário tem acesso ao DWV App (app.dwvapp.com.br) pra verificar esses —
avisar que ainda faltam quando ele mandar fotos.

**Fotos adicionadas (2026-07-18):** baixadas diretamente dos sites oficiais
das construtoras/portais pros 13 empreendimentos confirmados (Lotisa,
Atalaia, Alameda Dom Bosco, Fazenda Garden, A. Ducati, Terrace 360,
Habitah, Marina Bay, Sky Brava, Brava Garden, Meridian Tower, Armani Casa,
Senna Tower) — 4 a 20 fotos por imóvel, otimizadas (max 1920px, JPEG
qualidade 80) e salvas em `site/public/images/<slug>/`. Card e página de
detalhe (com galeria + miniaturas) já mostram as fotos reais. Os 7 sem
dados confirmados continuam com placeholder "Foto em breve".

**Atenção — origem das fotos:** parte veio de portais de terceiros
(myside.com.br, Imobille) e tem marca d'água de outra imobiliária em
algumas imagens (ex: A. Ducati, Sky Brava, Brava Garden). Serve pra
lançar/testar, mas recomendar ao usuário pedir fotos oficiais sem marca
d'água direto das construtoras antes de qualquer campanha paga de
verdade — usar marca d'água de concorrente no próprio site não é ideal.

**Onne Home:** empreendimento novo (Centro, Balneário Camboriú, "OBRA
CONCLUÍDA") que o usuário mandou via link DWV, fora dos 20 originais.
24 fotos baixadas em `site/public/images/onne-home/` e 6 vídeos
localizados (não baixados, ficam linkados direto do CDN quando cadastrar).
**Não cadastrado no site ainda** — falta preço e tipologia (tabela de
preço indisponível no momento; usuário decidiu focar nos 20 confirmados
primeiro e deixar o Onne Home em espera).

**DNS configurado (2026-07-18):** usuário conseguiu acesso ao Registro.br e
configurou os 4 registros A (185.199.108/109/110/111.153) + CNAME www →
evanbc298.github.io. GitHub Pages já confirma o domínio (redireciona
github.io → afsimobiliaria.com.br) — só falta a propagação do DNS (pode
levar minutos a horas) e depois marcar "Enforce HTTPS" nas configurações
do Pages. Deploy automático via Actions já está funcionando normalmente
(rodou com sucesso nos últimos pushes).

**Widget de chat 24h (2026-07-18):** botão flutuante do WhatsApp virou um
widget completo — avatar (logo da AFS, provisório), indicador online,
card de saudação que abre sozinho ~2,5s depois de carregar a página,
mensagem "Atendimento 24 horas" + botão pro WhatsApp. Usa um número
**diferente** do resto do site: `47 99999-5003` (linha de atendimento),
guardado em `lib/whatsapp.ts` como `SUPPORT_WHATSAPP_NUMBER`. Os outros
botões do site (navbar, footer, contato, páginas de imóvel) continuam
com o número original (`47 99695-8399`).

**Comparativo AFS vs Imobille (2026-07-18):** usuário pediu análise profunda
do concorrente Imobille pra extrair o que eles fazem melhor. Documento
completo em `marketing/pesquisa/comparativo-afs-vs-imobille-2026-07-18.md`.
Resumo: eles têm blog completo (AFS não tem — maior gap), busca/filtro
interativo na home (AFS não tem), seção "na planta" curada. AFS já tem
vantagem real em SEO técnico: dados estruturados JSON-LD que a Imobille
não tem nenhum. Corrigido de imediato: robots.txt agora libera
explicitamente crawlers de IA (GPTBot, Claude-Web, PerplexityBot etc.),
prática que a Imobille já fazia e a AFS não fazia. Aguardando decisão do
usuário sobre prioridade entre construir o filtro de busca vs o blog
institucional (blog precisa de fonte de conteúdo definida).

**Fotos da cidade:** resolvido — 8 fotos reais de Balneário Camboriú/Itajaí
buscadas no Wikimedia Commons (licença livre, com atribuição registrada em
`site/public/images/blog/cidade/_creditos.txt`), usadas no blog. Usuário
pode mandar fotos próprias depois pra complementar.

**Blog institucional lançado (2026-07-18):** usuário escolheu blog como
prioridade sobre o filtro de busca interativo. 6 artigos publicados em
`site/lib/data/blog-posts.ts`, cobrindo investimento (valorização BC,
Airbnb), guias práticos (ITBI, planta vs pronto) e lifestyle/bairros
(Praia Brava, o que fazer em BC) — conteúdo com dados reais já levantados
na pesquisa de mercado. Páginas: listagem com destaque + filtro por
categoria (`/blog`) e detalhe de post com JSON-LD BlogPosting, related
posts e CTA de WhatsApp (`/blog/[slug]`). Link adicionado no menu e
rodapé. Sitemap atualizado com as 6 URLs de post + `/blog/`. Build e QA
visual (screenshot) confirmados sem erros. Commit `a168bab` já no
GitHub, deploy automático deve publicar em minutos.

**Domínio no ar com HTTPS (2026-07-18):** DNS propagou, GitHub Pages
confirmou "DNS check successful" e "Enforce HTTPS" foi marcado com
sucesso. `https://afsimobiliaria.com.br/` está no ar e seguro. Infra do
site (domínio, deploy automático, SEO, HTTPS) está completa.

**Redesign da home inspirado na Imobille (2026-07-18):** usuário mandou prints
do site da Imobille pedindo algo parecido, mas deixou explícito "inove, faça
algo melhor, não vamos copiar". Implementado:
- Logo (ícone extraído do arquivo oficial) na navbar + favicon/app-icon
  gerados a partir dele (`site/public/icon-mark.png`, `site/app/favicon.ico`,
  `site/app/icon.png`, `site/app/apple-icon.png`).
- 3 carrosséis de imóveis na home (`components/property-carousel.tsx`),
  organizados pelos 3 tiers já existentes no modelo de dados — não pelas
  categorias da Imobille ("na planta"/"frente mar") — com selos coloridos
  de status (Lançamento âmbar, Em Construção azul, Pronto verde) e bairro.
  Só entram imóveis com fotos reais (evita placeholder "foto em breve" no
  destaque da home).
- Seção de CTA dupla (proprietário / investidor) com conceito próprio —
  cards com ícone e gradiente na paleta AFS, não fotos de banco de imagem
  como a Imobille usa — mantendo a frase-chave "do início às chaves".
Build e QA visual (desktop 1440px) confirmados. Commit pendente de push.

**Endereço + contraste da logo (2026-07-18):** endereço físico (Rua 3.500, nº
97, Centro, Balneário Camboriú) adicionado no rodapé e no JSON-LD
(RealEstateAgent) pra reforçar SEO local. Criada variante clara do ícone da
marca (`icon-mark-light.png`) pra usar sobre fundos escuros — a versão navy
ficava quase invisível no botão do widget de WhatsApp e no rodapé.

**Expansão pra Itapema + atualização de 4 empreendimentos (2026-07-18):**
usuário mandou 10 links de hotsite DWV (formato `hotsite.dwvapp.com.br/...`).
Descoberto que esses hotsites carregam um JSON completo (`__NEXT_DATA__`) via
`curl` direto — muito mais confiável que scraping visual, dá endereço exato,
diferenciais, % de obra, data de entrega e URLs das fotos em alta resolução.
Cruzado com busca na web pra pegar preço e nome da construtora (a DWV nunca
expõe preço na página).

- **4 novos empreendimentos em Itapema:** Al Mare Residence (Pasqualotto,
  frente-mar Centro, a partir de R$3,49M), L'Atelier Concept Homes (Embraed,
  Meia Praia, a partir de R$4,97M), Sunny Coast (J.A. Russi, frente-mar
  Centro, sem preço confirmado) e Saint John (J.A. Russi, Centro, sem preço
  confirmado). Site ganhou página própria `/itapema` (mesmo padrão de
  `/itajai` e `/balneario-camboriu`), com link no menu, rodapé, sitemap e
  `areaServed` no JSON-LD.
- **2 novos em Balneário Camboriú:** Sapphire Tower (FG Empreendimentos,
  Centro, <200m da praia — **não é frente-mar**, corrigido do que o usuário
  achava) e Garden Park Home Club (FG Empreendimentos, Pioneiros, ~600m do
  mar — **também não é frente-mar**, é um Home Club mais afastado da praia).
  Vale avisar o usuário dessa correção se ele for usar esse discurso em
  anúncio.
- **4 empreendimentos existentes atualizados** com dados reais (antes eram
  estimativas): Lago di San Pellegrino (preço refinado pra R$510K-750K),
  Upper Smart Home (preço corrigido de R$250K pra R$400K de entrada — a
  estimativa antiga estava errada), Space Soul (**status mudou de
  "Lançamento" pra "Pronto"** — já foi entregue em 10/2024 — e preço
  corrigido pra R$1,435M de entrada) e Reserva Recife (sem preço — usuário
  pediu explicitamente pra deixar "Consulte-nos" em vez de estimar).
- **Convenção nova criada:** `priceMin: 0` em `properties.ts` significa
  "sem preço confirmado" — a UI mostra "Consulte-nos" no lugar de "A partir
  de R$...", e o JSON-LD omite o bloco de `offers` nesse caso (evita declarar
  preço fictício pra buscadores). Usada em Sunny Coast, Saint John, Sapphire
  Tower, Garden Park Home Club e Reserva Recife — 5 empreendimentos ainda
  precisam de preço real do usuário/corretor.
- Total no site: 26 empreendimentos (era 20). Contagem atualizada em todo
  lugar que citava "20" (hero, stats bar, meta description, títulos SEO).
  Cópia do site trocada de "Itajaí e Balneário Camboriú" pra "Itajaí,
  Balneário Camboriú e Itapema" onde fazia sentido (hero, footer, layout,
  contato) — textos do blog ficaram como estão, já que os posts publicados
  são especificamente sobre Itajaí/BC.
- Instagram (`instagram.com/afsimobiliaria`) adicionado no rodapé.

**Pendências ativas:**
- Preço real de 5 empreendimentos ("Consulte-nos"): Sunny Coast, Saint John,
  Sapphire Tower, Garden Park Home Club, Reserva Recife
**Filtro de busca interativo + simulador de financiamento (2026-07-18):**
usuário aprovou os dois quando eu perguntei "o que falta no site". Implementados:
- `components/property-filter-grid.tsx` — filtro por condição (Lançamento/Em
  Construção/Pronto/Últimas Unidades), faixa de preço e ordenação (menor
  preço/maior preço/nome), com contador ao vivo. Substituiu o `PropertyGrid`
  estático nas páginas `/itajai`, `/balneario-camboriu` e `/itapema`.
- `components/financing-simulator.tsx` — simulação PRICE (parcela fixa) com
  slider de valor, botões de entrada (10/20/30/40%) e prazo (5 a 30 anos),
  taxa referencial de 10,5% a.a. fixa no código (deixar claro pro usuário que
  é estimativa, não oferta de crédito real). Aparece na página de cada
  empreendimento, abaixo do formulário de contato. Quando o imóvel não tem
  preço (`priceMin === 0`), mostra mensagem pra falar com a gente em vez do
  simulador.
- Os 3 empreendimentos que ainda restavam sem dados confirmados (Essência
  Residence, Atmosphere Spa Home Club, Viva 360) — usuário não encontrou as
  informações, então ficaram com preço "Consulte-nos" (mesma convenção
  `priceMin: 0`) em vez de estimativa. Não são mais "pendência de dados", é
  decisão definitiva por enquanto.

**Imóvel exclusivo do cliente direto — Alameda Jardins (2026-07-18):**
usuário mandou pasta com documento de texto + 71 fotos + 3 vídeos (WhatsApp)
de um apartamento específico que um cliente (não construtora) quer vender
através da AFS — diferente dos outros itens do catálogo, que são unidades de
empreendimentos em lançamento/construção vendidas em nome da construtora.
Cadastrado como imóvel #27: **Alameda Jardins**, Barra Norte de Balneário
Camboriú, prédio da FG Empreendimentos, 3 suítes + 2 vagas, 117m² privativos,
totalmente mobiliado, vista mar, R$ 2.700.000 (aceita carro ou outro imóvel
na negociação, parcelamento direto com o proprietário — dono já documentou
tudo, escritura ok). 26 fotos selecionadas (18 do apartamento + 8 dos
diferenciais do condomínio) de um total de 71 recebidas, otimizadas e no ar
em `/empreendimento/apartamento-alameda-jardins`.
**Pendente:** os 3 vídeos recebidos ainda não foram usados — avaliar se vale
subir pro site ou usar direto nos criativos de Meta Ads. A pasta original
`IMOVEL SADI/` na raiz do repo local (com o .txt, a foto solta e os 2 .zip)
não foi commitada — fica só local, não sobe pro GitHub.

**3 criativos de Meta Ads produzidos (2026-07-18):** usuário pediu estratégia
de 3 criativos com 3 objetivos, focando em escassez, deixando o resto comigo.
Entregue em `saidas/criativos-alameda-jardins-2026-07-18/` (imagens 1080x1080
+ `estrategia.md` com o racional de cada um):
1. **Escassez** — "Único no mercado." / "Não é lançamento" — foco em urgência,
   preço em destaque, público frio/morno.
2. **Lifestyle** — "Sua vida com vista para o mar começa agora." — foco em
   desejo/aspiração, mobiliado e pronto, público mais amplo de topo de funil.
3. **Investimento/Negociação** — "Aceita carro ou outro imóvel na
   negociação." — foco na condição de pagamento flexível (sem banco),
   público de intenção mais alta.
Produzidos como HTML autoral (fotos reais do imóvel embutidas, fonte Fira
Sans via Adobe Fonts) e renderizados como PNG — não passou pelo Adobe
Express porque o usuário pediu só arquivo de imagem pronto pra usar.

**GA4 instalado (2026-07-18):** usuário criou a propriedade sozinho e mandou
o Measurement ID (`G-CG8VVFXR13`). Instalado no site via `next/script` em
`components/analytics.tsx`, carregando em todas as páginas. Confirmado no
build. Meta Pixel ainda não — usuário disse que vai criar e avisa.

**Pacote completo de criativos pro Alameda Jardins (2026-07-18):** usuário
pediu pra expandir os 3 criativos estáticos em campanha completa. Entregue
em `saidas/criativos-alameda-jardins-2026-07-18/`:
- Vídeo de 22s (fachada + trechos reais andando pelo apê + fotos com legenda
  + card de preço/CTA, sem áudio). **Importante:** dos 3 vídeos brutos que o
  cliente mandou, um tinha uma pessoa aparecendo refletida no espelho aos 8s
  — descartado por completo (não só o trecho, o vídeo inteiro) por questão
  de direito de imagem de terceiro. Revisei quadro a quadro os outros 2
  vídeos usados pra confirmar que não tinham ninguém.
- Carrossel de 6 cards (fachada, living, terraço, cinema, piscina, fechamento)
- Criativo de remarketing ("Ainda de olho no Alameda Jardins?") pra público
  que já visitou o site/interagiu mas não converteu
Total agora: 3 estáticos (escassez/lifestyle/investimento) + vídeo +
carrossel + remarketing = 6 peças cobrindo todo o funil.

**Pendências ativas:**
- Meta Pixel — usuário vai criar no Business Manager e avisa o ID
- Vincular Instagram à Página do Facebook (usuário faz isso direto no
  Business Manager, não depende do site)
- Preço real de 5 empreendimentos ("Consulte-nos"): Sunny Coast, Saint John,
  Sapphire Tower, Garden Park Home Club, Reserva Recife
- Preço/tipologia do Onne Home, se for cadastrar
- Fotos oficiais sem marca d'água (antes de campanha paga de verdade)
- Avatar do widget de chat é a logo por enquanto — trocar por foto real quando tiver
- Mais fotos de bairros/empreendimentos específicos pro blog, se usuário quiser expandir
- 3 vídeos do Alameda Jardins — decidir se sobem pro site ou viram material de anúncio

## Auditoria e implementação de SEO (2026-07-21)

Rodada completa dos 8 passos da skill `/seo`, outputs em `marketing/seo/00` a
`08`. Achado central: o site tem base técnica boa mas **zero visibilidade no
Google** (não aparece nem pelo próprio nome) — causa provável é simplesmente não
ter sido submetido ao Search Console ainda (site tem só 4 dias no ar), não ter
Google Meu Negócio, e zero backlinks. Mesmo problema explica a ausência nas IAs
generativas (GEO), já que muitas usam o índice do Google por baixo dos panos.

Análise de concorrência (Imobille, Guilherme Pilger — 4,6★/164 avaliações e 500k+
seguidores, Max Imóveis, LFB Imóveis) identificou um gap claro: conteúdo
informacional do nicho ("vale a pena investir") é raso em dado concreto e enterra
a resposta no final — oportunidade de diferenciação real e replicável.

**Implementado direto no código nesta sessão** (`site/`):
- Alt text de imagens de empreendimento mais descritivo (nome + tipologia + bairro)
- Internal linking: os 6 posts do blog agora linkam pra empreendimentos/páginas de
  cidade que só citavam em texto solto antes (campo novo `links` em `BlogSection`)
- Componente `Faq` reutilizável com schema `FAQPage` (JSON-LD) — usado na home (5
  perguntas institucionais) e nas 3 páginas de cidade (FAQ local com ITBI, ticket
  médio, bairros, ROI de Airbnb — dados já existentes no blog, sem inventar nada)
- Build de produção + lint rodados depois das mudanças — 46 páginas geram sem erro

**Pendências que só o usuário consegue fazer** (login Google):
- Google Search Console — verificar propriedade, submeter sitemap, pedir
  indexação manual. Prioridade #1, resolve o gargalo central.
- Google Meu Negócio — criar/completar perfil, começar a pedir avaliações
- Itapema não tem nenhum post de blog ainda — é a prioridade do calendário
  editorial (`05-estrategia-conteudo.md`)
- Estrutura de Google Ads pronta em `06-google-ads.md`, nada ativado ainda —
  CPC de mercado (R$5-12) citado com fonte real, não é garantia pra conta própria

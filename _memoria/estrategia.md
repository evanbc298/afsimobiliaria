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

**Fotos da cidade:** usuário disse que vai mandar fotos bonitas de
Balneário Camboriú pra usar no site (provavelmente pra hero/seções de
cidade) — ainda não chegaram.

**Pendências ativas:**
- DNS propagar + marcar "Enforce HTTPS" no GitHub Pages (só aguardar)
- Decisão: filtro de busca interativo vs blog institucional (qual primeiro)
- Dados dos 7 empreendimentos não confirmados (verificar no DWV App)
- Preço/tipologia do Onne Home, se for cadastrar
- Fotos oficiais sem marca d'água (antes de campanha paga de verdade)
- Avatar do widget de chat é a logo por enquanto — trocar por foto real quando tiver
- Fotos da cidade (Balneário Camboriú) que o usuário vai mandar

# Site da AFS Imobiliária — requisitos e briefing

> Deriva de `plano-ataque-digital-bc-2026-07-17.md`. Objetivo: um site que não
> repete o que Bruno Cassola, Felicittà e Imobille já fazem — ocupa o que
> nenhuma das três faz. "Impecável" aqui significa performance + confiança +
> recursos que a concorrência não tem, não só bonito.

## Pendências antes de começar o build

- [x] Mínimo de 20 imóveis (fotos + dados) — recebido em
  `site-imobiliario-especificacao-completa-2026-07-17.md`
- [x] Site de referência visual — recebido: imobillenegocios.com.br

As duas pendências que travavam o início do build foram resolvidas.

## Site de referência: imobillenegocios.com.br

**Atenção:** essa é a Imobille, uma das três imobiliárias líderes de BC
analisadas no `plano-ataque-digital-bc-2026-07-17.md` — justamente a que
tem "site sofisticado, marca institucional" como força e "sem inglês, sem
calculadoras, sem tour virtual, sem dashboard" como fraqueza. Serve como
referência de **estrutura e sofisticação visual**, não de features — as
brechas que ela não cobre continuam sendo o diferencial da AFS.

**O que copiar da estrutura:**
- Hero com imagem grande + tagline forte (equivalente da AFS: algo em torno
  de "a imobiliária pra confiar")
- Filtros de busca logo abaixo do hero (localização, tipo, faixa de preço)
- Carrossel de imóveis em alta demanda
- Seção separada por características (na planta, frente-mar, etc. — pro
  portfólio da AFS isso mapeia pros 3 tiers do documento técnico)
- Cards de imóvel com foto, metragem, vagas, quartos, preço, badge de
  oportunidade
- Seção de formulário "quero anunciar meu imóvel"
- Feed do Instagram embedado
- Footer com descrição da empresa, horário, endereços, CRECI, contatos

**O que NÃO copiar (é exatamente a lacuna que a AFS ocupa):** ausência de
versão em inglês, ausência de calculadoras, ausência de tour virtual,
ausência de dashboard de mercado. A estrutura visual pode inspirar; os
recursos que faltam nela são o motivo do site da AFS existir.

**Paleta:** Imobille usa azul-oceano + branco. A AFS usa navy + laranja/
dourado + creme (`identidade/design-guide.md`) — manter a identidade
própria, não a da referência.

## Objetivo de posicionamento

Nenhuma das três líderes de BC tem site bilíngue, calculadoras, ou dashboard
de mercado. A AFS não precisa competir em volume ou em marca pessoal — precisa
competir em **ferramentas que a concorrência não oferece**. Esse é o
diferencial que o site tem que carregar.

## Requisitos obrigatórios (não-negociáveis)

- **Bilíngue PT/EN** desde o lançamento (ES pode vir depois). Nenhuma das três
  líderes tem isso — é a brecha mais clara do mercado.
- **Schema.org `RealEstateListing`** em cada imóvel, FAQ estruturado, sitemap
  XML segmentado por bairro — base de SEO técnico.
- **Core Web Vitals acima de 90** no PageSpeed — site rápido é parte do
  "impecável", não é opcional.
- **3 calculadoras embarcadas:** financiamento (SAC/Price), ITBI de Balneário
  Camboriú (3%), ROI de aluguel anual vs temporada. Fórmula aberta, sem
  obrigar cadastro pra usar.
- **Landing pages por bairro:** Barra Sul, Praia Brava, Centro, e depois
  Itajaí/Itapema se a AFS atender essas praças.
- **Formulário de captação enxuto:** 5 campos (nome, email, telefone, tipo de
  imóvel, endereço/bairro de interesse) — sem fricção.
- **WhatsApp integrado** com resposta rápida — não precisa ser IA 24h como a
  Felicittà de cara, mas o botão e o roteamento têm que estar prontos.
- **Identidade visual da AFS aplicada integralmente** — cores e logo de
  `identidade/design-guide.md`, nada genérico de template.

## Desejável (fase 2, não bloqueia lançamento)

- Estrutura pronta para tour virtual 360 (mesmo sem os tours ainda — o layout
  já prevê onde entram)
- Blog institucional (mesmo modelo do `/publicar-tema` do MazyOS)
- Página dedicada a comprador estrangeiro ("Foreign Buyers") em inglês
- Dashboard público de preço por bairro (fase mais avançada — nenhuma
  concorrente tem isso, é diferencial de longo prazo)

## Stack sugerido (do plano de ataque)

Uma das duas rotas, a decidir quando o build começar:
1. **Next.js + CMS headless** — mais flexível, custo de dev maior
2. **Webflow + Weglot** (i18n) — mais rápido de lançar, manutenção mais simples

Custo de referência do mercado: R$ 15-40 mil de desenvolvimento inicial,
R$ 800-2.000/mês de manutenção.

## Como isso se conecta com o resto do MazyOS

- Fotos e descrições dos 20 imóveis alimentam o site E servem de base pra
  primeiras postagens semanais (`/carrossel`, `/publicar-tema`)
- Site de referência cruzado com `identidade/design-guide.md` — estrutura da
  Imobille, cores e identidade da AFS

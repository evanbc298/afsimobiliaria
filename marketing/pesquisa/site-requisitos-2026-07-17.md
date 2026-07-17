# Site da AFS Imobiliária — requisitos e briefing

> Deriva de `plano-ataque-digital-bc-2026-07-17.md`. Objetivo: um site que não
> repete o que Bruno Cassola, Felicittà e Imobille já fazem — ocupa o que
> nenhuma das três faz. "Impecável" aqui significa performance + confiança +
> recursos que a concorrência não tem, não só bonito.

## Pendências antes de começar o build

- [ ] Mínimo de 20 imóveis (fotos + dados) — a receber
- [ ] Site de referência visual (link que o usuário vai mandar)

Sem isso o site não começa a ser construído — o resto deste documento é
preparação, pra quando os dois itens chegarem a gente já saber exatamente o
que construir.

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

- Fotos e descrições dos 20 imóveis, quando chegarem, alimentam o site E
  servem de base pra primeiras postagens semanais (`/carrossel`,
  `/publicar-tema`)
- O site de referência que o usuário vai mandar define o tom visual — cruzar
  com `identidade/design-guide.md` antes de aplicar

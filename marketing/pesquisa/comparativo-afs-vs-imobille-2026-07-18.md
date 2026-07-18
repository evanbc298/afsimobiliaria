# Comparativo AFS vs Imobille (2026-07-18)

> Análise pedida pelo usuário: "extrair o que eles têm de melhor e implementar no
> nosso e melhorar o nosso". Baseado em inspeção direta do site
> (imobillenegocios.com.br + blog.imobillenegocios.com.br), incluindo
> código-fonte (meta tags, robots.txt, JSON-LD) e captura visual pra extração
> de cores.

## O que a Imobille faz melhor

1. **Blog completo e ativo** — post em destaque, categorias por cidade (BC,
   Itajaí, Itapema, Porto Belo, Bombinhas), seção "Artigos mais lidos" com
   fundo diferenciado, conteúdo de lifestyle/destino além de imobiliário puro
   (praias, o que fazer em BC, pizzarias, bares). AFS não tem blog.
2. **Busca/filtro robusto na home** — localização (7 cidades), tipo de
   imóvel, status do imóvel, faixa de preço, aceita permuta, vista pro mar,
   busca avançada. AFS só tem grids fixos por página (`/itajai`,
   `/balneario-camboriu`), sem filtro interativo.
3. **Seção dedicada "Imóveis na Planta"** — curadoria própria com headline
   ("A melhor parte da sua vida já está nos nossos planos"), separada do
   restante do catálogo.
4. **Seção "Frente-mar" curada** — com headline própria também.
5. **robots.txt libera explicitamente crawlers de IA** (GPTBot, Claude-Web,
   PerplexityBot, Google-Extended, CCBot, FacebookBot) — otimização pra
   aparecer em respostas de assistentes de IA (GEO). **✅ Já corrigido na
   AFS em 2026-07-18** (mesmo robots.txt).
6. **Paleta mais vibrante** — navy forte (~`#002F87`) + accent turquesa
   (~`#099BB1`) sobre fotografia lifestyle em tela cheia.
7. **Densidade visual alta na home** — grid extenso (~40 cards) + múltiplas
   seções, sensação de portfólio grande.

## O que a AFS já faz melhor

1. **Dados estruturados (schema.org)** — inspecionei o código-fonte da
   Imobille: **zero JSON-LD** no site inteiro. A AFS já tem
   `RealEstateAgent` no layout + `RealEstateListing` em cada imóvel. Isso
   pesa direto em rich results do Google.
2. **Identidade visual própria** — a paleta da Imobille é azul genérico
   "tech imobiliário"; a da AFS (navy/laranja/creme) é mais distinta e
   vinda da marca real, não de template.
3. Ambos empatados em sitemap.xml + robots.txt básico — os dois têm.

## Brecha que deixou de ser brecha

O plano de ataque original (`plano-ataque-digital-bc-2026-07-17.md`) listava
"conteúdo educativo próprio" como brecha de mercado que nenhuma das três
líderes de BC preenchia bem. **A Imobille já preencheu isso com um blog
robusto.** Não é mais um vazio de mercado — agora é uma barra que a AFS
precisa alcançar e superar, não um espaço vazio pra ocupar sozinha.

## Plano de ação

| Ação | Esforço | Status |
|---|---|---|
| robots.txt liberar crawlers de IA | Pequeno | ✅ Feito 2026-07-18 |
| Seção "Na Planta" vs "Prontos" curada na home | Pequeno | Pendente |
| Busca/filtro interativo (localização, tipo, status, preço) | Médio | Pendente — aguardando decisão de prioridade |
| Blog institucional completo | Grande | Pendente — precisa decisão de quem alimenta o conteúdo |
| Seção "Frente-mar" curada (usar empreendimentos da Barra Sul) | Pequeno-médio | Pendente |
| Revisar paleta pra mais vibração sem perder identidade própria | A avaliar | Pendente |

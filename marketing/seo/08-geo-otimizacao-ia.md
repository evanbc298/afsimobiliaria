# GEO — aparecer nas respostas de IAs generativas

Data: 2026-07-21.

## Limitação importante desta auditoria

Não tenho como literalmente abrir o ChatGPT, Gemini ou Perplexity e testar "o que
eles respondem agora" a partir daqui — isso precisa ser feito manualmente por você
(checklist abaixo) ou por mim numa sessão com acesso a essas ferramentas
especificamente. O que fiz foi uma auditoria estrutural: o site tem os elementos
que fazem uma IA querer citar uma fonte?

## Achado principal: a causa raiz é a mesma do Google

IAs com busca ao vivo (Perplexity, Copilot, Gemini com grounding, ChatGPT com
browsing) citam páginas que conseguem **encontrar e confiar**. Como confirmamos em
`04-otimizacao-on-page.md`, o site ainda não está indexado no Google — isso afeta
igualmente a capacidade dessas IAs de sequer descobrir o conteúdo, porque muitas
usam o índice do Google/Bing por baixo dos panos. **Resolver a indexação (Search
Console) resolve os dois problemas ao mesmo tempo.**

## O que já favorece GEO (achado na auditoria, sem necessidade de ação)

- `robots.txt` já libera explicitamente `GPTBot`, `ChatGPT-User`, `Google-Extended`,
  `Claude-Web`, `anthropic-ai`, `PerplexityBot`, `CCBot` — decisão tomada
  antecipadamente, a maioria dos concorrentes locais provavelmente nem pensou nisso
- Os posts do blog já seguem parcialmente o formato que IA gosta de citar: heading
  por seção, linguagem direta, números concretos (ex: "ITBI de 3% em BC, 2% em
  Itajaí", "ocupação de 60-70%, ROI de 8-12%")

## O que foi implementado nesta sessão

### FAQ + FAQPage schema

Adicionado componente `Faq` (`components/faq.tsx`) com schema `FAQPage` (JSON-LD),
usado na home (5 perguntas institucionais) e nas 3 páginas de cidade (3-4 perguntas
locais cada, com dados reais: ITBI, ticket médio, bairros, ROI). Formato
pergunta-resposta direta é exatamente o que motores de IA preferem extrair — muito
mais fácil de citar uma resposta de 2-3 frases isolada do que garimpar um parágrafo
dentro de um artigo longo.

Nenhum concorrente mapeado em `02-analise-concorrencia.md` usa FAQ schema — é
diferencial real, não só teórico.

## Ações pendentes (dependem de execução contínua, não só código)

### Conteúdo com resposta direta no topo

Os novos artigos da `05-estrategia-conteudo.md` devem abrir com a resposta objetiva
na primeira frase (ex: "Sim, Itapema vale a pena investir — a região valorizou X%
nos últimos Y anos"), não deixar a conclusão pro final como o concorrente LFB
Imóveis faz (achado documentado em `02-analise-concorrencia.md`).

### Dados concretos e verificáveis

Sempre que possível, citar número com contexto de fonte (mesmo que seja "segundo
estimativa do mercado local" quando não houver dado oficial) — isso já é prática
no blog atual, manter a régua nos posts novos.

### Citações externas (o fator mais lento de construir)

IAs generativas pesam menções em fontes terceiras confiáveis, não só o próprio
site. Isso não dá pra "implementar no código" — depende de:
- Perfil no Google Meu Negócio ativo e completo (`03-google-meu-negocio.md`)
- Presença consistente em diretórios locais e do setor
- Menções orgânicas em imprensa local (jornais de BC/Itajaí, portais de notícia
  do setor imobiliário catarinense) — algo a buscar ativamente à medida que a AFS
  ganha histórico de vendas e cases
- Guest posts ou parcerias de conteúdo com sites do nicho

### Monitoramento GEO (recorrente, manual)

A cada 30 dias, testar os 5 termos abaixo em ChatGPT, Gemini e Perplexity
(pergunte exatamente assim, como um cliente perguntaria):

1. "Qual a melhor imobiliária em Balneário Camboriú?"
2. "Vale a pena investir em imóveis em Balneário Camboriú?"
3. "Como funciona o ITBI em Balneário Camboriú e Itajaí?"
4. "Vale a pena comprar imóvel na planta ou pronto no litoral de SC?"
5. "Melhor bairro para investir em Itajaí?"

Registrar: a AFS apareceu? Quem apareceu no lugar? Qual fonte foi citada? Esse
registro entra no `07-checklist-monitoramento.md` (seção trimestral).

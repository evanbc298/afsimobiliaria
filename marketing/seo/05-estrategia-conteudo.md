# Estratégia de conteúdo — SEO AFS Imobiliária

Data: 2026-07-21. Baseado na pesquisa de demanda (`01-`) e no gap competitivo mais
claro encontrado (`02-`): concorrentes locais respondem tarde e sem dado concreto.
Toda peça nova daqui pra frente deve responder a pergunta do título **na primeira
frase**, citar números (com fonte ou marcados como estimativa), e linkar pra
empreendimentos/cidades reais — seguindo o padrão que já implementamos nos 6 posts
existentes.

## Gap mais urgente: Itapema não tem nenhum conteúdo de blog

Das 3 cidades de atuação, **Itapema é a única sem um único post no blog** — apesar
de já ter página própria no site e empreendimentos no portfólio. Isso é prioridade
#1 da lista abaixo.

## Cluster de conteúdo (página pilar → satélites)

As 3 páginas de cidade (`/itajai`, `/balneario-camboriu`, `/itapema`) já funcionam
como páginas pilares — cada uma reúne os empreendimentos daquela cidade e agora tem
FAQ dedicado (ver `04-otimizacao-on-page.md`). Os posts de blog são os satélites,
linkando de volta pra elas (já implementado nos 6 posts existentes).

```
/itajai (pilar)
 ├─ blog: ITBI em BC e Itajaí (existe)
 ├─ blog: Praia Brava (existe)
 ├─ blog: planta ou pronto (existe)
 └─ blog: [novo] vale a pena investir em Itajaí (dedicado, não só tangencial)

/balneario-camboriu (pilar)
 ├─ blog: por que investir em BC 2026 (existe)
 ├─ blog: o que fazer em BC (existe)
 ├─ blog: Airbnb BC (existe)
 └─ blog: [novo] melhor bairro pra investir em BC (Barra Sul x Centro x Pioneiros)

/itapema (pilar) — SEM SATÉLITES HOJE
 ├─ blog: [novo] vale a pena investir em Itapema
 ├─ blog: [novo] Meia Praia — o bairro que virou o point de Itapema (espelha o
 │   formato do post de Praia Brava, que já funciona bem)
 └─ blog: [novo] Itapema x Balneário Camboriú: qual escolher
```

## 10 ideias de artigo novo, priorizadas

| # | Título | Palavra-chave alvo | Cidade/pilar | Formato |
|---|---|---|---|---|
| 1 | Vale a pena investir em Itapema? | vale a pena investir em Itapema | Itapema | Investimento, dados de valorização e ROI |
| 2 | Meia Praia: o bairro que virou o point de Itapema | apartamento Meia Praia Itapema | Itapema | Bairros — mesmo formato do post de Praia Brava |
| 3 | Melhor bairro pra investir em Balneário Camboriú: Barra Sul, Centro ou Pioneiros? | melhor bairro para investir em Balneário Camboriú | Balneário Camboriú | Comparativo |
| 4 | Vale a pena investir em Itajaí? (dedicado) | investir em imóveis Itajaí | Itajaí | Investimento — hoje só é tocado de raspão no post de BC |
| 5 | Documentação para comprar imóvel na planta: o guia completo | documentação para comprar imóvel na planta | Todos | Guia prático — resposta direta logo no topo, ótimo pra GEO |
| 6 | Quanto custa manter um apartamento em Balneário Camboriú (condomínio + IPTU) | custo de manter apartamento Balneário Camboriú | Balneário Camboriú | Guia prático |
| 7 | Estrangeiro pode comprar imóvel no Brasil? O que muda pra quem vem de fora | estrangeiro comprar imóvel Brasil | Balneário Camboriú | GEO — pergunta direta, resposta objetiva logo na abertura |
| 8 | CRECI: o que é e como verificar se o corretor é registrado | o que é CRECI como verificar corretor | Todos | Confiança/autoridade — baixo volume mas reforça E-E-A-T |
| 9 | Simulação de financiamento imobiliário: como funciona e o que considerar | simulação financiamento apartamento Balneário Camboriú | Todos | Guia + CTA direto pro simulador já existente no site |
| 10 | Itapema x Balneário Camboriú: qual escolher pra morar ou investir | Itapema ou Balneário Camboriú | Itapema + BC | Comparativo — capta quem está decidindo entre as duas |

## Calendário editorial sugerido

Cadência realista pra 1 sócio operando sozinho: **2 posts/mês**, priorizando o gap
de Itapema primeiro (itens 1 e 2), depois os de maior intenção comercial (3, 4, 9),
por último os de cauda longa/GEO (5, 6, 7, 8, 10).

| Mês | Posts |
|---|---|
| Mês 1 | #1 Vale a pena investir em Itapema, #2 Meia Praia |
| Mês 2 | #3 Melhor bairro BC, #4 Vale a pena investir em Itajaí |
| Mês 3 | #9 Simulação de financiamento, #10 Itapema x BC |
| Mês 4 | #5 Documentação planta, #6 Custo de manter apartamento |
| Mês 5 | #7 Estrangeiro comprando no Brasil, #8 CRECI |

Cada post publicado deve virar automaticamente carrossel + legendas via
`/publicar-tema` (o pipeline já existe) — não é trabalho extra, é reaproveitamento.

## Conteúdo local (já coberto, reforçar)

As páginas de cidade já têm FAQ com dados locais (ITBI, ticket médio, bairros). Não
é necessário criar páginas de bairro separadas fora do blog por enquanto — os posts
de bairro (Praia Brava, e os novos de Meia Praia) cumprem esse papel.

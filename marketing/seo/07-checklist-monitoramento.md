# Checklist de monitoramento — SEO AFS Imobiliária

Data: 2026-07-21. Ferramentas já ativas: GA4 (`G-CG8VVFXR13`). Pendente: Google
Search Console e Google Meu Negócio (ver `04-` e `03-`) — vários itens abaixo só
ficam mensuráveis depois que esses dois estiverem no ar.

## Semanal

- [ ] Checar posição nos 10 termos prioritários do `01-pesquisa-demanda.md`
  (busca manual no Google, ou Search Console depois de ativo)
- [ ] Responder toda avaliação nova no Google Meu Negócio (usar `/responder-avaliacoes`)
- [ ] Postar no Google Meu Negócio (mínimo 1x/semana — reaproveitar conteúdo do
  Instagram/Facebook, não precisa ser exclusivo)
- [ ] Conferir se a automação de Instagram/Facebook rodou sem erro (ver setup em
  `marketing/automacao-meta-setup.md`)

## Mensal

- [ ] Revisar métricas do Google Ads (CTR, CPC, conversões, custo/lead) — usar `/relatorio-ads`, só depois que a campanha do `06-google-ads.md` estiver ativa
- [ ] Verificar tráfego orgânico real no GA4 e, quando disponível, no Google Search Console (impressões, cliques, posição média)
- [ ] Atualizar lista de palavras-chave negativas do Google Ads com base no relatório de termos de pesquisa
- [ ] Publicar 1-2 conteúdos do calendário editorial (`05-estrategia-conteudo.md`)
- [ ] Conferir consistência de NAP (nome/endereço/telefone) entre site, GBP, Instagram e Facebook
- [ ] Rodar [PageSpeed Insights](https://pagespeed.web.dev/) na home e numa página de empreendimento — confirmar que não regrediu

## Trimestral

- [ ] Refazer a análise de concorrência resumida (`02-analise-concorrencia.md`) — checar se algum concorrente lançou GBP forte, novo site, ou mudou de estratégia
- [ ] Atualizar fotos e posts fixados do Google Meu Negócio
- [ ] Revisar a estratégia de conteúdo — o que performou bem, o que não teve tração
- [ ] Reavaliar novas oportunidades de palavra-chave (novos empreendimentos, novos bairros em alta)
- [ ] Testar os 5 termos prioritários em ChatGPT/Perplexity/Gemini — ver `08-geo-otimizacao-ia.md`

## Métricas-chave pra acompanhar (depois que GSC + GBP estiverem ativos)

| Métrica | Onde ver | Meta inicial (90 dias) |
|---|---|---|
| Páginas indexadas | Google Search Console | 100% das páginas do sitemap (hoje: 0) |
| Impressões orgânicas | Google Search Console | Tendência de crescimento mês a mês |
| Avaliações no GBP | Google Meu Negócio | 10+ avaliações reais |
| Posição nos 10 termos prioritários | Busca manual / GSC | Aparecer na primeira página em pelo menos 3-4 termos |
| Leads via WhatsApp (site) | GA4 (evento de clique) | Acompanhar volume mensal, comparar orgânico x pago |
| Custo por lead (Google Ads) | Google Ads, se ativo | Definir benchmark depois do primeiro mês real de dados |

## Nota sobre esse checklist

Este checklist assume que alguém (você) vai efetivamente rodar essas verificações
— não é algo que roda sozinho. Se quiser, dá pra transformar isso num `/loop`
mensal que te lembra de revisar, mas a execução em si (responder avaliação, postar
no GBP) precisa de uma pessoa.

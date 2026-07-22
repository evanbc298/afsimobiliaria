# Google Ads — estrutura pronta pra rodar

Data: 2026-07-21. Estrutura baseada nos termos reais do `01-pesquisa-demanda.md`.
**Nada disso foi ativado** — é a campanha pronta pra revisar e subir quando você
decidir o orçamento. CPC citado abaixo tem fonte real (ver seção de orçamento);
não inventei nenhum número.

## Objetivo

Enquanto a indexação orgânica (GSC + conteúdo) ainda está ramping up, Ads é a forma
mais rápida de aparecer nas buscas de maior intenção. Objetivo primário: **geração
de leads via WhatsApp/formulário**, não só visitas ao site.

## Campanha 1 — Marca + Cidade (prioridade máxima, CPC mais barato)

**Grupo de anúncios 1.1 — Imobiliária + cidade**
Palavras-chave:
- imobiliária Balneário Camboriú
- imobiliária em Balneário Camboriú
- imobiliária Itajaí
- imobiliária em Itajaí
- imobiliária Itapema
- assessoria imobiliária Balneário Camboriú
- corretor de imóveis Balneário Camboriú
- AFS Imobiliária

Negativas: aluguel, temporada, locação, emprego, vaga, currículo

## Campanha 2 — Compra/Investimento (intenção transacional alta)

**Grupo 2.1 — Apartamento frente mar**
- apartamento frente mar Balneário Camboriú
- apartamento frente mar Itajaí
- cobertura frente mar Balneário Camboriú
- apartamento vista mar Balneário Camboriú

**Grupo 2.2 — Na planta / lançamento**
- apartamento na planta Balneário Camboriú
- lançamento Balneário Camboriú
- lançamento Itajaí
- apartamento na planta Itapema

**Grupo 2.3 — Investimento**
- investir em imóveis Balneário Camboriú
- vale a pena investir em Balneário Camboriú
- investir em imóveis Itajaí
- melhor bairro para investir Balneário Camboriú

Negativas (todos os grupos da campanha 2): aluguel, temporada, locação, "para alugar", airbnb, imóvel usado barato, financiamento caixa (evita tráfego só informacional de banco)

## Campanha 3 — Long-tail por bairro (CPC mais barato, conversão mais qualificada)

**Grupo 3.1**
- apartamento Barra Norte Balneário Camboriú
- apartamento Barra Sul Balneário Camboriú
- apartamento Praia Brava Itajaí
- apartamento Meia Praia Itapema

## Extensões recomendadas

- **Sitelinks:** Itajaí / Balneário Camboriú / Itapema / Simule seu financiamento / Blog
- **Chamada:** número de WhatsApp/telefone da AFS
- **Frase de destaque:** "27 empreendimentos selecionados", "Assessoria completa até as chaves", "Simulação de financiamento grátis"
- **Snippet estruturado:** Tipos de imóvel → Apartamento, Cobertura, Lançamento, Pronto para morar

## Copies dos anúncios (RSA — Responsive Search Ads)

**15 headlines (máx 30 caracteres cada):**
1. Imobiliária em Balneário Camboriú
2. Assessoria Completa até as Chaves
3. Apartamentos Frente Mar em BC
4. 27 Empreendimentos Selecionados
5. Simule seu Financiamento Grátis
6. Imóveis em Itajaí e Itapema
7. Do Primeiro Imóvel ao Alto Padrão
8. Fale com a AFS no WhatsApp
9. Empreendimentos na Planta em BC
10. Litoral de SC: Compre com Segurança
11. Investir em Balneário Camboriú
12. CRECI 31495 — Assessoria Real
13. Apartamentos Prontos pra Morar
14. Cobertura com Vista Mar em BC
15. Atendimento Direto, Sem Intermediário

**4 descriptions (máx 90 caracteres cada):**
1. Assessoria imobiliária completa em Itajaí, Balneário Camboriú e Itapema. Fale com a gente.
2. Do primeiro imóvel a coberturas de alto padrão. Simule seu financiamento agora mesmo.
3. Portfólio selecionado de 27 empreendimentos. Acompanhamento do início às chaves.
4. Compre com segurança: CRECI 31495. Atendimento direto pelo WhatsApp, sem burocracia.

## Landing pages

Usar as páginas já existentes — não precisa criar página específica de campanha:
- Campanha 1 (marca) → homepage
- Campanha 2.1/2.3 → páginas de cidade (`/balneario-camboriu`, `/itajai`, `/itapema`), que já têm FAQ e simulador de financiamento
- Campanha 2.2 (lançamento) → páginas de cidade filtradas por status "Lançamento" (o filtro já existe no site)
- Campanha 3 (bairro) → páginas de cidade também, já que não há páginas de bairro dedicadas ainda

## Orçamento e lance

**CPC observado no mercado imobiliário brasileiro em 2026: entre R$ 5 e R$ 12**,
com alta de ~25-35% no último ano por aumento de concorrência (fonte: pesquisa de
mercado, não é garantia pra sua conta especificamente — CPC real depende de
qualidade do anúncio e concorrência local no momento do leilão).

Sugestão conservadora pra começar e calibrar com dado real:
- Orçamento diário inicial: R$ 50-80/dia (~R$ 1.500-2.400/mês), concentrado nas
  Campanhas 1 e 3 primeiro (CPC mais baixo, intenção mais qualificada)
- Estratégia de lance: "Maximizar cliques" nas primeiras 2 semanas pra gerar dado
  de conversão, depois migrar pra "Maximizar conversões" quando houver histórico
- Segmentação geográfica: raio de 50km das 3 cidades + principais capitais de
  origem de compradores de segunda residência (São Paulo, Curitiba, Porto Alegre)
  — ajustar depois de ver de onde vêm os leads reais

**Isso é uma sugestão de ponto de partida, não uma recomendação de gasto fixo — o
valor certo depende do quanto você quer/pode investir por mês.** Me avise quando
quiser efetivamente configurar e subir a campanha no Google Ads.

import type { Metadata } from "next";
import { PropertyFilterGrid } from "@/components/property-filter-grid";
import { Faq } from "@/components/faq";
import { getPropertiesByCity } from "@/lib/data/properties";

const title = "Imóveis de Luxo em Balneário Camboriú";
const description =
  "Apartamentos de alto padrão e luxo em Balneário Camboriú. Senna Tower, Armani Residences, Viva 360 e mais.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/balneario-camboriu/" },
  openGraph: { title, description, type: "website", url: "https://afsimobiliaria.com.br/balneario-camboriu/" },
};

export default function BalnearioCamboriuPage() {
  const propertiesBC = getPropertiesByCity("Balneário Camboriú");

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-afs-gold">Balneário Camboriú</p>
        <h1 className="mt-2 text-3xl font-bold text-afs-navy sm:text-4xl">
          Empreendimentos de luxo em Balneário Camboriú
        </h1>
        <p className="mt-3 max-w-2xl text-afs-navy/70">
          O metro quadrado mais valorizado do Brasil. {propertiesBC.length} empreendimentos de
          altíssimo padrão selecionados pela AFS, na Barra Sul e no Centro.
        </p>
      </div>
      <PropertyFilterGrid properties={propertiesBC} />

      <Faq
        title="Perguntas frequentes sobre imóveis em Balneário Camboriú"
        items={[
          {
            question: "Qual o ITBI em Balneário Camboriú?",
            answer:
              "O ITBI em Balneário Camboriú é de 3% sobre o valor da transação ou o valor venal, o que for maior. Numa compra de R$ 1 milhão, isso representa R$ 30 mil — o pagamento precisa ser comprovado antes do registro da escritura em cartório.",
          },
          {
            question: "Por que Balneário Camboriú é tão valorizada?",
            answer:
              "Balneário Camboriú tem o metro quadrado residencial mais caro do Brasil pelo quarto ano seguido, hoje em torno de R$ 15.000 — 55,8% acima da média nacional. A combinação de pouco terreno disponível (faixa estreita entre o mar e o morro), demanda internacional crescente e empreendimentos de altíssimo padrão sustenta essa valorização.",
          },
          {
            question: "Qual o ticket médio de um imóvel em Balneário Camboriú?",
            answer:
              "O ticket médio hoje gira em torno de R$ 2,2 milhões, mas o mercado tem camadas: existem empreendimentos de entrada a partir de R$ 250 mil, opções de alto padrão a partir de R$ 800 mil, e o segmento de luxo absoluto acima de R$ 3 milhões, concentrado na Barra Sul.",
          },
          {
            question: "Vale a pena investir em Airbnb em Balneário Camboriú?",
            answer:
              "A ocupação média de aluguel por temporada fica entre 60% e 70% ao longo do ano, com ROI anual estimado entre 8% e 12% — acima da média nacional pra esse tipo de investimento. O retorno varia bastante conforme padrão do imóvel e proximidade da praia.",
          },
        ]}
      />
    </div>
  );
}

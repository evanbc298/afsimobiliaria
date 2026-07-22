import type { Metadata } from "next";
import { PropertyFilterGrid } from "@/components/property-filter-grid";
import { Faq } from "@/components/faq";
import { getPropertiesByCity } from "@/lib/data/properties";

const title = "Apartamentos em Itajaí — Empreendimentos Selecionados";
const description =
  "Os melhores empreendimentos de Itajaí, do centro à Praia Brava. Apartamentos de R$ 350 mil a R$ 5 milhões.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/itajai/" },
  openGraph: { title, description, type: "website", url: "https://afsimobiliaria.com.br/itajai/" },
};

export default function ItajaiPage() {
  const propertiesItajai = getPropertiesByCity("Itajaí");

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-afs-gold">Itajaí</p>
        <h1 className="mt-2 text-3xl font-bold text-afs-navy sm:text-4xl">
          Empreendimentos em Itajaí
        </h1>
        <p className="mt-3 max-w-2xl text-afs-navy/70">
          Itajaí valorizou 46% em 3 anos. Do centro à Praia Brava, {propertiesItajai.length}{" "}
          empreendimentos selecionados pela AFS, de entrada acessível a alto padrão.
        </p>
      </div>
      <PropertyFilterGrid properties={propertiesItajai} />

      <Faq
        title="Perguntas frequentes sobre imóveis em Itajaí"
        items={[
          {
            question: "Qual o ITBI em Itajaí?",
            answer:
              "O ITBI (Imposto de Transmissão de Bens Imóveis) em Itajaí é de 2% sobre o valor da transação ou o valor venal, o que for maior. Numa compra de R$ 1 milhão, isso representa R$ 20 mil — é preciso ter esse valor disponível antes do registro em cartório.",
          },
          {
            question: "Qual o bairro mais valorizado de Itajaí?",
            answer:
              "A Praia Brava é hoje o bairro mais valorizado de Itajaí, com preço médio por metro quadrado em torno de R$ 13.500 — acima da média geral da cidade, puxado pela proximidade com Balneário Camboriú e pelos lançamentos de alto padrão da região.",
          },
          {
            question: "Vale a pena investir em Itajaí?",
            answer:
              "Itajaí valorizou 46% nos últimos 3 anos, beneficiada pela proximidade com Balneário Camboriú e por ter ticket de entrada mais acessível que a vizinha. É uma opção especialmente interessante pra quem busca o mesmo perfil de litoral com um investimento inicial menor.",
          },
        ]}
      />
    </div>
  );
}

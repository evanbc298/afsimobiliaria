import type { Metadata } from "next";
import { PropertyFilterGrid } from "@/components/property-filter-grid";
import { Faq } from "@/components/faq";
import { getPropertiesByCity } from "@/lib/data/properties";

const title = "Apartamentos em Itapema — Empreendimentos Selecionados";
const description =
  "Os melhores empreendimentos de Itapema, do Centro à Meia Praia. Torres frente-mar e lançamentos de alto padrão selecionados pela AFS.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/itapema/" },
  openGraph: { title, description, type: "website", url: "https://afsimobiliaria.com.br/itapema/" },
};

export default function ItapemaPage() {
  const propertiesItapema = getPropertiesByCity("Itapema");

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-afs-gold">Itapema</p>
        <h1 className="mt-2 text-3xl font-bold text-afs-navy sm:text-4xl">
          Empreendimentos em Itapema
        </h1>
        <p className="mt-3 max-w-2xl text-afs-navy/70">
          Entre Itajaí e Balneário Camboriú, Itapema virou referência de litoral premium — do
          Centro frente-mar à Meia Praia. {propertiesItapema.length} empreendimentos selecionados
          pela AFS.
        </p>
      </div>
      <PropertyFilterGrid properties={propertiesItapema} />

      <Faq
        title="Perguntas frequentes sobre imóveis em Itapema"
        items={[
          {
            question: "Itapema fica perto de Balneário Camboriú?",
            answer:
              "Sim. Itapema fica entre Itajaí e Balneário Camboriú, no litoral norte de Santa Catarina, a poucos minutos de carro dos dois — o que a torna uma opção de litoral premium com fácil acesso à infraestrutura das cidades vizinhas.",
          },
          {
            question: "Qual o melhor bairro pra comprar em Itapema?",
            answer:
              "A Meia Praia é o bairro mais procurado de Itapema, com infraestrutura completa (mercados, farmácias, restaurantes, escolas) e uma orla bem estruturada. O Centro, com trecho frente-mar, também concentra empreendimentos de alto padrão.",
          },
          {
            question: "A AFS Imobiliária tem empreendimentos prontos e na planta em Itapema?",
            answer:
              "Sim, trabalhamos com um portfólio selecionado que inclui tanto lançamentos na planta quanto empreendimentos entregues em Itapema — fale com a gente pra ver as opções disponíveis pro seu perfil e orçamento.",
          },
        ]}
      />
    </div>
  );
}

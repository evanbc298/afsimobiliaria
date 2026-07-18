import type { Metadata } from "next";
import { PropertyGrid } from "@/components/property-grid";
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
      <PropertyGrid properties={propertiesItapema} />
    </div>
  );
}

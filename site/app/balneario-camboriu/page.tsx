import type { Metadata } from "next";
import { PropertyGrid } from "@/components/property-grid";
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
      <PropertyGrid properties={propertiesBC} />
    </div>
  );
}

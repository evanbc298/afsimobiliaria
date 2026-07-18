import type { Metadata } from "next";
import { PropertyGrid } from "@/components/property-grid";
import { getPropertiesByCity } from "@/lib/data/properties";

export const metadata: Metadata = {
  title: "Apartamentos em Itajaí — Empreendimentos Selecionados",
  description:
    "Os melhores empreendimentos de Itajaí, do centro à Praia Brava. Apartamentos de R$ 350 mil a R$ 5 milhões.",
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
      <PropertyGrid properties={propertiesItajai} />
    </div>
  );
}

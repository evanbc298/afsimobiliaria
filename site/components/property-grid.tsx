import { Property } from "@/lib/types";
import { PropertyCard } from "@/components/property-card";

export function PropertyGrid({ properties }: { properties: Property[] }) {
  if (properties.length === 0) {
    return <p className="text-center text-afs-navy/60">Nenhum empreendimento encontrado.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}

import Link from "next/link";
import { MapPin } from "lucide-react";
import { Property } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <Link
      href={`/empreendimento/${property.slug}`}
      className="group block overflow-hidden rounded-lg border border-afs-navy/10 bg-white transition-shadow hover:shadow-lg"
    >
      <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-afs-navy/5">
        {property.images.length > 0 ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={property.images[0]}
            alt={property.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <span className="text-sm text-afs-navy/30">Foto em breve</span>
        )}
        <Badge className="absolute left-3 top-3 bg-afs-navy text-afs-cream">{property.status}</Badge>
      </div>
      <div className="p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-afs-gold">{property.developer}</p>
        <h3 className="mt-1 text-lg font-bold text-afs-navy group-hover:underline">{property.name}</h3>
        <p className="mt-1 flex items-center gap-1 text-sm text-afs-navy/60">
          <MapPin className="h-3.5 w-3.5" />
          {property.location}
        </p>
        <p className="mt-3 text-sm text-afs-navy/70">
          {property.typology} · {property.area}
        </p>
        <p className="mt-3 text-base font-semibold text-afs-navy">A partir de R$ {property.priceMin.toLocaleString("pt-BR")}</p>
      </div>
    </Link>
  );
}

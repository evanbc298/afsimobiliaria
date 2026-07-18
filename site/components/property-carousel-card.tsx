import Link from "next/link";
import { MapPin } from "lucide-react";
import { Property } from "@/lib/types";

const STATUS_STYLES: Record<Property["status"], string> = {
  "Lançamento": "bg-amber-500 text-white",
  "Em Construção": "bg-sky-500 text-white",
  "Pronto": "bg-emerald-500 text-white",
  "Últimas Unidades": "bg-rose-500 text-white",
};

export function PropertyCarouselCard({ property }: { property: Property }) {
  return (
    <Link
      href={`/empreendimento/${property.slug}`}
      className="group block w-[280px] shrink-0 snap-start overflow-hidden rounded-2xl border border-afs-navy/10 bg-white shadow-sm transition-shadow hover:shadow-xl sm:w-[320px]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-afs-navy/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={property.images[0]}
          alt={property.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${STATUS_STYLES[property.status]}`}
        >
          {property.status}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-afs-navy shadow-sm">
          {property.neighborhood}
        </span>
      </div>
      <div className="p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-afs-gold">{property.developer}</p>
        <h3 className="mt-1 text-lg font-bold leading-snug text-afs-navy group-hover:underline">
          {property.name}
        </h3>
        <p className="mt-1 flex items-center gap-1 text-sm text-afs-navy/60">
          <MapPin className="h-3.5 w-3.5" />
          {property.location}
        </p>
        <p className="mt-3 text-sm text-afs-navy/70">
          {property.typology} · {property.area}
        </p>
        <p className="mt-3 text-base font-semibold text-afs-navy">
          {property.priceMin > 0 ? `A partir de R$ ${property.priceMin.toLocaleString("pt-BR")}` : "Consulte-nos"}
        </p>
      </div>
    </Link>
  );
}

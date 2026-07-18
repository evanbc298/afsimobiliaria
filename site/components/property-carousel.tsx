"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Property } from "@/lib/types";
import { PropertyCarouselCard } from "@/components/property-carousel-card";

export function PropertyCarousel({
  title,
  subtitle,
  properties,
}: {
  title: string;
  subtitle: string;
  properties: Property[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(direction: "left" | "right") {
    const track = trackRef.current;
    if (!track) return;
    const amount = track.clientWidth * 0.85;
    track.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-afs-navy sm:text-3xl">{title}</h2>
          <p className="mt-1 text-afs-navy/60">{subtitle}</p>
        </div>
        <div className="hidden shrink-0 gap-2 sm:flex">
          <button
            onClick={() => scroll("left")}
            aria-label="Anterior"
            className="rounded-full border border-afs-navy/20 p-2 text-afs-navy transition-colors hover:border-afs-navy hover:bg-afs-navy hover:text-afs-cream"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Próximo"
            className="rounded-full border border-afs-navy/20 p-2 text-afs-navy transition-colors hover:border-afs-navy hover:bg-afs-navy hover:text-afs-cream"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {properties.map((property) => (
          <PropertyCarouselCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}

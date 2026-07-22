"use client";

import { useState } from "react";

export function PropertyGallery({
  images,
  name,
  location,
}: {
  images: string[];
  name: string;
  location?: string;
}) {
  const altBase = location ? `${name} — ${location}` : name;
  const [active, setActive] = useState(0);

  if (images.length === 0) {
    return (
      <div className="mb-8 flex aspect-[21/9] items-center justify-center rounded-lg bg-afs-navy/5">
        <span className="text-afs-navy/30">Galeria de fotos em breve</span>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <div className="aspect-[21/9] overflow-hidden rounded-lg bg-afs-navy/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={images[active]} alt={`${altBase} — foto ${active + 1}`} className="h-full w-full object-cover" />
      </div>
      {images.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(i)}
              className={`h-16 w-24 shrink-0 overflow-hidden rounded-md border-2 transition-opacity ${
                i === active ? "border-afs-gold" : "border-transparent opacity-70 hover:opacity-100"
              }`}
              aria-label={`Foto ${i + 1} de ${name}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

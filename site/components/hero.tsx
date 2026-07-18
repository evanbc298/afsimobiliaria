"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const SLIDES = [
  { src: "/images/hero/balneario-skyline.jpg", alt: "Orla de Balneário Camboriú" },
  { src: "/images/hero/itajai-praia-brava.jpg", alt: "Praia Brava, Itajaí" },
  { src: "/images/hero/balneario-orla.jpg", alt: "Calçadão da Praia Central de Balneário Camboriú" },
];

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-afs-navy px-4 py-24 text-afs-cream sm:px-6 sm:py-32">
      <div className="absolute inset-0">
        {SLIDES.map((slide, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-afs-navy/90 via-afs-navy/75 to-afs-navy/90" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-afs-gold">
          Itajaí &amp; Balneário Camboriú
        </p>
        <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
          A imobiliária pra confiar na compra e venda do seu imóvel
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-afs-cream/80">
          Assessoria completa, do início às chaves. 20 empreendimentos selecionados
          no litoral de Santa Catarina, de R$ 250 mil a R$ 50 milhões.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="bg-afs-gold text-afs-navy hover:bg-afs-gold/90">
            <Link href="/itajai">Ver Empreendimentos</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-afs-cream/30 bg-transparent text-afs-cream hover:bg-afs-cream/10"
          >
            <Link href="/contato">Falar com um especialista</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

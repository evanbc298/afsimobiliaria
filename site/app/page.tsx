import Link from "next/link";
import { Hero } from "@/components/hero";
import { StatsBar } from "@/components/stats-bar";
import { PropertyGrid } from "@/components/property-grid";
import { Button } from "@/components/ui/button";
import { properties } from "@/lib/data/properties";

export default function Home() {
  const featured = [
    properties.find((p) => p.tier === 1),
    properties.find((p) => p.tier === 2),
    properties.find((p) => p.tier === 3),
  ].filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <Hero />
      <StatsBar />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-afs-navy">Empreendimentos em destaque</h2>
          <p className="mt-2 text-afs-navy/60">Um de cada perfil — do primeiro imóvel ao luxo absoluto.</p>
        </div>
        <PropertyGrid properties={featured} />
        <div className="mt-10 flex justify-center gap-4">
          <Button asChild variant="outline" className="border-afs-navy text-afs-navy hover:bg-afs-navy hover:text-afs-cream">
            <Link href="/itajai">Ver Itajaí</Link>
          </Button>
          <Button asChild variant="outline" className="border-afs-navy text-afs-navy hover:bg-afs-navy hover:text-afs-cream">
            <Link href="/balneario-camboriu">Ver Balneário Camboriú</Link>
          </Button>
        </div>
      </section>

      <section className="bg-afs-navy px-4 py-16 text-center text-afs-cream sm:px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">Pronto para encontrar seu imóvel ideal?</h2>
        <p className="mx-auto mt-3 max-w-xl text-afs-cream/80">
          Fale com a gente e receba uma seleção de imóveis de acordo com o seu perfil.
        </p>
        <Button asChild size="lg" className="mt-8 bg-afs-gold text-afs-navy hover:bg-afs-gold/90">
          <Link href="/contato">Falar com um especialista</Link>
        </Button>
      </section>
    </>
  );
}

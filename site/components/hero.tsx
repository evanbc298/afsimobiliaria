import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-afs-navy px-4 py-24 text-afs-cream sm:px-6 sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
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

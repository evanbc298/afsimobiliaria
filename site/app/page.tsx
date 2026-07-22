import Link from "next/link";
import { Home as HomeIcon, TrendingUp } from "lucide-react";
import { Hero } from "@/components/hero";
import { StatsBar } from "@/components/stats-bar";
import { PropertyCarousel } from "@/components/property-carousel";
import { Faq } from "@/components/faq";
import { Button } from "@/components/ui/button";
import { properties } from "@/lib/data/properties";
import { whatsappLink } from "@/lib/whatsapp";

export default function Home() {
  const withPhotos = properties.filter((p) => p.images.length > 0);
  const tier1 = withPhotos.filter((p) => p.tier === 1);
  const tier2 = withPhotos.filter((p) => p.tier === 2);
  const tier3 = withPhotos.filter((p) => p.tier === 3);

  return (
    <>
      <Hero />
      <StatsBar />

      <PropertyCarousel
        title="Para o seu primeiro imóvel"
        subtitle="Ticket de entrada acessível, sem abrir mão de localização e qualidade."
        properties={tier1}
      />

      <div className="border-t border-afs-navy/10" />

      <PropertyCarousel
        title="Alto padrão, alta margem"
        subtitle="Empreendimentos com diferenciais reais e potencial de valorização, de Itajaí a Itapema."
        properties={tier2}
      />

      <div className="border-t border-afs-navy/10" />

      <PropertyCarousel
        title="Litoral de luxo absoluto"
        subtitle="Barra Sul, Centro de Balneário Camboriú e Itapema — o topo do mercado catarinense."
        properties={tier3}
      />

      <section className="mx-auto max-w-6xl px-4 pb-6 pt-2 sm:px-6">
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild variant="outline" className="border-afs-navy text-afs-navy hover:bg-afs-navy hover:text-afs-cream">
            <Link href="/itajai">Ver Itajaí</Link>
          </Button>
          <Button asChild variant="outline" className="border-afs-navy text-afs-navy hover:bg-afs-navy hover:text-afs-cream">
            <Link href="/balneario-camboriu">Ver Balneário Camboriú</Link>
          </Button>
          <Button asChild variant="outline" className="border-afs-navy text-afs-navy hover:bg-afs-navy hover:text-afs-cream">
            <Link href="/itapema">Ver Itapema</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-afs-navy to-afs-navy-light p-8 text-afs-cream sm:p-10">
            <HomeIcon className="h-9 w-9 text-afs-gold" />
            <h3 className="mt-5 text-2xl font-bold">Tem um imóvel pra vender ou alugar?</h3>
            <p className="mt-3 text-afs-cream/80">
              A gente cuida de tudo: avaliação, fotos, divulgação e negociação — assessoria
              completa até a entrega das chaves, sem você precisar correr atrás de nada.
            </p>
            <Button asChild size="lg" className="mt-7 bg-afs-gold text-afs-navy hover:bg-afs-gold/90">
              <a
                href={whatsappLink("Olá! Tenho um imóvel e gostaria de avaliar com a AFS.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Avaliar meu imóvel
              </a>
            </Button>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-afs-gold to-amber-600 p-8 text-afs-navy sm:p-10">
            <TrendingUp className="h-9 w-9 text-afs-navy" />
            <h3 className="mt-5 text-2xl font-bold">Quer investir no litoral certo?</h3>
            <p className="mt-3 text-afs-navy/80">
              Comparamos tickets, prazos de entrega e potencial de valorização bairro a bairro
              pra te indicar o empreendimento certo pro seu perfil — não o mais fácil de vender.
            </p>
            <Button asChild size="lg" className="mt-7 bg-afs-navy text-afs-cream hover:bg-afs-navy/90">
              <a
                href={whatsappLink("Olá! Quero saber mais sobre onde investir no litoral com a AFS.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com um especialista
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Faq
        items={[
          {
            question: "A AFS Imobiliária cobra alguma taxa do comprador?",
            answer:
              "Não. Nossa comissão é paga pela construtora ou pelo vendedor, como é padrão no mercado imobiliário — pra você, comprador, a assessoria da AFS não tem custo adicional sobre o preço do imóvel.",
          },
          {
            question: "Em quais cidades a AFS Imobiliária atua?",
            answer:
              "Trabalhamos com empreendimentos selecionados em Itajaí, Balneário Camboriú e Itapema, no litoral norte de Santa Catarina.",
          },
          {
            question: "Vocês ajudam com financiamento?",
            answer:
              "Sim. Temos um simulador de financiamento direto nas páginas de cada empreendimento, e acompanhamos todo o processo de aprovação de crédito junto ao banco ou à construtora.",
          },
          {
            question: "Preciso morar em Santa Catarina para comprar com a AFS?",
            answer:
              "Não. Atendemos compradores de outras cidades e estados que buscam segunda residência ou investimento no litoral catarinense — negociação, documentação e acompanhamento podem ser feitos à distância, com visita presencial quando fizer sentido.",
          },
          {
            question: "Qual a diferença entre comprar na planta e comprar pronto?",
            answer:
              "Na planta o preço de entrada costuma ser menor e o pagamento é parcelado direto com a construtora, mas há prazo de espera pela entrega. Pronto custa mais, mas elimina o risco de prazo de obra. A melhor opção depende do seu objetivo (morar, alugar ou valorização) — recomendamos conversar com um de nossos especialistas antes de decidir.",
          },
        ]}
      />
    </>
  );
}

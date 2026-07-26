import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { whatsappLink } from "@/lib/whatsapp";

const SITE_URL = "https://afsimobiliaria.com.br";
const title = "Buy Real Estate in Balneário Camboriú, Brazil — AFS Imobiliária";
const description =
  "Direct, English-friendly real estate assistance for buying property in Balneário Camboriú, Itajaí and Itapema, Brazil — from first contact to the deed in your name. Licensed agency, CRECI 31495.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "buy apartment Balneário Camboriú",
    "Brazil real estate for foreigners",
    "invest in Brazilian coastal property",
    "VIPER Golden Visa Brazil real estate",
  ],
  alternates: {
    canonical: "/en/",
    languages: {
      "pt-BR": `${SITE_URL}/`,
      en: `${SITE_URL}/en/`,
    },
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: `${SITE_URL}/en/`,
    locale: "en_US",
    images: [{ url: "/logo-og.png", width: 1408, height: 768, alt: "AFS Imobiliária" }],
  },
};

const whatsappMessage =
  "Hi! I found AFS Imobiliária's English page and I'm interested in buying property in Balneário Camboriú, Itajaí or Itapema.";

export default function EnglishPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "AFS Imobiliária",
    url: `${SITE_URL}/en/`,
    identifier: "CRECI 31495",
    areaServed: [
      { "@type": "City", name: "Balneário Camboriú" },
      { "@type": "City", name: "Itajaí" },
      { "@type": "City", name: "Itapema" },
    ],
  };

  return (
    <div lang="en" className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <JsonLd data={jsonLd} />

      <p className="text-sm font-semibold uppercase tracking-widest text-afs-gold">
        For international buyers
      </p>
      <h1 className="mt-2 text-3xl font-bold leading-tight text-afs-navy sm:text-4xl">
        Invest in Brazil&rsquo;s most valuable coastline.
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-afs-navy/70">
        Balneário Camboriú — nicknamed &ldquo;Brazil&rsquo;s Dubai&rdquo; for its skyline of
        oceanfront towers — has the highest residential price per square meter in the country.
        AFS Imobiliária helps you buy the right property here, in Itajaí, or in Itapema, with
        direct, personal guidance from first contact to the deed in your name.
      </p>

      <div className="mt-8">
        <Button asChild size="lg" className="bg-afs-navy text-afs-cream hover:bg-afs-navy/90">
          <a href={whatsappLink(whatsappMessage)} target="_blank" rel="noopener noreferrer">
            Message us on WhatsApp
          </a>
        </Button>
      </div>

      <div className="mt-16 space-y-14">
        <section>
          <h2 className="text-2xl font-bold text-afs-navy">Why this coastline</h2>
          <div className="mt-3 space-y-3 text-afs-navy/80">
            <p>
              Balneário Camboriú&rsquo;s residential square meter averages around R$ 15,000 —
              55.8% above Brazil&rsquo;s national average — a trend that has held for four
              consecutive years, not a one-time spike.
            </p>
            <p>
              Foreigners can buy and own property in Brazil with the same rights as Brazilian
              citizens — no residency required, no restrictions on urban real estate.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-afs-navy">
            The VIPER Golden Visa: residency through real estate
          </h2>
          <div className="mt-3 space-y-3 text-afs-navy/80">
            <p>
              Brazil&rsquo;s official real estate investor visa (VIPER) grants temporary
              residency — renewable, with a path to permanent residency and citizenship after 4
              years — to buyers who invest <strong>R$ 1,000,000 or more</strong> in urban
              property. It covers the investor, spouse and dependents, and requires only 14 days
              of stay in Brazil every 2 years. Several properties in our portfolio already meet
              this threshold.
            </p>
            <p className="text-sm text-afs-navy/50">
              This is general information, not immigration or legal advice — visa rules change
              and your specific case should be confirmed with a licensed immigration attorney
              before you commit to a purchase.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-afs-navy">Where we operate</h2>
          <p className="mt-3 text-afs-navy/80">
            AFS Imobiliária sells real inventory in three cities on Brazil&rsquo;s Santa Catarina
            coast — we don&rsquo;t list what we can&rsquo;t deliver:
          </p>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Link
              href="/balneario-camboriu"
              className="rounded-lg border border-afs-navy/10 bg-white p-5 hover:border-afs-gold"
            >
              <p className="font-semibold text-afs-navy">Balneário Camboriú</p>
              <p className="mt-1 text-sm text-afs-navy/60">
                High-rise, high-end living. The most expensive m² in Brazil.
              </p>
            </Link>
            <Link
              href="/itajai"
              className="rounded-lg border border-afs-navy/10 bg-white p-5 hover:border-afs-gold"
            >
              <p className="font-semibold text-afs-navy">Itajaí</p>
              <p className="mt-1 text-sm text-afs-navy/60">
                More accessible entry price, including the fast-growing Praia Brava area.
              </p>
            </Link>
            <Link
              href="/itapema"
              className="rounded-lg border border-afs-navy/10 bg-white p-5 hover:border-afs-gold"
            >
              <p className="font-semibold text-afs-navy">Itapema</p>
              <p className="mt-1 text-sm text-afs-navy/60">
                As of May 2026, Brazil&rsquo;s single most expensive m² — ahead of Balneário
                Camboriú.
              </p>
            </Link>
          </div>
          <p className="mt-3 text-xs text-afs-navy/40">
            City pages are in Portuguese — photos, prices and features are easy to follow, and
            you can message us in English any time for details.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-afs-navy">Why work with AFS directly</h2>
          <p className="mt-3 text-afs-navy/80">
            Large international listing portals show you photos. We do the work in between:
            comparing developments, checking documentation, coordinating with notaries, and
            answering the practical questions that come up when you&rsquo;re buying from another
            country — all through one direct WhatsApp conversation, not a call center.
          </p>
        </section>
      </div>

      <div className="mt-16">
        <Faq
          title="Frequently asked questions"
          items={[
            {
              question: "Can foreigners buy property in Brazil?",
              answer:
                "Yes. Foreign nationals can buy and own urban real estate in Brazil with the same rights as Brazilian citizens, without needing residency first.",
            },
            {
              question: "What is the VIPER Golden Visa?",
              answer:
                "It's Brazil's official real estate investor visa: an investment of R$ 1,000,000 or more in urban property grants renewable temporary residency, with a path to citizenship after 4 years and a minimum stay of just 14 days every 2 years. Confirm current rules with an immigration attorney before relying on this for your specific plans.",
            },
            {
              question: "Do you speak English?",
              answer:
                "We communicate in English over WhatsApp text, using translation tools to make sure nothing gets lost — this works well for property details, pricing and next steps. For contracts or immigration matters, we recommend working alongside a licensed attorney, same as we'd suggest to any buyer.",
            },
            {
              question: "Do I need to travel to Brazil to buy a property?",
              answer:
                "Not necessarily — with a Brazilian CPF (tax ID) and a power of attorney with specific authority, a representative can sign on your behalf. We can point you to the right professionals to set this up.",
            },
          ]}
        />
      </div>

      <div className="mt-4 rounded-lg bg-afs-navy px-6 py-10 text-center">
        <p className="text-lg font-semibold text-afs-cream">
          Ready to see what&rsquo;s available?
        </p>
        <p className="mt-1 text-sm text-afs-cream/70">
          Message us on WhatsApp — we&rsquo;ll reply in English.
        </p>
        <Button asChild size="lg" className="mt-5 bg-afs-gold text-afs-navy hover:bg-afs-gold/90">
          <a href={whatsappLink(whatsappMessage)} target="_blank" rel="noopener noreferrer">
            Message us on WhatsApp
          </a>
        </Button>
        <p className="mt-4 text-xs text-afs-cream/40">AFS Imobiliária · CRECI 31495</p>
      </div>
    </div>
  );
}

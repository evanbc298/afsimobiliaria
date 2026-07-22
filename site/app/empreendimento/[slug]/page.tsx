import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin, Ruler, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/contact-form";
import { FinancingSimulator } from "@/components/financing-simulator";
import { PropertyGallery } from "@/components/property-gallery";
import { JsonLd } from "@/components/json-ld";
import { properties, getPropertyBySlug } from "@/lib/data/properties";
import { whatsappLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";

const SITE_URL = "https://afsimobiliaria.com.br";

export async function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return {};

  const title = `${property.name} — ${property.neighborhood}`;
  const priceText = property.priceMin > 0 ? `a partir de ${property.priceDisplay}` : "sob consulta";
  const description = `${property.name} em ${property.location}. ${property.typology} de ${property.area}, ${priceText}. ${property.differentials[0]}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/empreendimento/${property.slug}/`,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `${SITE_URL}/empreendimento/${property.slug}/`,
      ...(property.images.length > 0 && { images: [{ url: property.images[0] }] }),
    },
  };
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: property.name,
    description: property.description,
    url: `${SITE_URL}/empreendimento/${property.slug}/`,
    ...(property.images.length > 0 && { image: `${SITE_URL}${property.images[0]}` }),
    datePosted: "2026-07-18",
    address: {
      "@type": "PostalAddress",
      addressLocality: property.city,
      addressRegion: "SC",
      addressCountry: "BR",
    },
    ...(property.priceMin > 0 && {
      offers: {
        "@type": "Offer",
        priceCurrency: "BRL",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: property.priceMin,
          maxPrice: property.priceMax,
          priceCurrency: "BRL",
        },
      },
    }),
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <JsonLd data={jsonLd} />
      <PropertyGallery images={property.images} name={property.name} location={property.location} />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="flex flex-wrap items-center gap-3">
            <Badge className="bg-afs-navy text-afs-cream">{property.status}</Badge>
            <span className="text-sm font-medium uppercase tracking-wide text-afs-gold">
              {property.developer}
            </span>
          </div>
          <h1 className="mt-3 text-3xl font-bold text-afs-navy sm:text-4xl">{property.name}</h1>
          <p className="mt-2 flex items-center gap-1.5 text-afs-navy/70">
            <MapPin className="h-4 w-4" />
            {property.location}
          </p>

          <div className="mt-6 flex flex-wrap gap-6 border-y border-afs-navy/10 py-6">
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-afs-gold" />
              <span className="text-sm text-afs-navy">{property.typology}</span>
            </div>
            <div className="flex items-center gap-2">
              <Ruler className="h-5 w-5 text-afs-gold" />
              <span className="text-sm text-afs-navy">{property.area}</span>
            </div>
          </div>

          <p className="mt-6 leading-relaxed text-afs-navy/80">{property.description}</p>

          <h2 className="mt-8 text-lg font-semibold text-afs-navy">Diferenciais</h2>
          <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {property.differentials.map((d) => (
              <li key={d} className="flex items-start gap-2 text-sm text-afs-navy/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-afs-gold" />
                {d}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:sticky lg:top-24 lg:h-fit">
          <p className="mb-4 text-2xl font-bold text-afs-navy">
            {property.priceMin > 0 ? `A partir de R$ ${property.priceMin.toLocaleString("pt-BR")}` : "Consulte-nos"}
          </p>
          <ContactForm propertyName={property.name} />
          <Button
            asChild
            variant="outline"
            className="mt-3 w-full border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
          >
            <a
              href={whatsappLink(`Olá! Tenho interesse no ${property.name} (${property.location}).`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar direto no WhatsApp
            </a>
          </Button>

          <FinancingSimulator priceMin={property.priceMin} propertyName={property.name} />
        </div>
      </div>
    </div>
  );
}

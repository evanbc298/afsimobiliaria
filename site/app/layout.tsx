import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsappFloat } from "@/components/whatsapp-float";
import { JsonLd } from "@/components/json-ld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://afsimobiliaria.com.br";

export const metadata: Metadata = {
  title: {
    default: "AFS Imobiliária — Imóveis em Itajaí, Balneário Camboriú e Itapema",
    template: "%s | AFS Imobiliária",
  },
  description:
    "Assessoria imobiliária completa em Itajaí, Balneário Camboriú e Itapema, do início do processo até a entrega das chaves. 27 empreendimentos selecionados, de R$ 250 mil a R$ 50 milhões.",
  keywords: [
    "imobiliária Itajaí",
    "imobiliária Balneário Camboriú",
    "apartamento Itajaí",
    "apartamento Balneário Camboriú",
    "comprar apartamento Santa Catarina",
    "empreendimentos Praia Brava",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "AFS Imobiliária",
    title: "AFS Imobiliária — Imóveis em Itajaí, Balneário Camboriú e Itapema",
    description:
      "Assessoria imobiliária completa em Itajaí, Balneário Camboriú e Itapema, do início do processo até a entrega das chaves.",
    images: [{ url: "/logo-og.png", width: 1408, height: 768, alt: "AFS Imobiliária" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AFS Imobiliária — Imóveis em Itajaí, Balneário Camboriú e Itapema",
    description:
      "Assessoria imobiliária completa em Itajaí, Balneário Camboriú e Itapema, do início do processo até a entrega das chaves.",
    images: ["/logo-og.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "AFS Imobiliária",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo-og.png`,
  identifier: "CRECI 31495",
  areaServed: [
    { "@type": "City", name: "Itajaí" },
    { "@type": "City", name: "Balneário Camboriú" },
    { "@type": "City", name: "Itapema" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua 3.500, nº 97",
    addressLocality: "Balneário Camboriú",
    addressRegion: "SC",
    addressCountry: "BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-afs-cream">
        <JsonLd data={organizationJsonLd} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsappFloat />
      </body>
    </html>
  );
}

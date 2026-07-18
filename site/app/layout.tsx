import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsappFloat } from "@/components/whatsapp-float";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AFS Imobiliária — Imóveis em Itajaí e Balneário Camboriú",
    template: "%s | AFS Imobiliária",
  },
  description:
    "Assessoria imobiliária completa em Itajaí e Balneário Camboriú, do início do processo até a entrega das chaves. 20 empreendimentos selecionados.",
  metadataBase: new URL("https://afsimobiliaria.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "AFS Imobiliária",
    title: "AFS Imobiliária — Imóveis em Itajaí e Balneário Camboriú",
    description:
      "Assessoria imobiliária completa em Itajaí e Balneário Camboriú, do início do processo até a entrega das chaves.",
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsappFloat />
      </body>
    </html>
  );
}

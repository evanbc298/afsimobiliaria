import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { whatsappLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";

const title = "Fale Conosco — Agende sua Visita";
const description =
  "Entre em contato para agendar uma visita virtual ou presencial. Atendimento em Itajaí e Balneário Camboriú.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contato/" },
  openGraph: { title, description, type: "website", url: "https://afsimobiliaria.com.br/contato/" },
};

export default function ContatoPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-afs-navy sm:text-4xl">Fale com a AFS</h1>
        <p className="mt-3 text-afs-navy/70">
          Comprar, vender ou investir — conta pra gente o que você precisa e a gente te ajuda a
          encontrar o caminho mais rápido.
        </p>
      </div>

      <ContactForm />

      <div className="mt-6 text-center">
        <p className="text-sm text-afs-navy/60">Prefere falar direto?</p>
        <Button asChild variant="outline" className="mt-3 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white">
          <a href={whatsappLink("Olá! Vim pelo site da AFS Imobiliária.")} target="_blank" rel="noopener noreferrer">
            Falar no WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
}

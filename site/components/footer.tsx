import Link from "next/link";
import { whatsappLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-afs-navy px-4 py-12 text-afs-cream/80 sm:px-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-afs-cream">
            AFS <span className="text-afs-gold">Imobiliária</span>
          </p>
          <p className="mt-3 text-sm">
            Assessoria imobiliária completa em Itajaí e Balneário Camboriú, do início do
            processo até a entrega das chaves.
          </p>
          <p className="mt-3 text-sm">CRECI 31495</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-afs-gold">Navegação</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/itajai">Itajaí</Link>
            </li>
            <li>
              <Link href="/balneario-camboriu">Balneário Camboriú</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-afs-gold">Contato</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={whatsappLink("Olá! Vim pelo site da AFS Imobiliária.")} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
            <li>Itajaí / Balneário Camboriú — SC</li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-afs-cream/10 pt-6 text-xs text-afs-cream/50">
        © {new Date().getFullYear()} AFS Imobiliária. Todos os direitos reservados.
      </p>
    </footer>
  );
}

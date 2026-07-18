import Link from "next/link";
import Image from "next/image";
import { whatsappLink } from "@/lib/whatsapp";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-afs-navy px-4 py-12 text-afs-cream/80 sm:px-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 text-lg font-bold text-afs-cream">
            <Image src="/icon-mark-light.png" alt="" width={28} height={28} className="h-7 w-7" />
            AFS <span className="text-afs-gold">Imobiliária</span>
          </p>
          <p className="mt-3 text-sm">
            Assessoria imobiliária completa em Itajaí, Balneário Camboriú e Itapema, do início
            do processo até a entrega das chaves.
          </p>
          <p className="mt-3 text-sm">Rua 3.500, nº 97 — Centro, Balneário Camboriú/SC</p>
          <p className="mt-1 text-sm">CRECI 31495</p>
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
              <Link href="/itapema">Itapema</Link>
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
            <li>
              <a
                href="https://www.instagram.com/afsimobiliaria/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5"
              >
                <InstagramIcon />
                Instagram
              </a>
            </li>
            <li>Itajaí / Balneário Camboriú / Itapema — SC</li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-afs-cream/10 pt-6 text-xs text-afs-cream/50">
        © {new Date().getFullYear()} AFS Imobiliária. Todos os direitos reservados.
      </p>
    </footer>
  );
}

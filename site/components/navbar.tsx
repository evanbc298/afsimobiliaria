"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/whatsapp";

const links = [
  { href: "/itajai", label: "Itajaí" },
  { href: "/balneario-camboriu", label: "Balneário Camboriú" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-afs-navy/10 bg-afs-cream/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight text-afs-navy">
          <Image src="/icon-mark.png" alt="" width={36} height={36} className="h-9 w-9" priority />
          AFS <span className="text-afs-gold">Imobiliária</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-afs-navy/80 transition-colors hover:text-afs-navy"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="bg-afs-navy text-afs-cream hover:bg-afs-navy/90">
            <a href={whatsappLink("Olá! Vim pelo site e quero falar com a AFS Imobiliária.")} target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
            </a>
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-6 w-6 text-afs-navy" /> : <Menu className="h-6 w-6 text-afs-navy" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-afs-navy/10 bg-afs-cream px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-afs-navy/80"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-afs-navy text-afs-cream hover:bg-afs-navy/90">
              <a href={whatsappLink("Olá! Vim pelo site e quero falar com a AFS Imobiliária.")} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

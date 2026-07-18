"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { whatsappLink, SUPPORT_WHATSAPP_NUMBER } from "@/lib/whatsapp";

export function WhatsappFloat() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const supportLink = whatsappLink(
    "Olá! Vim pelo site e quero falar com a AFS Imobiliária.",
    SUPPORT_WHATSAPP_NUMBER
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-72 overflow-hidden rounded-2xl border border-afs-navy/10 bg-white shadow-xl">
          <div className="flex items-start justify-between gap-2 border-b border-afs-navy/10 bg-afs-navy px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-afs-cream">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icon-mark.png" alt="AFS Imobiliária" className="h-full w-full object-contain p-1.5" />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-afs-navy bg-[#25D366]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-afs-cream">AFS Imobiliária</p>
                <p className="flex items-center gap-1 text-xs text-afs-cream/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                  Atendimento 24 horas
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Fechar"
              className="text-afs-cream/60 hover:text-afs-cream"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="px-4 py-3">
            <p className="text-sm text-afs-navy/80">
              Precisa de ajuda pra encontrar seu imóvel? Fale com a gente agora — respondemos o
              mais rápido possível.
            </p>
            <a
              href={supportLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1fb959]"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir chat de atendimento"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-afs-navy shadow-lg transition-transform hover:scale-105"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icon-mark-light.png" alt="" className="h-9 w-9 object-contain" />
        <span className="absolute -right-0.5 -top-0.5 h-4 w-4 rounded-full border-2 border-white bg-[#25D366]" />
      </button>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";

const DOWN_PAYMENT_OPTIONS = [10, 20, 30, 40];
const TERM_OPTIONS_YEARS = [5, 10, 15, 20, 30];
const ANNUAL_RATE = 0.105; // 10,5% a.a. — estimativa de mercado, não é oferta de crédito

function formatCurrency(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

function calculateInstallment(financedAmount: number, years: number): number {
  const months = years * 12;
  const monthlyRate = Math.pow(1 + ANNUAL_RATE, 1 / 12) - 1;
  if (monthlyRate === 0) return financedAmount / months;
  const factor = Math.pow(1 + monthlyRate, months);
  return financedAmount * ((monthlyRate * factor) / (factor - 1));
}

export function FinancingSimulator({
  priceMin,
  propertyName,
}: {
  priceMin: number;
  propertyName: string;
}) {
  const [value, setValue] = useState(priceMin > 0 ? priceMin : 500000);
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [years, setYears] = useState(20);

  const { downPayment, financedAmount, installment } = useMemo(() => {
    const downPayment = (value * downPaymentPct) / 100;
    const financedAmount = value - downPayment;
    const installment = calculateInstallment(financedAmount, years);
    return { downPayment, financedAmount, installment };
  }, [value, downPaymentPct, years]);

  if (priceMin === 0) {
    return (
      <div className="mt-4 rounded-lg border border-afs-navy/10 bg-white p-5">
        <p className="text-sm font-semibold text-afs-navy">Simule seu financiamento</p>
        <p className="mt-2 text-sm text-afs-navy/70">
          Esse empreendimento ainda não tem valor publicado — fale com a gente que simulamos
          certinho com você.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-4 rounded-lg border border-afs-navy/10 bg-white p-5">
      <p className="text-sm font-semibold text-afs-navy">Simule seu financiamento</p>

      <div className="mt-4">
        <label className="text-xs font-medium uppercase tracking-wide text-afs-navy/50">
          Valor do imóvel
        </label>
        <input
          type="range"
          min={priceMin}
          max={priceMin * 2}
          step={10000}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="mt-2 w-full accent-afs-gold"
        />
        <p className="mt-1 text-sm font-semibold text-afs-navy">{formatCurrency(value)}</p>
      </div>

      <div className="mt-4">
        <label className="text-xs font-medium uppercase tracking-wide text-afs-navy/50">Entrada</label>
        <div className="mt-2 flex flex-wrap gap-2">
          {DOWN_PAYMENT_OPTIONS.map((pct) => (
            <button
              key={pct}
              onClick={() => setDownPaymentPct(pct)}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                downPaymentPct === pct
                  ? "border-afs-navy bg-afs-navy text-afs-cream"
                  : "border-afs-navy/20 text-afs-navy/70 hover:border-afs-navy/40"
              }`}
            >
              {pct}%
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <label className="text-xs font-medium uppercase tracking-wide text-afs-navy/50">Prazo</label>
        <div className="mt-2 flex flex-wrap gap-2">
          {TERM_OPTIONS_YEARS.map((y) => (
            <button
              key={y}
              onClick={() => setYears(y)}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                years === y
                  ? "border-afs-navy bg-afs-navy text-afs-cream"
                  : "border-afs-navy/20 text-afs-navy/70 hover:border-afs-navy/40"
              }`}
            >
              {y} anos
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 rounded-lg bg-afs-navy/5 p-4">
        <p className="text-xs text-afs-navy/60">
          Entrada de {formatCurrency(downPayment)} + financiamento de {formatCurrency(financedAmount)}
        </p>
        <p className="mt-1 text-2xl font-bold text-afs-navy">
          {formatCurrency(installment)}
          <span className="text-sm font-normal text-afs-navy/60">/mês</span>
        </p>
        <p className="mt-2 text-xs text-afs-navy/50">
          Simulação aproximada (taxa referencial de 10,5% a.a.), não é uma oferta de crédito.
          Condições reais variam por banco e perfil.
        </p>
      </div>

      <a
        href={whatsappLink(
          `Olá! Simulei o financiamento do ${propertyName} — entrada de ${formatCurrency(downPayment)} e parcela de ${formatCurrency(installment)}/mês em ${years} anos. Quero saber as condições reais.`
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 block w-full rounded-lg bg-afs-gold px-4 py-2.5 text-center text-sm font-semibold text-afs-navy transition-colors hover:bg-afs-gold/90"
      >
        Falar com um especialista sobre essa simulação
      </a>
    </div>
  );
}

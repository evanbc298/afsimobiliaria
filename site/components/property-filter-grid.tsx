"use client";

import { useMemo, useState } from "react";
import { Property } from "@/lib/types";
import { PropertyGrid } from "@/components/property-grid";

const STATUS_OPTIONS = ["Todos", "Lançamento", "Em Construção", "Pronto", "Últimas Unidades"] as const;

const PRICE_RANGES = [
  { label: "Todas as faixas", test: () => true },
  { label: "Até R$ 700 mil", test: (p: Property) => p.priceMin > 0 && p.priceMin <= 700000 },
  { label: "R$ 700 mil – R$ 2 milhões", test: (p: Property) => p.priceMin > 700000 && p.priceMin <= 2000000 },
  { label: "R$ 2 – 5 milhões", test: (p: Property) => p.priceMin > 2000000 && p.priceMin <= 5000000 },
  { label: "Acima de R$ 5 milhões", test: (p: Property) => p.priceMin > 5000000 },
];

const SORT_OPTIONS = [
  { label: "Relevância", fn: null },
  { label: "Menor preço", fn: (a: Property, b: Property) => (a.priceMin || Infinity) - (b.priceMin || Infinity) },
  { label: "Maior preço", fn: (a: Property, b: Property) => (b.priceMin || 0) - (a.priceMin || 0) },
  { label: "Nome A-Z", fn: (a: Property, b: Property) => a.name.localeCompare(b.name) },
] as const;

export function PropertyFilterGrid({ properties }: { properties: Property[] }) {
  const [status, setStatus] = useState<(typeof STATUS_OPTIONS)[number]>("Todos");
  const [priceRangeIdx, setPriceRangeIdx] = useState(0);
  const [sortIdx, setSortIdx] = useState(0);

  const filtered = useMemo(() => {
    let result = properties.filter((p) => status === "Todos" || p.status === status);
    result = result.filter(PRICE_RANGES[priceRangeIdx].test);
    const sortFn = SORT_OPTIONS[sortIdx].fn;
    if (sortFn) result = [...result].sort(sortFn);
    return result;
  }, [properties, status, priceRangeIdx, sortIdx]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-3 rounded-lg border border-afs-navy/10 bg-white p-4">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as (typeof STATUS_OPTIONS)[number])}
          className="rounded-md border border-afs-navy/20 bg-white px-3 py-2 text-sm text-afs-navy"
        >
          {STATUS_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s === "Todos" ? "Todas as condições" : s}
            </option>
          ))}
        </select>

        <select
          value={priceRangeIdx}
          onChange={(e) => setPriceRangeIdx(Number(e.target.value))}
          className="rounded-md border border-afs-navy/20 bg-white px-3 py-2 text-sm text-afs-navy"
        >
          {PRICE_RANGES.map((r, i) => (
            <option key={r.label} value={i}>
              {r.label}
            </option>
          ))}
        </select>

        <select
          value={sortIdx}
          onChange={(e) => setSortIdx(Number(e.target.value))}
          className="rounded-md border border-afs-navy/20 bg-white px-3 py-2 text-sm text-afs-navy"
        >
          {SORT_OPTIONS.map((s, i) => (
            <option key={s.label} value={i}>
              Ordenar: {s.label}
            </option>
          ))}
        </select>

        <span className="ml-auto text-sm text-afs-navy/50">
          {filtered.length} {filtered.length === 1 ? "empreendimento" : "empreendimentos"}
        </span>
      </div>

      <PropertyGrid properties={filtered} />
    </div>
  );
}

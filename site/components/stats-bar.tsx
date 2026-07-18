const stats = [
  { value: "R$ 13,47B", label: "VGV litoral norte de SC (2025)" },
  { value: "46%", label: "Crescimento de Itajaí em 3 anos" },
  { value: "27", label: "Empreendimentos selecionados" },
  { value: "10+", label: "Construtoras parceiras" },
];

export function StatsBar() {
  return (
    <section className="border-b border-afs-navy/10 bg-white px-4 py-10 sm:px-6">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 text-center sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-2xl font-bold text-afs-navy sm:text-3xl">{stat.value}</p>
            <p className="mt-1 text-sm text-afs-navy/60">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

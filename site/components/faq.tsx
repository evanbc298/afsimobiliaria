import { JsonLd } from "@/components/json-ld";

export interface FaqItem {
  question: string;
  answer: string;
}

export function Faq({ title = "Perguntas frequentes", items }: { title?: string; items: FaqItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <JsonLd data={jsonLd} />
      <h2 className="text-2xl font-bold text-afs-navy sm:text-3xl">{title}</h2>
      <div className="mt-6 divide-y divide-afs-navy/10 border-t border-afs-navy/10">
        {items.map((item) => (
          <details key={item.question} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-afs-navy">
              {item.question}
              <span className="shrink-0 text-afs-gold transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 leading-relaxed text-afs-navy/70">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

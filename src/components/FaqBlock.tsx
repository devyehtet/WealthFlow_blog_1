import JsonLd from "@/components/JsonLd";

export type FAQ = { q: string; a: string };

export default function FaqBlock({ faqs }: { faqs: FAQ[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="mt-10 rounded-2xl border bg-white/70 p-6 backdrop-blur">
      <JsonLd data={schema} />
      <h2 className="text-base font-semibold">FAQ</h2>
      <div className="mt-4 space-y-4">
        {faqs.map((f) => (
          <div key={f.q}>
            <div className="font-medium">{f.q}</div>
            <div className="mt-1 text-sm text-neutral-700">{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

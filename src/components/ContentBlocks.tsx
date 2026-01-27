import AdSlot from "@/components/AdSlot";
import Link from "next/link";
import { slugify } from "@/lib/slugify";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "callout"; tone: "info" | "tip" | "warn"; title?: string; text: string }
  | { type: "ad"; label?: string }
  | { type: "internalLinks"; links: { label: string; href: string }[] };

export default function ContentBlocks({ blocks }: { blocks: Block[] }) {
  const seen = new Map<string, number>();

  const makeId = (text: string) => {
    const base = slugify(text);
    const n = (seen.get(base) ?? 0) + 1;
    seen.set(base, n);
    return n === 1 ? base : `${base}-${n}`;
  };

  return (
    <div className="space-y-8">
      {blocks.map((b, i) => {
        /* ---------------- Paragraph ---------------- */
        if (b.type === "p") {
          return (
            <p
              key={i}
              className="text-[17.5px] leading-8 text-neutral-800"
            >
              {b.text}
            </p>
          );
        }

        /* ---------------- H2 ---------------- */
        if (b.type === "h2") {
          const id = makeId(b.text);
          return (
            <h2
              key={i}
              id={id}
              className="mt-14 scroll-mt-28 text-2xl font-semibold tracking-tight text-neutral-900"
            >
              {b.text}
            </h2>
          );
        }

        /* ---------------- H3 ---------------- */
        if (b.type === "h3") {
          const id = makeId(b.text);
          return (
            <h3
              key={i}
              id={id}
              className="mt-10 scroll-mt-28 text-xl font-semibold text-neutral-900"
            >
              {b.text}
            </h3>
          );
        }

        /* ---------------- Callout ---------------- */
        if (b.type === "callout") {
          const toneStyles = {
            info: "border-blue-200 bg-blue-50/60",
            tip: "border-emerald-200 bg-emerald-50/60",
            warn: "border-amber-200 bg-amber-50/60",
          };

          return (
            <div
              key={i}
              className={`rounded-2xl border p-6 ${toneStyles[b.tone]}`}
            >
              {b.title && (
                <div className="mb-2 text-sm font-semibold text-neutral-900">
                  {b.title}
                </div>
              )}
              <p className="text-[16.5px] leading-7 text-neutral-800">
                {b.text}
              </p>
            </div>
          );
        }

        /* ---------------- In-article Ad ---------------- */
        if (b.type === "ad") {
          return (
            <div key={i} className="my-12 flex justify-center">
              <AdSlot
                label={b.label ?? "In-article ad"}
                maxWidth="md"
                inArticle
              />
            </div>
          );
        }

        /* ---------------- Internal links ---------------- */
        if (b.type === "internalLinks") {
          return (
            <section
              key={i}
              className="rounded-3xl border bg-white/70 p-6 backdrop-blur"
            >
              <h3 className="text-lg font-semibold text-neutral-900">
                Recommended next reads
              </h3>
              <ul className="mt-4 space-y-3">
                {b.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[16px] font-medium text-neutral-800 hover:underline"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        }

        return null;
      })}
    </div>
  );
}

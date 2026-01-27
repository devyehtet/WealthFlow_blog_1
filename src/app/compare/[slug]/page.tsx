import type { Metadata } from "next";
import Link from "next/link";

import Container from "@/components/Container";
import AdSlot from "@/components/AdSlot";
import JsonLd from "@/components/JsonLd";
import { affiliateCategories } from "@/content/affiliates";
import { site } from "@/content/site";
import { absUrl } from "@/lib/seo";

export function generateStaticParams() {
  return affiliateCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = affiliateCategories.find((c) => c.slug === slug);
  if (!cat) return { title: "Comparison Not Found" };

  const url = absUrl(`/compare/${cat.slug}`);

  return {
    title: cat.title,
    description: cat.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: cat.title,
      description: cat.excerpt,
      url,
      siteName: site.name,
      type: "article",
    },
  };
}

export default async function ComparePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = affiliateCategories.find((c) => c.slug === slug);
  if (!cat) return null;

  const url = absUrl(`/compare/${cat.slug}`);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cat.title,
    description: cat.excerpt,
    datePublished: cat.updatedAt,
    dateModified: cat.updatedAt,
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
  };

  return (
    <Container>
      <JsonLd data={schema} />

      <article className="mx-auto max-w-5xl pt-12">
        <Link href="/" className="text-sm text-neutral-600 hover:text-neutral-900">
          ← Back to Home
        </Link>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900">{cat.title}</h1>
        <p className="mt-3 text-[18px] leading-8 text-neutral-600">{cat.excerpt}</p>

        {/* Disclosure (AdSense-safe) */}
        <div className="mt-6 rounded-2xl border bg-amber-50/60 p-5">
          <div className="text-sm font-semibold text-neutral-900">Affiliate disclosure</div>
          <p className="mt-2 text-sm leading-7 text-neutral-700">
            Some links on this page may be affiliate links. If you click and sign up, we may earn a commission at no extra cost to you.
            We do not accept payment for rankings—always verify terms directly with the provider.
          </p>
        </div>

        <div className="my-10 hidden md:block">
          <AdSlot label="Ad Slot (Top of comparison)" maxWidth="lg" />
        </div>

        {/* Comparison cards */}
        <section className="mt-8 grid gap-5 md:grid-cols-2">
          {cat.offers.map((o) => (
            <div key={o.id} className="rounded-3xl border bg-white/70 p-6 backdrop-blur">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">{o.country}</div>
                  <h2 className="mt-2 text-xl font-semibold text-neutral-900">{o.product}</h2>
                  <div className="mt-1 text-sm text-neutral-600">{o.provider}</div>
                </div>
                <span className="rounded-full border bg-white px-3 py-1 text-xs text-neutral-700">
                  Best for: {o.bestFor}
                </span>
              </div>

              <ul className="mt-4 space-y-2 text-[15.5px] leading-7 text-neutral-800">
                {o.highlights.map((h) => (
                  <li key={h}>• {h}</li>
                ))}
              </ul>

              <p className="mt-4 text-xs leading-6 text-neutral-500">{o.disclaimer}</p>

              <div className="mt-5">
                <a
                  href={o.ctaHref}
                  rel="nofollow sponsored"
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white hover:opacity-95"
                >
                  {o.ctaLabel} →
                </a>
              </div>

              <div className="mt-3 text-xs text-neutral-500">Updated: {o.updatedAt}</div>
            </div>
          ))}
        </section>

        <div className="my-14 hidden md:block">
          <AdSlot label="Ad Slot (End of comparison)" maxWidth="lg" />
        </div>
      </article>
    </Container>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import Container from "@/components/Container";
import AdSlot from "@/components/AdSlot";
import JsonLd from "@/components/JsonLd";
import FaqBlock from "@/components/FaqBlock";
import ContentBlocks from "@/components/ContentBlocks";
import TableOfContents from "@/components/TableOfContents";

import { guides } from "@/content/guides";
import { site } from "@/content/site";
import { absUrl } from "@/lib/seo";
import { buildToc } from "@/lib/toc";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const g = guides.find((x) => x.slug === slug);
  if (!g) return { title: "Guide Not Found" };

  const url = absUrl(`/guides/${g.slug}`);

  return {
    title: g.title,
    description: g.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: g.title,
      description: g.excerpt,
      url,
      siteName: site.name,
      type: "article",
      images: g.coverImage?.src
        ? [{ url: absUrl(g.coverImage.src), alt: g.coverImage.alt }]
        : undefined,
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) return null;

  const url = absUrl(`/guides/${guide.slug}`);
  const toc = buildToc(guide.blocks);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.excerpt,
    datePublished: guide.updatedAt,
    dateModified: guide.updatedAt,
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    image: guide.coverImage?.src ? absUrl(guide.coverImage.src) : undefined,
  };

  return (
    <Container>
      <JsonLd data={schema} />

      <div className="mx-auto max-w-6xl pt-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_300px]">
          {/* ================= Article ================= */}
          <article className="max-w-3xl">
            <Link
              href="/guides"
              className="text-sm text-neutral-600 hover:text-neutral-900"
            >
              ← Back to Guides
            </Link>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900">
              {guide.title}
            </h1>

            <p className="mt-3 text-[18px] leading-8 text-neutral-600">
              {guide.excerpt}
            </p>

            {/* Cover image */}
            {guide.coverImage?.src && (
              <div className="mt-8 overflow-hidden rounded-3xl border bg-white/70 backdrop-blur">
                <div className="relative h-64 w-full md:h-80">
                  <Image
                    src={guide.coverImage.src}
                    alt={guide.coverImage.alt}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
                <div className="border-t px-4 py-3 text-xs text-neutral-500">
                  {guide.coverImage.alt}
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {guide.tags.map((t) => (
                <Link
                  key={t}
                  href={`/topics/${t}`}
                  className="rounded-full border bg-white/70 px-3 py-1 text-xs text-neutral-700 backdrop-blur hover:bg-white"
                >
                  #{t}
                </Link>
              ))}
            </div>

            {/* Top ad */}
            <div className="my-10 hidden md:block">
              <AdSlot label="Ad Slot (Top of content)" maxWidth="lg" />
            </div>

            {/* Content */}
            <ContentBlocks blocks={guide.blocks} />

            {/* FAQ */}
            <FaqBlock faqs={guide.faqs} />

            {/* End ad */}
            <div className="my-14 hidden md:block">
              <AdSlot label="Ad Slot (End of content)" maxWidth="lg" />
            </div>
          </article>

          {/* ================= TOC ================= */}
          <TableOfContents items={toc} />
        </div>
      </div>
    </Container>
  );
}

import Link from "next/link";
import Image from "next/image";

import Container from "@/components/Container";
import ProseArticle from "@/components/ProseArticle";
import ContentBlocks from "@/components/ContentBlocks";
import AdSlot from "@/components/AdSlot";
import FaqBlock from "@/components/FaqBlock";
import JsonLd from "@/components/JsonLd";
import StickyMobileAd from "@/components/StickyMobileAd";

import { absUrl } from "@/lib/seo";
import { injectAdsByWordCount } from "@/lib/adDensity";
import { site } from "@/content/site";

type Article = {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  updatedAt: string;
  readingMinutes?: number;
  coverImage?: { src: string; alt: string };
  blocks: any[];
  faqs?: { q: string; a: string }[];
};

type Props = {
  article: Article;
  basePath: "guides" | "blog";
  related?: Article[];
};

export default function ArticlePage({ article, basePath, related = [] }: Props) {
  const url = absUrl(`/${basePath}/${article.slug}`);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.updatedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    image: article.coverImage?.src ? absUrl(article.coverImage.src) : undefined,
  };

  const blocksWithAds = injectAdsByWordCount(article.blocks);

  return (
    <Container>
      <JsonLd data={schema} />

      <article className="mx-auto max-w-3xl pt-12">
        <Link href={`/${basePath}`} className="text-sm text-neutral-600 hover:text-neutral-900">
          ← Back to {basePath}
        </Link>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900">
          {article.title}
        </h1>

        <p className="mt-3 text-[18px] leading-8 text-neutral-600">
          {article.excerpt}
        </p>

        {article.coverImage?.src && (
          <div className="mt-7 overflow-hidden rounded-3xl border">
            <div className="relative h-64 w-full md:h-80">
              <Image
                src={article.coverImage.src}
                alt={article.coverImage.alt || article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          {article.tags.map((t) => (
            <span key={t} className="rounded-full border px-3 py-1 text-xs">
              #{t}
            </span>
          ))}
        </div>

        <div className="my-10 hidden md:block">
          <AdSlot label="Ad Slot (Top)" maxWidth="lg" />
        </div>

        <ProseArticle>
          <ContentBlocks blocks={blocksWithAds} />
        </ProseArticle>

        {article.faqs?.length && (
          <div className="mt-14">
            <FaqBlock faqs={article.faqs} />
          </div>
        )}

        <div className="my-14 hidden md:block">
          <AdSlot label="Ad Slot (End)" maxWidth="lg" />
        </div>

        {related.length > 0 && (
          <section className="mt-12 rounded-2xl border p-6">
            <h2 className="font-semibold">Related</h2>
            <ul className="mt-4 space-y-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/${basePath}/${r.slug}`} className="font-semibold hover:underline">
                    {r.title}
                  </Link>
                  <p className="text-sm text-neutral-500">{r.excerpt}</p>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>

      <StickyMobileAd />
    </Container>
  );
}

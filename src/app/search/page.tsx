"use client";

import { useMemo, useState } from "react";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import { guides } from "@/content/guides";
import { posts } from "@/content/posts";
import { calculators } from "@/content/calculators";

export default function SearchPage() {
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return { guides: [], posts: [], calcs: [] };

    const inText = (s: string) => s.toLowerCase().includes(query);

    return {
      guides: guides.filter((g) => inText(g.title) || inText(g.excerpt) || g.tags.some(inText)).slice(0, 8),
      posts: posts.filter((p) => inText(p.title) || inText(p.excerpt)).slice(0, 8),
      calcs: calculators.filter((c) => inText(c.title) || inText(c.description) || c.keywords.some(inText)).slice(0, 8),
    };
  }, [q]);

  return (
    <Container>
      <div className="pt-12">
        <SectionTitle title="Search" subtitle="Search calculators, guides, and blog posts." />

        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Try: compound, credit score, inflation..."
          className="w-full rounded-2xl border bg-white/70 px-4 py-3 text-sm outline-none backdrop-blur focus:ring-2 focus:ring-neutral-200"
        />

        <div className="mt-8 grid gap-8">
          <section>
            <h2 className="text-base font-semibold">Calculators</h2>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              {results.calcs.map((c) => (
                <Card key={c.slug} title={c.title} description={c.description} href={`/calculators/${c.slug}`} />
              ))}
              {q && results.calcs.length === 0 ? <p className="text-sm text-neutral-600">No calculators found.</p> : null}
            </div>
          </section>

          <section>
            <h2 className="text-base font-semibold">Guides</h2>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              {results.guides.map((g) => (
                <Card key={g.slug} title={g.title} description={g.excerpt} href={`/guides/${g.slug}`} />
              ))}
              {q && results.guides.length === 0 ? <p className="text-sm text-neutral-600">No guides found.</p> : null}
            </div>
          </section>

          <section>
            <h2 className="text-base font-semibold">Blog</h2>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              {results.posts.map((p) => (
                <Card key={p.slug} title={p.title} description={p.excerpt} href={`/blog/${p.slug}`} />
              ))}
              {q && results.posts.length === 0 ? <p className="text-sm text-neutral-600">No posts found.</p> : null}
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
}

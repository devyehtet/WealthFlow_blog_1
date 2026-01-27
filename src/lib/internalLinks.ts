import type { Block } from "@/components/ContentBlocks";

type Item = {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  kind: "guide" | "blog" | "calculator";
};

function score(a: Item, b: Item) {
  const tagOverlap = a.tags.filter((t) => b.tags.includes(t)).length;
  // simple title keyword overlap
  const aw = new Set(a.title.toLowerCase().split(/\W+/).filter(Boolean));
  const bw = new Set(b.title.toLowerCase().split(/\W+/).filter(Boolean));
  let kw = 0;
  for (const w of aw) if (bw.has(w)) kw++;
  return tagOverlap * 10 + kw;
}

export function buildInternalLinksBlock(
  current: Item,
  pool: Item[],
  opts?: { max?: number; minScore?: number; label?: string }
): Block | null {
  const max = opts?.max ?? 6;
  const minScore = opts?.minScore ?? 8;

  const candidates = pool
    .filter((x) => x.slug !== current.slug || x.kind !== current.kind)
    .map((x) => ({ x, s: score(current, x) }))
    .filter((z) => z.s >= minScore)
    .sort((a, b) => b.s - a.s)
    .slice(0, max)
    .map(({ x }) => ({
      label: x.title,
      href:
        x.kind === "guide"
          ? `/guides/${x.slug}`
          : x.kind === "blog"
          ? `/blog/${x.slug}`
          : `/calculators/${x.slug}`,
    }));

  if (!candidates.length) return null;

  return {
    type: "internalLinks",
    links: candidates,
  };
}

/**
 * Injects an internalLinks block near the end (but before final thoughts if possible).
 */
export function injectInternalLinks(blocks: Block[], block: Block): Block[] {
  // place after ~70% of content to improve session depth
  const idx = Math.max(0, Math.floor(blocks.length * 0.7));
  const out = [...blocks];
  out.splice(idx, 0, block);
  return out;
}

// src/lib/adDensity.ts
// Word-count based ad density helpers (safe for mixed block schemas)

export type BlockLike = {
  type: string;
  // common optional fields across guides/blogs
  text?: string;
  title?: string;
  items?: Array<string | { text?: string; title?: string }>;
  // allow any other fields without breaking TS
  [key: string]: unknown;
};

function countWords(input?: string) {
  if (!input) return 0;
  // collapse whitespace + count tokens
  const s = input.replace(/\s+/g, " ").trim();
  if (!s) return 0;
  return s.split(" ").length;
}

function pickString(x: unknown): string | undefined {
  return typeof x === "string" ? x : undefined;
}

function blockWords(b: BlockLike) {
  // IMPORTANT:
  // Don't use a narrow union type for b.type here, because your blocks
  // can differ between guides/blogs/calculators and TS will complain.
  const t = (b.type || "").toLowerCase();

  // Most common text-y blocks
  if (t === "p" || t === "h2" || t === "h3" || t === "h4" || t === "blockquote") {
    return countWords(pickString(b.text)) + countWords(pickString(b.title));
  }

  // Callout-style blocks (title + text)
  if (t === "callout") {
    return countWords(pickString(b.title)) + countWords(pickString(b.text));
  }

  // Lists: items can be strings or objects with text/title
  if (t === "ul" || t === "ol") {
    const items = Array.isArray(b.items) ? b.items : [];
    return items.reduce((sum, it) => {
      if (typeof it === "string") return sum + countWords(it);
      if (it && typeof it === "object") {
        const obj = it as { text?: string; title?: string };
        return sum + countWords(obj.title) + countWords(obj.text);
      }
      return sum;
    }, 0);
  }

  // Ads shouldn't count as content words
  if (t === "ad") return 0;

  // Fallback:
  // If a block has text/title strings, count them anyway.
  return countWords(pickString(b.title)) + countWords(pickString(b.text));
}

/**
 * Estimate total words in a block list.
 */
export function estimateWords(blocks: BlockLike[]) {
  return (blocks || []).reduce((sum, b) => sum + blockWords(b), 0);
}

/**
 * Decide how many in-article ad slots to insert by word count.
 * Defaults are conservative for AdSense UX.
 */
export function adsByWordCount(totalWords: number, opts?: {
  wordsPerAd?: number;   // e.g. 350-500
  minAds?: number;       // usually 0-1
  maxAds?: number;       // keep density reasonable
}) {
  const wordsPerAd = opts?.wordsPerAd ?? 450;
  const minAds = opts?.minAds ?? 0;
  const maxAds = opts?.maxAds ?? 4;

  if (!Number.isFinite(totalWords) || totalWords <= 0) return 0;

  const raw = Math.floor(totalWords / wordsPerAd);
  const clamped = Math.max(minAds, Math.min(maxAds, raw));
  return clamped;
}

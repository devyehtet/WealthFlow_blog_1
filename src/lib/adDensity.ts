import type { Block } from "@/components/ContentBlocks";

type Options = {
  /** target words per ad (typical: 350–550 for long guides) */
  wordsPerAd?: number;
  /** minimum words before the first in-content ad */
  minWordsBeforeFirstAd?: number;
  /** maximum auto ads inserted */
  maxAutoAds?: number;
  /** label text prefix */
  labelPrefix?: string;
};

function countWords(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function blockWords(b: Block) {
  if (b.type === "p" || b.type === "h2" || b.type === "h3" || b.type === "quote") return countWords(b.text);
  if (b.type === "callout") return countWords(b.title) + countWords(b.text);
  if (b.type === "ul" || b.type === "ol") return b.items.reduce((sum, x) => sum + countWords(x), 0);
  return 0;
}

/**
 * Inserts {type:"ad"} blocks based on cumulative word count.
 * Rules:
 * - never insert directly before h2/h3
 * - insert after content blocks (p, list, callout, quote), not after headings
 * - respects maxAutoAds and minWordsBeforeFirstAd
 */
export function injectAdsByWordCount(blocks: Block[], opts: Options = {}): Block[] {
  const wordsPerAd = opts.wordsPerAd ?? 450;
  const minWordsBeforeFirstAd = opts.minWordsBeforeFirstAd ?? 250;
  const maxAutoAds = opts.maxAutoAds ?? 5;
  const labelPrefix = opts.labelPrefix ?? "Ad Slot (Auto)";

  let cumulative = 0;
  let nextThreshold = minWordsBeforeFirstAd;
  let inserted = 0;

  const out: Block[] = [];

  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i];
    out.push(b);

    cumulative += blockWords(b);

    if (inserted >= maxAutoAds) continue;

    // only consider inserting after certain block types (good breakpoints)
    const canInsertAfter =
      b.type === "p" || b.type === "ul" || b.type === "ol" || b.type === "callout" || b.type === "quote" || b.type === "divider";

    if (!canInsertAfter) continue;

    // if cumulative reaches threshold, try insert
    if (cumulative >= nextThreshold) {
      const next = blocks[i + 1];
      // don't insert if next is a heading
      if (next && (next.type === "h2" || next.type === "h3")) {
        // defer to after next content chunk
        continue;
      }

      out.push({ type: "ad", label: `${labelPrefix} • ${inserted + 1}` });
      inserted++;
      nextThreshold += wordsPerAd;
    }
  }

  return out;
}

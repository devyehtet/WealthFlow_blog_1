// src/lib/adDensity.ts
// Ad density helpers: place ad blocks based on word count without touching headings.

export type TextBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "callout"; title: string; text: string; tone?: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "ad"; label?: string };

// Count words in a string safely
function countWords(s: string) {
  return (s || "")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean).length;
}

// Count words for each block type
export function blockWords(b: any): number {
  if (!b || !b.type) return 0;

  if (b.type === "p" || b.type === "h2" || b.type === "h3") return countWords(b.text);
  if (b.type === "callout") return countWords(b.title) + countWords(b.text);
  if (b.type === "ul" || b.type === "ol") return (b.items || []).reduce((sum: number, it: string) => sum + countWords(it), 0);

  // ad blocks don't contribute to reading words
  return 0;
}

/**
 * Return desired number of in-article ads based on total word count.
 * You can tune these thresholds for AdSense compliance + UX.
 */
export function adsByWordCount(totalWords: number) {
  // UX-safe defaults
  if (totalWords < 450) return 0;
  if (totalWords < 900) return 1;
  if (totalWords < 1400) return 2;
  if (totalWords < 2000) return 3;
  return 4;
}

/**
 * Inject {type:"ad"} blocks into content using word-count positions.
 * - Never inserts right before headings (h2/h3)
 * - Never inserts consecutive ads
 * - Tries to insert after a paragraph/callout/list once passing each threshold
 */
export function injectAdsByWordCount<T extends TextBlock>(
  blocks: T[],
  opts?: {
    labelPrefix?: string;
    // minimum words between ads (safety guard)
    minGapWords?: number;
  }
): (T | { type: "ad"; label?: string })[] {
  const labelPrefix = opts?.labelPrefix ?? "Ad Slot";
  const minGapWords = opts?.minGapWords ?? 250;

  const total = blocks.reduce((sum, b) => sum + blockWords(b), 0);
  const adCount = adsByWordCount(total);

  if (!adCount) return blocks;

  // Spread thresholds through the article (avoid intro & avoid very end)
  // e.g. for 3 ads -> 25%, 50%, 75%
  const targets = Array.from({ length: adCount }, (_, i) => Math.floor(((i + 1) / (adCount + 1)) * total));

  const out: (T | { type: "ad"; label?: string })[] = [];
  let running = 0;
  let inserted = 0;
  let lastAdAt = -999999;

  const canInsertHere = (curr: any, next: any) => {
    // don't insert before a heading
    if (next && (next.type === "h2" || next.type === "h3")) return false;
    // don't insert right after an ad (no consecutive ads)
    if (curr && curr.type === "ad") return false;
    return true;
  };

  for (let i = 0; i < blocks.length; i++) {
    const curr = blocks[i];
    const next = blocks[i + 1];

    out.push(curr);
    running += blockWords(curr);

    if (inserted >= targets.length) continue;

    const target = targets[inserted];

    // Insert when we pass target, and ensure spacing
    const gapOk = running - lastAdAt >= minGapWords;
    const passed = running >= target;

    if (!passed || !gapOk) continue;

    // Prefer inserting after readable blocks
    const currOk =
      curr.type === "p" || curr.type === "callout" || curr.type === "ul" || curr.type === "ol";

    if (!currOk) continue;
    if (!canInsertHere(curr, next)) continue;

    out.push({ type: "ad", label: `${labelPrefix} (${inserted + 1})` });
    inserted++;
    lastAdAt = running;
  }

  return out;
}

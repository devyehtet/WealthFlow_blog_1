import type { Block } from "@/components/ContentBlocks";
import { slugify } from "@/lib/slugify";

export type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

export function buildToc(blocks: Block[]): TocItem[] {
  const items: TocItem[] = [];
  const used = new Map<string, number>();

  for (const b of blocks) {
    if (b.type !== "h2" && b.type !== "h3") continue;

    const base = slugify(b.text);
    const count = (used.get(base) ?? 0) + 1;
    used.set(base, count);

    const id = count === 1 ? base : `${base}-${count}`;
    items.push({ id, text: b.text, level: b.type === "h2" ? 2 : 3 });
  }

  return items;
}

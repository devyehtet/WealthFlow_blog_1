"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { TocItem } from "@/lib/toc";

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);

  const ids = useMemo(() => items.map((x) => x.id), [items]);

  useEffect(() => {
    if (!ids.length) return;

    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // pick the heading closest to top that is intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top ?? 0) - (b.boundingClientRect.top ?? 0))[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);

  if (!items.length) return null;

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 rounded-2xl border bg-white/70 p-5 backdrop-blur">
        <div className="text-sm font-semibold text-neutral-900">On this page</div>
        <nav className="mt-4 space-y-1">
          {items.map((it) => {
            const isActive = it.id === activeId;
            return (
              <Link
                key={it.id}
                href={`#${it.id}`}
                className={[
                  "block rounded-lg px-2 py-1 text-sm transition",
                  it.level === 3 ? "pl-6" : "pl-2",
                  isActive ? "bg-neutral-900 text-white" : "text-neutral-700 hover:bg-neutral-100",
                ].join(" ")}
              >
                {it.text}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

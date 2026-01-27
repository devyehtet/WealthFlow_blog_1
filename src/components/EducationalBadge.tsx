"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function EducationalBadge() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="dialog"
        className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700 backdrop-blur transition hover:bg-white hover:shadow-sm"
      >
        Educational
        <span className={`transition ${open ? "rotate-180" : ""}`}>▾</span>
      </button>

      {open ? (
        <div
          role="dialog"
          className="absolute right-0 mt-2 w-[320px] rounded-2xl border bg-white/95 p-4 text-sm shadow-lg backdrop-blur"
        >
          <div className="font-semibold text-neutral-900">Educational content</div>
          <p className="mt-1 text-neutral-600">
            WealthFlow provides educational information only and does not offer financial, legal,
            or tax advice.
          </p>

          <div className="mt-3 flex items-center gap-2">
            <Link
              href="/disclaimer"
              className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-neutral-800"
              onClick={() => setOpen(false)}
            >
              Read Disclaimer
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-xl border bg-white px-3 py-2 text-xs font-semibold text-neutral-900 transition hover:shadow-sm"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

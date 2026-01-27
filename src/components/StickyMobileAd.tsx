"use client";

import { useEffect, useMemo, useState } from "react";
import AdSlot from "@/components/AdSlot";

type Props = {
  /** show after user scrolls this many px */
  showAfterPx?: number;
  /** how long to hide after close (hours) */
  hideHours?: number;
};

export default function StickyMobileAd({ showAfterPx = 700, hideHours = 12 }: Props) {
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  const storageKey = useMemo(() => "wf_sticky_ad_hidden_until", []);

  useEffect(() => {
    try {
      const until = Number(localStorage.getItem(storageKey) || "0");
      if (until && Date.now() < until) {
        setClosed(true);
      }
    } catch {}
  }, [storageKey]);

  useEffect(() => {
    if (closed) return;

    const onScroll = () => {
      const y = window.scrollY || 0;
      if (y >= showAfterPx) setVisible(true);
      else setVisible(false);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [closed, showAfterPx]);

  const onClose = () => {
    setClosed(true);
    setVisible(false);
    try {
      const until = Date.now() + hideHours * 60 * 60 * 1000;
      localStorage.setItem(storageKey, String(until));
    } catch {}
  };

  if (closed || !visible) return null;

  return (
    <div className="md:hidden">
      {/* bottom sticky wrapper */}
      <div
        className="
          fixed inset-x-0 bottom-0 z-50
          pb-[calc(env(safe-area-inset-bottom)+10px)]
          px-3
        "
      >
        <div className="mx-auto max-w-md rounded-2xl border border-neutral-200 bg-white/90 shadow-lg backdrop-blur">
          {/* header */}
          <div className="flex items-center justify-between border-b border-neutral-200 px-3 py-2">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
              Sponsored
            </div>
            <button
              onClick={onClose}
              className="rounded-full border border-neutral-200 bg-white px-2 py-1 text-[11px] font-semibold text-neutral-600"
              aria-label="Close ad"
            >
              Close
            </button>
          </div>

          {/* ad body */}
          <div className="px-3 py-3">
            <AdSlot label="Sticky Mobile Ad" maxWidth="full" />
          </div>
        </div>
      </div>

      {/* spacer so content isn’t hidden behind sticky */}
      <div className="h-28" />
    </div>
  );
}

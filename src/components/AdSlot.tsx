"use client";

import React, { useEffect, useMemo, useState } from "react";

type MaxWidth = "sm" | "md" | "lg" | "xl" | "full";

export type AdSlotProps = {
  label?: string;
  /**
   * Responsive container max width.
   * Use with in-article ads to avoid full-bleed.
   */
  maxWidth?: MaxWidth;
  /**
   * In-article styling (centered, subtle placeholder UI).
   */
  inArticle?: boolean;
  /**
   * Optional sticky mobile ad placeholder (UX-safe).
   */
  stickyMobile?: boolean;
  className?: string;
};

const MAX_WIDTH_CLASS: Record<MaxWidth, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-none",
};

export default function AdSlot({
  label = "Ad Slot",
  maxWidth = "lg",
  inArticle = false,
  stickyMobile = false,
  className = "",
}: AdSlotProps) {
  // Optional: detect mobile to collapse in-article placeholder if needed
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // UX-safe rule: collapse the in-article ad placeholder on very small screens if desired
  const shouldHideInArticleOnMobile = inArticle && isMobile;

  const wrapClass = useMemo(() => {
    const mw = MAX_WIDTH_CLASS[maxWidth] ?? MAX_WIDTH_CLASS.lg;

    // Base container: centered + spacing
    const base =
      "mx-auto my-8 w-full " +
      (maxWidth === "full" ? "" : mw) +
      " " +
      (inArticle ? "px-0 sm:px-2" : "");

    return [base, className].filter(Boolean).join(" ");
  }, [maxWidth, inArticle, className]);

  // If you want to show nothing on mobile for in-article slots:
  if (shouldHideInArticleOnMobile) return null;

  return (
    <>
      {/* Sticky mobile (placeholder) */}
      {stickyMobile ? (
        <div className="fixed bottom-3 left-0 right-0 z-40 px-3 sm:hidden">
          <div className="mx-auto flex max-w-md items-center justify-between gap-3 rounded-2xl border bg-white/85 p-3 shadow-lg backdrop-blur">
            <div className="min-w-0">
              <div className="text-[10px] font-semibold tracking-wide text-neutral-500">
                ADVERTISEMENT
              </div>
              <div className="truncate text-xs text-neutral-700">{label}</div>
            </div>
            <div className="h-10 w-28 rounded-xl border border-dashed bg-white/60" />
          </div>
        </div>
      ) : null}

      {/* In-page slot */}
      <div className={wrapClass}>
        <div
          className={[
            "rounded-3xl border bg-white/60 backdrop-blur",
            "shadow-[0_16px_60px_rgba(0,0,0,0.06)]",
            inArticle ? "p-5 sm:p-6" : "p-6",
          ].join(" ")}
        >
          <div className="flex items-center justify-between gap-3">
            <div className="text-[10px] font-semibold tracking-wide text-neutral-500">
              ADVERTISEMENT
            </div>
            {inArticle ? (
              <span className="rounded-full border bg-white/70 px-3 py-1 text-[10px] text-neutral-600">
                Responsive in-article slot
              </span>
            ) : null}
          </div>

          <div className="mt-3 text-sm font-semibold text-neutral-900">
            {label}
          </div>

          {/* Placeholder box (replace with AdSense after approval) */}
          <div className="mt-4">
            <div className="h-24 w-full rounded-2xl border border-dashed bg-white/50 sm:h-28" />
            <div className="mt-2 text-xs text-neutral-500">
              Add AdSense code after approval.
            </div>
          </div>

          {inArticle ? (
            <div className="mt-4 text-xs text-neutral-500">
              Tip: Place ads after strong sections (intro, mid-article, before conclusion).
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

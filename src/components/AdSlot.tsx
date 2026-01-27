"use client";

import * as React from "react";

type Breakpoint = "sm" | "md" | "lg";

export type AdSlotProps = {
  label?: string;
  /** optional inline maxWidth like "720px" / "900px" */
  maxWidth?: string | number;
  /** extra tailwind classes */
  className?: string;
  /** hide on small screens (mobile) */
  hideOnMobile?: boolean;
  /** collapse (hide) below breakpoint (default: md) */
  collapseBelow?: Breakpoint;
  /** set true if you want a "sticky mobile" version */
  stickyMobile?: boolean;
};

function cx(...arr: Array<string | false | null | undefined>) {
  return arr.filter(Boolean).join(" ");
}

function collapseClass(bp: Breakpoint) {
  // "collapse on mobile" meaning hidden until bp and above
  // sm: hidden <sm, md: hidden <md, lg: hidden <lg
  if (bp === "sm") return "hidden sm:block";
  if (bp === "md") return "hidden md:block";
  return "hidden lg:block";
}

/**
 * Responsive ad placeholder (safe UX)
 * - maxWidth support (fixes your TS error)
 * - nice placeholder UI
 * - can hide/collapse on mobile
 */
export default function AdSlot({
  label = "Ad Slot",
  maxWidth,
  className,
  hideOnMobile,
  collapseBelow = "md",
  stickyMobile = false,
}: AdSlotProps) {
  // If you want sticky mobile, render a sticky bar instead of the in-article slot
  if (stickyMobile) return <StickyMobileAd label={label} />;

  const wrapperClasses = cx(
    "my-8",
    hideOnMobile && "hidden sm:block",
    !hideOnMobile && collapseBelow ? "" : ""
  );

  const collapse = !hideOnMobile ? collapseClass(collapseBelow) : "";

  return (
    <div className={cx(wrapperClasses, collapse)}>
      <div
        className={cx(
          "mx-auto overflow-hidden rounded-3xl border bg-white/60 shadow-[0_18px_70px_rgba(0,0,0,0.06)] backdrop-blur",
          "ring-1 ring-black/5",
          className
        )}
        style={maxWidth ? { maxWidth } : undefined}
      >
        <div className="flex items-center justify-between gap-3 border-b bg-white/40 px-4 py-3">
          <div className="text-[11px] font-semibold tracking-widest text-neutral-500">
            ADVERTISEMENT
          </div>
          <div className="text-[11px] text-neutral-500">{label}</div>
        </div>

        {/* Placeholder body (Responsive in-article style) */}
        <div className="px-4 py-10 sm:px-6">
          <div className="mx-auto max-w-[680px]">
            <div className="flex items-center justify-center gap-2 text-neutral-400">
              <span className="h-2 w-2 rounded-full bg-neutral-300/70" />
              <span className="h-2 w-2 rounded-full bg-neutral-300/50" />
              <span className="h-2 w-2 rounded-full bg-neutral-300/40" />
            </div>

            <p className="mt-4 text-center text-xs leading-relaxed text-neutral-500">
              Responsive in-article slot. Add AdSense code after approval.
            </p>

            {/* ✅ When AdSense approved, replace this box with your AdSense component/script */}
            <div className="mt-5 rounded-2xl border border-dashed bg-white/40 px-4 py-8 text-center text-xs text-neutral-500">
              Ad placeholder
            </div>

            <p className="mt-4 text-center text-xs text-neutral-400">
              Tip: Place ads after strong sections (intro, mid-article, before conclusion).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ✅ Sticky mobile ad (UX-safe)
 * - shows only on mobile
 * - dismiss button
 * - safe height, does not cover too much
 */
function StickyMobileAd({ label }: { label: string }) {
  const [closed, setClosed] = React.useState(false);

  if (closed) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 block md:hidden">
      <div className="mx-auto max-w-[720px] px-3 pb-3">
        <div className="overflow-hidden rounded-2xl border bg-white/80 shadow-[0_16px_60px_rgba(0,0,0,0.18)] backdrop-blur">
          <div className="flex items-center justify-between gap-3 border-b bg-white/50 px-3 py-2">
            <div className="text-[11px] font-semibold tracking-widest text-neutral-500">
              AD
            </div>
            <div className="text-[11px] text-neutral-500">{label}</div>
            <button
              type="button"
              onClick={() => setClosed(true)}
              className="rounded-full border bg-white px-2 py-1 text-[11px] font-semibold text-neutral-700"
              aria-label="Close ad"
            >
              ✕
            </button>
          </div>

          <div className="px-3 py-3">
            <div className="rounded-xl border border-dashed bg-white/50 px-3 py-5 text-center text-xs text-neutral-600">
              Sticky mobile ad placeholder
            </div>
            <div className="mt-2 text-center text-[11px] text-neutral-400">
              Collapses safely on mobile • Doesn’t block reading
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

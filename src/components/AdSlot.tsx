"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  label?: string;
  className?: string;
  /** optional: collapse ad placeholder on very small screens */
  collapseOnMobile?: boolean;
};

export default function AdSlot({
  label = "Responsive in-article slot (AdSense after approval)",
  className = "",
  collapseOnMobile = true,
}: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 420);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const hidden = collapseOnMobile && isMobile;

  if (hidden) return null;

  return (
    <div className={className}>
      <div className="mx-auto my-8 w-full max-w-3xl overflow-hidden rounded-3xl border border-neutral-200/70 bg-white/60 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur">
        <div className="flex items-center justify-between border-b border-neutral-200/70 px-4 py-3">
          <div className="text-xs font-semibold text-neutral-600">ADVERTISEMENT</div>
          <div className="text-xs text-neutral-500">{label}</div>
        </div>

        <div className="px-4 py-8">
          <div className="mx-auto grid max-w-xl place-items-center rounded-2xl border border-dashed border-neutral-300 bg-white/70 px-6 py-10 text-center">
            <div className="text-sm font-semibold text-neutral-700">
              Ad placeholder
            </div>
            <div className="mt-2 text-xs leading-6 text-neutral-500">
              Responsive in-article slot. Add AdSense code after approval.
            </div>

            <div className="mt-4 flex gap-2">
              <span className="h-2 w-2 rounded-full bg-neutral-300" />
              <span className="h-2 w-2 rounded-full bg-neutral-300" />
              <span className="h-2 w-2 rounded-full bg-neutral-300" />
            </div>
          </div>

          <p className="mt-3 text-center text-xs text-neutral-500">
            Tip: Place ads after strong sections (intro, mid-article, before conclusion) for better viewability.
          </p>
        </div>
      </div>
    </div>
  );
}

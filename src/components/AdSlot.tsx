"use client";

import { useEffect, useMemo } from "react";
import { site } from "@/content/site";

type Props = {
  label?: string;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "full";
  inArticle?: boolean;
  client?: string;
  slot?: string;
};

const widthClass: Record<NonNullable<Props["maxWidth"]>, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-3xl",
  full: "max-w-none",
};

export default function AdSlot({
  label = "Advertisement",
  className = "",
  maxWidth = "full",
  inArticle = false,
  client,
  slot,
}: Props) {
  // ✅ BEFORE ADSENSE APPROVAL → HIDE COMPLETELY
  if (!site.adsenseEnabled) return null;

  const uid = useMemo(() => `ad-${Math.random().toString(36).slice(2)}`, []);

  useEffect(() => {
    if (!client || !slot) return;
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, [client, slot]);

  return (
    <div
      className={[
        "w-full mx-auto rounded-3xl border bg-white/60 backdrop-blur",
        widthClass[maxWidth],
        inArticle ? "my-8" : "",
        className,
      ].join(" ")}
    >
      <div className="px-4 pt-3 text-[11px] uppercase tracking-wider text-neutral-500">
        {label}
      </div>

      <div className="px-4 pb-4">
        <ins
          id={uid}
          className="adsbygoogle block"
          style={{ display: "block" }}
          data-ad-client={client}
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}

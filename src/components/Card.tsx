import Link from "next/link";
import { ReactNode } from "react";

export default function Card({
  title,
  description,
  href,
  meta,
}: {
  title: string;
  description?: string;
  href?: string;
  meta?: ReactNode;
}) {
  const content = (
    <div className="group rounded-2xl border bg-white/70 p-6 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:shadow-lg">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold tracking-tight text-neutral-900">{title}</h3>
        {meta ? <div className="text-xs text-neutral-500">{meta}</div> : null}
      </div>
      {description ? <p className="mt-2 text-sm text-neutral-600">{description}</p> : null}
      {href ? (
        <div className="mt-4 text-sm font-medium text-neutral-900">
          <span className="opacity-70 group-hover:opacity-100">Open</span>{" "}
          <span className="inline-block transition group-hover:translate-x-1">→</span>
        </div>
      ) : null}
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}

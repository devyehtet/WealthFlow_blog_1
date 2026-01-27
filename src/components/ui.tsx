import Link from "next/link";
import { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700 backdrop-blur">
      {children}
    </span>
  );
}

export function GlowCard({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-emerald-500/20 blur-xl" />
      <div className="relative rounded-3xl border bg-white/70 p-8 backdrop-blur">
        {children}
      </div>
    </div>
  );
}

export function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 hover:shadow-md"
    >
      {children}
    </Link>
  );
}

export function SecondaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-xl border bg-white/70 px-6 py-3 text-sm font-semibold text-neutral-900 backdrop-blur transition hover:bg-white hover:shadow-sm"
    >
      {children}
    </Link>
  );
}

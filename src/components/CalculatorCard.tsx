import Link from "next/link";

export default function CalculatorCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border bg-white/70 hooking
      70 p-6 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
          <p className="mt-2 text-sm text-neutral-600">{description}</p>
        </div>
        <div className="grid h-10 w-10 place-items-center rounded-xl border bg-white text-neutral-900 shadow-sm transition group-hover:shadow">
          ↗
        </div>
      </div>

      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900">
        Calculate now <span className="transition group-hover:translate-x-1">→</span>
      </div>
    </Link>
  );
}

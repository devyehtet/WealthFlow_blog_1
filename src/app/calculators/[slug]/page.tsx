import Container from "@/components/Container";
import AdSlot from "@/components/AdSlot";
import Link from "next/link";
import { calculators } from "@/content/calculators";

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map((x) => Number(x));
  const dt = new Date(y, (m || 1) - 1, d || 1);
  return dt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

function sortByUpdated<T extends { updatedAt: string }>(items: T[]) {
  return [...items].sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));
}

function uniqTags(list: { tags: string[] }[]) {
  const s = new Set<string>();
  list.forEach((x) => x.tags.forEach((t) => s.add(t)));
  return [...s].sort();
}

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export default async function CalculatorsIndex({
  searchParams,
}: {
  // Next.js 16 sometimes treats searchParams as Promise
  searchParams?: Promise<{ q?: string; tag?: string }> | { q?: string; tag?: string };
}) {
  const sp = searchParams ? await Promise.resolve(searchParams) : undefined;

  const q = (sp?.q ?? "").trim().toLowerCase();
  const tag = (sp?.tag ?? "").trim().toLowerCase();

  const all = sortByUpdated(calculators);
  const tags = uniqTags(all);

  const filtered = all.filter((c) => {
    const matchesTag = tag ? c.tags.map((t) => t.toLowerCase()).includes(tag) : true;
    const matchesQ = q
      ? (c.title + " " + c.excerpt + " " + c.tags.join(" ")).toLowerCase().includes(q)
      : true;
    return matchesTag && matchesQ;
  });

  return (
    <div className="relative">
      {/* creative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-44 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-violet-200/60 via-sky-200/50 to-emerald-200/60 blur-3xl" />
        <div className="absolute top-24 left-[-120px] h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-amber-200/60 via-pink-200/40 to-indigo-200/50 blur-3xl" />
        <div className="absolute top-[520px] right-[-160px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-emerald-200/40 via-cyan-200/35 to-violet-200/50 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.06),transparent_55%)]" />
      </div>

      <Container>
        <section className="pt-10 md:pt-14">
          <div className="rounded-3xl border bg-white/60 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur ring-1 ring-black/5 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <div className="text-xs uppercase tracking-wider text-neutral-500">
                  Tools
                </div>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
                  Financial calculators
                  <span className="block bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-400 bg-clip-text text-transparent">
                    made for real life.
                  </span>
                </h1>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600 md:text-base">
                  Compare scenarios fast—compounding, loans, savings goals, and more.
                  Clear outputs, premium UX, and SEO-friendly pages.
                </p>
              </div>

              <div className="flex gap-2">
                <Link
                  href="/guides"
                  className="rounded-2xl border bg-white/70 px-4 py-2 text-sm font-semibold text-neutral-900 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Read guides →
                </Link>
                <Link
                  href="/blog"
                  className="rounded-2xl border bg-white/40 px-4 py-2 text-sm font-semibold text-neutral-900 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/70"
                >
                  Explore blog →
                </Link>
              </div>
            </div>

            {/* Search + Tag */}
            <div className="mt-6 grid gap-3 md:grid-cols-12">
              <div className="md:col-span-7">
                <form action="/calculators" className="flex gap-2">
                  <input
                    name="q"
                    defaultValue={sp?.q ?? ""}
                    placeholder="Search calculators… (e.g. loan, compound, savings)"
                    className="w-full rounded-2xl border bg-white/70 px-4 py-3 text-sm text-neutral-900 outline-none backdrop-blur placeholder:text-neutral-400 focus:ring-2 focus:ring-black/10"
                  />
                  <button
                    type="submit"
                    className="rounded-2xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-neutral-800"
                  >
                    Search
                  </button>
                </form>
              </div>

              <div className="md:col-span-5">
                <div className="flex flex-wrap gap-2 md:justify-end">
                  <Link
                    href="/calculators"
                    className={cx(
                      "rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur transition",
                      !tag ? "bg-neutral-900 text-white" : "bg-white/70 text-neutral-700 hover:bg-white"
                    )}
                  >
                    All
                  </Link>

                  {tags.slice(0, 10).map((t) => (
                    <Link
                      key={t}
                      href={`/calculators?tag=${encodeURIComponent(t)}`}
                      className={cx(
                        "rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur transition",
                        tag === t.toLowerCase()
                          ? "bg-neutral-900 text-white"
                          : "bg-white/70 text-neutral-700 hover:bg-white"
                      )}
                    >
                      #{t}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* top ad (optional) */}
            <div className="mt-6">
              <AdSlot label="Ad Slot (Top of calculators index)" />
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="mt-8 pb-16 md:mt-10 md:pb-24">
          <div className="flex items-center justify-between">
            <div className="text-sm text-neutral-600">
              Showing <span className="font-semibold text-neutral-900">{filtered.length}</span>{" "}
              calculators
              {tag ? (
                <>
                  {" "}
                  in <span className="font-semibold text-neutral-900">#{tag}</span>
                </>
              ) : null}
              {q ? (
                <>
                  {" "}
                  for <span className="font-semibold text-neutral-900">“{q}”</span>
                </>
              ) : null}
            </div>

            {(q || tag) && (
              <Link
                href="/calculators"
                className="text-sm font-semibold text-neutral-900 hover:underline"
              >
                Clear filters
              </Link>
            )}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c, idx) => (
              <div key={c.slug}>
                <Link
                  href={`/calculators/${c.slug}`}
                  className="group block rounded-3xl border bg-white/60 p-6 shadow-[0_16px_60px_rgba(0,0,0,0.06)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="text-base font-semibold text-neutral-950">
                        {c.title}
                      </div>
                      <div className="mt-2 text-sm leading-relaxed text-neutral-600">
                        {c.excerpt}
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {c.tags.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="rounded-full border bg-white/70 px-3 py-1 text-xs text-neutral-700"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 text-xs text-neutral-500">
                        Updated {formatDate(c.updatedAt)} • {c.readingMinutes} min read
                      </div>
                    </div>

                    <span className="rounded-2xl border bg-white/70 px-3 py-1 text-xs text-neutral-700">
                      Tool
                    </span>
                  </div>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-neutral-800">
                    Open <span className="transition group-hover:translate-x-0.5">→</span>
                  </div>
                </Link>

                {/* in-feed ad insertion */}
                {idx === 2 && (
                  <div className="mt-4">
                    <AdSlot label="Ad Slot (In-feed)" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-10 rounded-3xl border bg-white/60 p-8 text-center backdrop-blur">
              <div className="text-lg font-semibold text-neutral-900">
                No calculators found
              </div>
              <div className="mt-2 text-sm text-neutral-600">
                Try another keyword or clear filters.
              </div>
              <div className="mt-5">
                <Link
                  href="/calculators"
                  className="rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
                >
                  View all calculators →
                </Link>
              </div>
            </div>
          )}
        </section>
      </Container>
    </div>
  );
}

import Container from "@/components/Container";
import AdSlot from "@/components/AdSlot";
import Link from "next/link";

import { calculators } from "@/content/calculators";
import { guides } from "@/content/guides";
import { blogs } from "@/content/blogs";

function formatDate(iso: string) {
  // iso: YYYY-MM-DD
  const [y, m, d] = iso.split("-").map((x) => Number(x));
  const dt = new Date(y, (m || 1) - 1, d || 1);
  return dt.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" });
}

function sortByUpdated<T extends { updatedAt: string }>(items: T[]) {
  return [...items].sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));
}

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border bg-white/70 text-lg shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-3xl border bg-white/60 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur",
        "ring-1 ring-black/5",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  const topCalcs = calculators.slice(0, 6);
  const popularGuides = sortByUpdated(guides).slice(0, 4);
  const latestBlogs = sortByUpdated(blogs).slice(0, 6);

  return (
    <div className="relative">
      {/* ===== Background (creative mesh) ===== */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-violet-200/60 via-sky-200/50 to-emerald-200/60 blur-3xl" />
        <div className="absolute top-24 left-[-120px] h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-amber-200/60 via-pink-200/40 to-indigo-200/50 blur-3xl" />
        <div className="absolute top-[520px] right-[-160px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-emerald-200/40 via-cyan-200/35 to-violet-200/50 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_50%)]" />
      </div>

      <Container>
        {/* ===== HERO ===== */}
        <section className="pt-10 md:pt-14">
          <GlassCard className="relative overflow-hidden p-6 md:p-10">
            {/* subtle grid overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(0,0,0,0.6)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.6)_1px,transparent_1px)] [background-size:36px_36px]" />

            <div className="relative grid gap-10 md:grid-cols-12">
              {/* Left */}
              <div className="md:col-span-7">
                <div className="inline-flex flex-wrap gap-2">
                  <span className="rounded-full border bg-white/70 px-3 py-1 text-xs text-neutral-700 backdrop-blur">
                    Finance tools
                  </span>
                  <span className="rounded-full border bg-white/70 px-3 py-1 text-xs text-neutral-700 backdrop-blur">
                    Budgeting • Investing • Loans
                  </span>
                  <span className="rounded-full border bg-white/70 px-3 py-1 text-xs text-neutral-700 backdrop-blur">
                    Beginner-friendly guides
                  </span>
                </div>

                <h1 className="mt-5 text-4xl font-semibold tracking-tight text-neutral-950 md:text-6xl">
                  Build wealth with{" "}
                  <span className="bg-gradient-to-r from-neutral-950 via-neutral-700 to-neutral-400 bg-clip-text text-transparent">
                    tools that feel effortless.
                  </span>
                </h1>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-700 md:text-lg">
                  Practical calculators + readable guides that help people make better decisions—
                  without the hype. Designed to keep readers engaged, and keep your site feeling premium.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Link
                    href="/calculators"
                    className="rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-neutral-800"
                  >
                    Try calculators →
                  </Link>
                  <Link
                    href="/guides"
                    className="rounded-2xl border bg-white/70 px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    Read guides
                  </Link>
                  <Link
                    href="/blog"
                    className="rounded-2xl border bg-white/40 px-5 py-3 text-sm font-semibold text-neutral-900 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/70"
                  >
                    Explore blog
                  </Link>
                </div>

                {/* mini stats row */}
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border bg-white/55 p-4 backdrop-blur">
                    <div className="text-xs text-neutral-500">Focus</div>
                    <div className="mt-1 text-sm font-semibold text-neutral-900">Budget → Invest → Grow</div>
                  </div>
                  <div className="rounded-2xl border bg-white/55 p-4 backdrop-blur">
                    <div className="text-xs text-neutral-500">Style</div>
                    <div className="mt-1 text-sm font-semibold text-neutral-900">Clear, step-by-step</div>
                  </div>
                  <div className="rounded-2xl border bg-white/55 p-4 backdrop-blur">
                    <div className="text-xs text-neutral-500">Outcome</div>
                    <div className="mt-1 text-sm font-semibold text-neutral-900">Better money decisions</div>
                  </div>
                </div>

                <p className="mt-6 text-xs text-neutral-500">
                  Disclaimer: Educational content only. Not financial advice.
                </p>
              </div>

              {/* Right */}
              <div className="md:col-span-5">
                <GlassCard className="p-5 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-neutral-900">Today’s quick tools</div>
                      <div className="mt-1 text-xs text-neutral-500">
                        Fast answers, clean UI, reader-first.
                      </div>
                    </div>
                    <span className="rounded-full border bg-white/70 px-3 py-1 text-xs text-neutral-700">
                      Popular
                    </span>
                  </div>

                  <div className="mt-5 space-y-3">
                    <Link
                      href="/calculators/compound-interest"
                      className="group flex items-center gap-3 rounded-2xl border bg-white/70 p-4 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
                    >
                      <IconBadge>📈</IconBadge>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-neutral-900">Compound Interest</div>
                        <div className="mt-0.5 truncate text-xs text-neutral-500">
                          See growth over time + contributions.
                        </div>
                      </div>
                      <span className="ml-auto text-sm text-neutral-400 transition group-hover:text-neutral-900">
                        →
                      </span>
                    </Link>

                    <Link
                      href="/calculators/loan-payment"
                      className="group flex items-center gap-3 rounded-2xl border bg-white/70 p-4 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
                    >
                      <IconBadge>🏦</IconBadge>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-neutral-900">Loan Payment</div>
                        <div className="mt-0.5 truncate text-xs text-neutral-500">
                          Monthly payment + total interest.
                        </div>
                      </div>
                      <span className="ml-auto text-sm text-neutral-400 transition group-hover:text-neutral-900">
                        →
                      </span>
                    </Link>

                    <Link
                      href="/guides/how-to-build-wealth-step-by-step"
                      className="group flex items-center gap-3 rounded-2xl border bg-white/70 p-4 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
                    >
                      <IconBadge>🧭</IconBadge>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-neutral-900">Wealth Building Guide</div>
                        <div className="mt-0.5 truncate text-xs text-neutral-500">
                          A simple system for beginners.
                        </div>
                      </div>
                      <span className="ml-auto text-sm text-neutral-400 transition group-hover:text-neutral-900">
                        →
                      </span>
                    </Link>
                  </div>

                  <div className="mt-5 rounded-2xl border bg-white/60 p-4 text-xs text-neutral-600">
                    Tip: Compare scenarios with calculators, then lock in one plan and stay consistent.
                  </div>
                </GlassCard>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* ===== Tools ===== */}
        <section className="mt-12 md:mt-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-neutral-500">Tools</div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950 md:text-3xl">
                Financial calculators
              </h2>
              <p className="mt-2 max-w-xl text-sm text-neutral-600 md:text-base">
                High-intent tools that help readers make decisions faster.
              </p>
            </div>

            <Link
              href="/calculators"
              className="inline-flex items-center gap-2 rounded-2xl border bg-white/60 px-4 py-2 text-sm font-semibold text-neutral-900 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
            >
              View all <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {topCalcs.map((c) => (
              <Link
                key={c.slug}
                href={`/calculators/${c.slug}`}
                className="group rounded-3xl border bg-white/55 p-6 shadow-[0_16px_60px_rgba(0,0,0,0.06)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-base font-semibold text-neutral-950">{c.title}</div>
                    <div className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {c.excerpt}
                    </div>
                  </div>
                  <span className="rounded-2xl border bg-white/70 px-3 py-1 text-xs text-neutral-700">
                    Tool
                  </span>
                </div>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-neutral-800">
                  Calculate now <span className="transition group-hover:translate-x-0.5">→</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <AdSlot label="Ad Slot (In-content)" />
          </div>
        </section>

        {/* ===== Guides ===== */}
        <section className="mt-12 md:mt-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-neutral-500">Learn</div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950 md:text-3xl">
                Popular guides
              </h2>
              <p className="mt-2 max-w-xl text-sm text-neutral-600 md:text-base">
                Evergreen guides people search every day.
              </p>
            </div>

            <Link
              href="/guides"
              className="inline-flex items-center gap-2 rounded-2xl border bg-white/60 px-4 py-2 text-sm font-semibold text-neutral-900 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
            >
              View all <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {popularGuides.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="group rounded-3xl border bg-white/55 p-6 shadow-[0_16px_60px_rgba(0,0,0,0.06)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="text-base font-semibold text-neutral-950">{g.title}</div>
                    <div className="mt-2 text-sm leading-relaxed text-neutral-600">{g.excerpt}</div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {g.tags.slice(0, 3).map((t) => (
                        <span key={t} className="rounded-full border bg-white/70 px-3 py-1 text-xs text-neutral-700">
                          #{t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 text-xs text-neutral-500">
                      Updated {formatDate(g.updatedAt)} • {g.readingMinutes} min read
                    </div>
                  </div>

                  <span className="rounded-2xl border bg-white/70 px-3 py-1 text-xs text-neutral-700">
                    Guide
                  </span>
                </div>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-neutral-800">
                  Read guide <span className="transition group-hover:translate-x-0.5">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ===== Blog ===== */}
        <section className="mt-12 pb-16 md:mt-16 md:pb-24">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-neutral-500">Latest</div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950 md:text-3xl">
                Latest articles
              </h2>
              <p className="mt-2 max-w-xl text-sm text-neutral-600 md:text-base">
                Fresh insights + practical how-tos.
              </p>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-2xl border bg-white/60 px-4 py-2 text-sm font-semibold text-neutral-900 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
            >
              View all <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {latestBlogs.map((b) => (
              <Link
                key={b.slug}
                href={`/blog/${b.slug}`}
                className="group rounded-3xl border bg-white/55 p-6 shadow-[0_16px_60px_rgba(0,0,0,0.06)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="text-base font-semibold text-neutral-950">{b.title}</div>
                    <div className="mt-2 text-sm leading-relaxed text-neutral-600">{b.excerpt}</div>
                    <div className="mt-5 text-xs text-neutral-500">
                      Updated {formatDate(b.updatedAt)} • {b.readingMinutes} min read
                    </div>
                  </div>
                  <span className="rounded-2xl border bg-white/70 px-3 py-1 text-xs text-neutral-700">
                    Blog
                  </span>
                </div>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-neutral-800">
                  Open <span className="transition group-hover:translate-x-0.5">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}

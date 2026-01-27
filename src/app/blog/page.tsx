import Container from "@/components/Container";
import Link from "next/link";
import { blogs } from "@/content/blogs";

export const metadata = {
  title: "Blog | WealthFlow",
  description: "Practical money lessons and market basics.",
};

function uniq<T>(arr: T[]) {
  return Array.from(new Set(arr));
}

function toTs(dateStr: string) {
  // expects YYYY-MM-DD
  const d = new Date(dateStr + "T00:00:00");
  return d.getTime();
}

export default async function BlogIndex({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const sp = await searchParams;
  const activeTag = sp.tag?.toLowerCase();

  const allTags = uniq(
    blogs.flatMap((p) => p.tags || []).map((t) => t.toLowerCase())
  ).sort();

  const sorted = [...blogs].sort((a, b) => toTs(b.updatedAt) - toTs(a.updatedAt));

  const list = activeTag
    ? sorted.filter((p) => (p.tags || []).map((t) => t.toLowerCase()).includes(activeTag))
    : sorted;

  return (
    <Container>
      <section className="mx-auto max-w-6xl pt-12">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
            <p className="mt-2 text-neutral-600">
              Practical money lessons and market basics.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <Link
              href="/blog"
              className={`rounded-full border px-3 py-1 text-sm backdrop-blur transition ${
                !activeTag
                  ? "border-neutral-900 bg-neutral-900 text-white"
                  : "border-neutral-200 bg-white/70 text-neutral-700 hover:bg-white"
              }`}
            >
              All
            </Link>

            {allTags.map((t) => (
              <Link
                key={t}
                href={`/blog?tag=${encodeURIComponent(t)}`}
                className={`rounded-full border px-3 py-1 text-sm backdrop-blur transition ${
                  activeTag === t
                    ? "border-neutral-900 bg-neutral-900 text-white"
                    : "border-neutral-200 bg-white/70 text-neutral-700 hover:bg-white"
                }`}
              >
                {t.replace(/-/g, " ")}
              </Link>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {list.map((p) => (
            <article
              key={p.slug}
              className="group rounded-3xl border border-neutral-200/70 bg-white/70 p-7 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
            >
              <div className="flex items-center justify-between gap-4 text-xs text-neutral-500">
                <div className="flex flex-wrap gap-2">
                  {(p.tags || []).slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-neutral-200 bg-white/70 px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div>
                  Updated {p.updatedAt} · {p.readingMinutes} min
                </div>
              </div>

              <h2 className="mt-4 text-xl font-semibold tracking-tight text-neutral-900">
                {p.title}
              </h2>
              <p className="mt-2 text-neutral-600">{p.excerpt}</p>

              <div className="mt-5">
                <Link
                  href={`/blog/${p.slug}`}
                  className="inline-flex items-center gap-2 font-semibold text-neutral-900"
                >
                  Open <span className="transition group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {list.length === 0 && (
          <div className="mt-10 rounded-3xl border bg-white/70 p-8 text-neutral-700">
            No posts found for this tag.
          </div>
        )}
      </section>
    </Container>
  );
}

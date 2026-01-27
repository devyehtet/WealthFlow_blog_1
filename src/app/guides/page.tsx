import Link from "next/link";
import Container from "@/components/Container";
import { guides } from "@/content/guides";

export default async function GuidesIndex({
  searchParams,
}: {
  searchParams?: Promise<{ tag?: string }>;
}) {
  const params = await searchParams;
  const tag = params?.tag?.toLowerCase();

  const list = tag
    ? guides.filter((g) => g.tags.map((t) => t.toLowerCase()).includes(tag))
    : guides;

  return (
    <Container>
      <div className="mx-auto max-w-5xl pt-12">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
          Finance Guides
        </h1>

        <p className="mt-3 max-w-2xl text-[18px] leading-8 text-neutral-600">
          Step-by-step guides on personal finance, investing, budgeting, and
          long-term wealth building.
        </p>

        {/* Active filter */}
        {tag && (
          <div className="mt-4 text-sm text-neutral-600">
            Showing guides tagged with{" "}
            <span className="font-semibold text-neutral-900">#{tag}</span>{" "}
            <Link href="/guides" className="ml-2 underline">
              Clear filter
            </Link>
          </div>
        )}

        {/* Guide list */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {list.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="group rounded-3xl border bg-white/70 p-6 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold text-neutral-900 group-hover:underline">
                {g.title}
              </h2>

              <p className="mt-2 text-[16px] leading-7 text-neutral-600">
                {g.excerpt}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {g.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border bg-white px-3 py-1 text-xs text-neutral-700"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <div className="mt-4 text-xs text-neutral-500">
                Updated {g.updatedAt} · {g.readingMinutes} min read
              </div>
            </Link>
          ))}
        </div>

        {list.length === 0 && (
          <div className="mt-12 text-neutral-600">
            No guides found for this tag.
          </div>
        )}
      </div>
    </Container>
  );
}

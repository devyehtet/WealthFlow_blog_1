import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import { guides } from "@/content/guides";

export function generateStaticParams() {
  const tags = Array.from(new Set(guides.flatMap((g) => g.tags)));
  return tags.map((tag) => ({ tag }));
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const list = guides.filter((g) => g.tags.includes(tag));

  return (
    <Container>
      <div className="pt-12">
        <SectionTitle title={`Topic: ${tag}`} subtitle="A hub page that builds topical authority." />
        <div className="grid gap-4 md:grid-cols-2">
          {list.map((g) => (
            <Card key={g.slug} title={g.title} description={g.excerpt} href={`/guides/${g.slug}`} />
          ))}
        </div>
      </div>
    </Container>
  );
}

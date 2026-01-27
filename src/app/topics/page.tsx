import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import { guides } from "@/content/guides";

export default function TopicsIndex() {
  const tags = Array.from(new Set(guides.flatMap((g) => g.tags))).sort();

  return (
    <Container>
      <div className="pt-12">
        <SectionTitle
          title="Topics"
          subtitle="Topic hubs improve internal linking and topical authority."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tags.map((t) => (
            <Card
              key={t}
              title={`#${t}`}
              description={`Browse all guides tagged with ${t}.`}
              href={`/topics/${t}`}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

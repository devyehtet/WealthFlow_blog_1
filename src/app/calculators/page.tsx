import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import CalculatorCard from "@/components/CalculatorCard";
import { calculators } from "@/content/calculators";

export default function CalculatorsIndex() {
  return (
    <Container>
      <div className="pt-12">
        <SectionTitle title="Calculators" subtitle="Fast tools designed for clarity and intent." />
        <div className="grid gap-4 md:grid-cols-2">
          {calculators.map((c) => (
            <CalculatorCard
              key={c.slug}
              title={c.title}
              description={c.description}
              href={`/calculators/${c.slug}`}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

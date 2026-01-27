import Container from "@/components/Container";

export default function AboutPage() {
  return (
    <Container>
      <div className="pt-12 max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight">About</h1>
        <p className="mt-4 text-neutral-700">
          WealthFlow is an educational finance website with practical guides and calculators.
        </p>
      </div>
    </Container>
  );
}

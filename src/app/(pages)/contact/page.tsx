import Container from "@/components/Container";

export default function ContactPage() {
  return (
    <Container>
      <div className="pt-12 max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-4 text-neutral-700">
          Email: <span className="font-medium">contact@yourdomain.com</span>
        </p>
      </div>
    </Container>
  );
}

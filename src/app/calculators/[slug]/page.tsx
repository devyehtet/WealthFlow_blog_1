import type { Metadata } from "next";
import Link from "next/link";

import Container from "@/components/Container";
import AdSlot from "@/components/AdSlot";
import JsonLd from "@/components/JsonLd";

import { calculators } from "@/content/calculators";
import { site } from "@/content/site";
import { absUrl } from "@/lib/seo";

/** ✅ IMPORT YOUR UI COMPONENTS HERE */
import CompoundInterestCalculator from "@/components/calculators/CompoundInterestCalculator";
import LoanPaymentCalculator from "@/components/calculators/LoanPaymentCalculator";

/** ✅ SAFE MAP: component key -> actual React component */
const CALC_COMPONENTS = {
  compoundInterest: CompoundInterestCalculator,
  loanPayment: LoanPaymentCalculator,
} as const;

export function generateStaticParams() {
  return calculators.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const calc = calculators.find((c) => c.slug === slug);

  if (!calc) return { title: "Calculator Not Found" };

  const url = absUrl(`/calculators/${calc.slug}`);

  return {
    title: calc.title,
    description: calc.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: calc.title,
      description: calc.excerpt,
      url,
      siteName: site.name,
      type: "article",
    },
  };
}

export default async function CalculatorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const calc = calculators.find((c) => c.slug === slug);
  if (!calc) return null;

  const url = absUrl(`/calculators/${calc.slug}`);

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: calc.title,
    description: calc.excerpt,
    url,
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    publisher: { "@type": "Organization", name: site.name },
  };

  const CalcComponent = CALC_COMPONENTS[calc.component];

  return (
    <Container>
      <JsonLd data={schema} />

      <div className="mx-auto max-w-3xl pt-12">
        <Link
          href="/calculators"
          className="text-sm text-neutral-600 hover:text-neutral-900"
        >
          ← Back to Calculators
        </Link>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900">
          {calc.title}
        </h1>

        <p className="mt-3 text-[17px] leading-8 text-neutral-600">
          {calc.excerpt}
        </p>

        <div className="my-10 hidden md:block">
          <AdSlot label="Ad Slot (Top of calculator)" className="max-w-[720px]" />
        </div>

        {/* ✅ Calculator UI */}
        <div className="mt-6 rounded-3xl border bg-white/70 p-6 backdrop-blur md:p-8">
          <CalcComponent />
        </div>

        {/* ✅ Educational content */}
        {calc.education?.length ? (
          <section className="mt-12 rounded-3xl border bg-white/70 p-6 backdrop-blur md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
              How to use this calculator
            </h2>
            <div className="mt-4 space-y-4 text-[16.5px] leading-8 text-neutral-800">
              {calc.education.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>
        ) : null}

        <div className="my-14 hidden md:block">
          <AdSlot label="Ad Slot (End of calculator)" maxWidth="lg" />
        </div>
      </div>
    </Container>
  );
}

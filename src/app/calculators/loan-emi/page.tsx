"use client";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import AdSlot from "@/components/AdSlot";
import SimpleTable from "@/components/SimpleTable";
import { clampNumber } from "@/lib/format";
import { useMemo, useState } from "react";

export default function LoanEmiPage() {
  const [principal, setPrincipal] = useState(200000);
  const [annualRate, setAnnualRate] = useState(9);
  const [years, setYears] = useState(5);

  const result = useMemo(() => {
    const P = clampNumber(Number(principal) || 0, 0, 1e12);
    const r = clampNumber(Number(annualRate) || 0, 0, 100) / 100 / 12;
    const n = clampNumber(Number(years) || 0, 0, 50) * 12;

    if (P === 0 || n === 0) return { emi: 0, totalPay: 0, totalInterest: 0 };

    const emi =
      r === 0 ? P / n : (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    const totalPay = emi * n;
    const totalInterest = totalPay - P;

    return { emi, totalPay, totalInterest };
  }, [principal, annualRate, years]);

  const fmt = (v: number) => v.toLocaleString(undefined, { maximumFractionDigits: 2 });

  return (
    <Container>
      <div className="pt-12">
        <SectionTitle title="Loan EMI Calculator" subtitle="Estimate your monthly loan payments." />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border bg-white p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Loan Amount" value={principal} onChange={setPrincipal} />
              <Field label="Annual Interest Rate (%)" value={annualRate} onChange={setAnnualRate} step="0.1" />
              <Field label="Tenure (Years)" value={years} onChange={setYears} />
            </div>
            <p className="mt-4 text-xs text-neutral-500">Assumes fixed rate and equal monthly payments.</p>
          </div>

          <div className="space-y-4">
            <SimpleTable
              rows={[
                { label: "Monthly Payment (EMI)", value: fmt(result.emi) },
                { label: "Total Payment", value: fmt(result.totalPay) },
                { label: "Total Interest", value: fmt(result.totalInterest) },
              ]}
            />
            <AdSlot label="Ad Slot (Calculator)" />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Field({
  label,
  value,
  onChange,
  step,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  step?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm text-neutral-700">{label}</span>
      <input
        type="number"
        value={value}
        step={step}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1 w-full rounded-xl border bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-200"
      />
    </label>
  );
}

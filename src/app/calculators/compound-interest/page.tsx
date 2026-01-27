"use client";

import { useMemo, useState } from "react";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import AdSlot from "@/components/AdSlot";
import SimpleTable from "@/components/SimpleTable";

function clampNumber(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export default function CompoundInterestPage() {
  const [initial, setInitial] = useState<number>(1000);
  const [monthly, setMonthly] = useState<number>(100);
  const [rate, setRate] = useState<number>(8);
  const [years, setYears] = useState<number>(10);

  const result = useMemo(() => {
    const P = clampNumber(initial || 0, 0, 1e9);
    const PMT = clampNumber(monthly || 0, 0, 1e7);
    const r = clampNumber(rate || 0, 0, 100) / 100;

    const months = clampNumber(years || 0, 0, 80) * 12;
    const monthlyRate = r / 12;

    let balance = P;
    for (let m = 0; m < months; m++) {
      balance = balance * (1 + monthlyRate) + PMT;
    }

    const totalContrib = P + PMT * months;
    return {
      final: balance,
      totalContrib,
      interestEarned: balance - totalContrib,
      months,
    };
  }, [initial, monthly, rate, years]);

  const fmt = (v: number) =>
    v.toLocaleString(undefined, { maximumFractionDigits: 2 });

  return (
    <Container>
      <div className="pt-12">
        <SectionTitle
          title="Compound Interest Calculator"
          subtitle="Estimate how your money can grow over time with monthly deposits."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border bg-white p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Initial Amount" value={initial} onChange={setInitial} />
              <Field label="Monthly Contribution" value={monthly} onChange={setMonthly} />
              <Field label="Annual Interest Rate (%)" value={rate} onChange={setRate} step="0.1" />
              <Field label="Years" value={years} onChange={setYears} />
            </div>

            <p className="mt-4 text-xs text-neutral-500">
              Educational estimate only. Real returns vary and may include fees and taxes.
            </p>
          </div>

          <div className="space-y-4">
            <SimpleTable
              rows={[
                { label: "Final Value (Estimate)", value: fmt(result.final) },
                { label: "Total Contributions", value: fmt(result.totalContrib) },
                { label: "Interest Earned", value: fmt(result.interestEarned) },
                { label: "Time (Months)", value: String(result.months) },
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

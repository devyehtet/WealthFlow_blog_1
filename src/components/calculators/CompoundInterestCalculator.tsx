"use client";

import { useState } from "react";

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState(1000);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(10);
  const [monthly, setMonthly] = useState(0);

  const r = rate / 100 / 12;
  const n = years * 12;

  const futureValue =
    principal * Math.pow(1 + r, n) +
    monthly * ((Math.pow(1 + r, n) - 1) / r || 0);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Initial Investment ($)">
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(+e.target.value)}
          />
        </Field>

        <Field label="Annual Interest Rate (%)">
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(+e.target.value)}
          />
        </Field>

        <Field label="Years">
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(+e.target.value)}
          />
        </Field>

        <Field label="Monthly Contribution ($)">
          <input
            type="number"
            value={monthly}
            onChange={(e) => setMonthly(+e.target.value)}
          />
        </Field>
      </div>

      <div className="rounded-2xl bg-emerald-50 p-6 text-center">
        <div className="text-sm text-emerald-700">Estimated Value</div>
        <div className="mt-2 text-3xl font-semibold text-emerald-900">
          ${futureValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-1 text-sm font-medium text-neutral-700">{label}</div>
      <div className="rounded-xl border bg-white px-3 py-2">
        {children}
      </div>
    </label>
  );
}

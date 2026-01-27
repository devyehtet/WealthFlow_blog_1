"use client";

import { useState } from "react";

export default function LoanPaymentCalculator() {
  const [amount, setAmount] = useState(20000);
  const [rate, setRate] = useState(6);
  const [years, setYears] = useState(5);

  const monthlyRate = rate / 100 / 12;
  const payments = years * 12;

  const monthlyPayment =
    (amount * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -payments));

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Field label="Loan Amount ($)">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
          />
        </Field>

        <Field label="Interest Rate (%)">
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(+e.target.value)}
          />
        </Field>

        <Field label="Loan Term (Years)">
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(+e.target.value)}
          />
        </Field>
      </div>

      <div className="rounded-2xl bg-blue-50 p-6 text-center">
        <div className="text-sm text-blue-700">Monthly Payment</div>
        <div className="mt-2 text-3xl font-semibold text-blue-900">
          ${monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 2 })}
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

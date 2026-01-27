export type CalculatorDef = {
  slug: string;
  title: string;
  excerpt: string;
  component: "compoundInterest" | "loanPayment"; // ✅ extend here later
  updatedAt: string;
  readingMinutes: number;
  education?: string[];
};

export const calculators: CalculatorDef[] = [
  {
    slug: "compound-interest",
    title: "Compound Interest Calculator",
    excerpt:
      "Estimate how your savings or investments grow over time with compounding. Adjust contributions, rate, and time horizon.",
    component: "compoundInterest",
    updatedAt: "2026-01-27",
    readingMinutes: 6,
    education: [
      "Enter your starting amount (principal), expected annual return, and the number of years you plan to invest.",
      "Add monthly contributions to see how consistent investing accelerates growth.",
      "Compounding works best with time—small contributions over long periods can beat large late deposits.",
    ],
  },
  {
    slug: "loan-payment",
    title: "Loan Payment Calculator",
    excerpt:
      "Calculate monthly payments for a loan based on principal, interest rate, and term length.",
    component: "loanPayment",
    updatedAt: "2026-01-27",
    readingMinutes: 5,
    education: [
      "Enter the loan amount, interest rate, and term length to estimate the monthly payment.",
      "Compare different terms to see how interest cost changes over time.",
    ],
  },
];

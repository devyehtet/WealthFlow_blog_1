export type Calculator = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string; // YYYY-MM-DD
  readingMinutes: number;
  tags: string[];
  coverImage?: { src: string; alt: string };
};

export const calculators: Calculator[] = [
  {
    slug: "compound-interest",
    title: "Compound Interest Calculator",
    excerpt:
      "Estimate how your savings or investments grow over time with compounding. Adjust contributions, rate, and time horizon.",
    updatedAt: "2026-01-27",
    readingMinutes: 6,
    tags: ["investing", "saving", "compound-interest"],
    coverImage: {
      src: "/images/calculators/compound-interest.jpg",
      alt: "Compound interest growth chart illustration",
    },
  },
  {
    slug: "loan-payment",
    title: "Loan Payment Calculator",
    excerpt:
      "Calculate monthly loan payments, total interest, and payoff cost using principal, APR, and term length.",
    updatedAt: "2026-01-27",
    readingMinutes: 6,
    tags: ["credit-loans", "budgeting"],
    coverImage: {
      src: "/images/calculators/loan-payment.jpg",
      alt: "Loan payment schedule illustration",
    },
  },
  {
    slug: "savings-goal",
    title: "Savings Goal Calculator",
    excerpt:
      "Turn a savings goal into a monthly plan. Enter your target amount, timeline, and starting balance to get a clear saving target.",
    updatedAt: "2026-01-27",
    readingMinutes: 5,
    tags: ["saving", "budgeting"],
    coverImage: {
      src: "/images/calculators/savings-goal.jpg",
      alt: "Savings goal planning worksheet",
    },
  },
  {
    slug: "retirement-savings",
    title: "Retirement Savings Calculator",
    excerpt:
      "Project long-term retirement savings using monthly contributions, expected returns, and time horizon.",
    updatedAt: "2026-01-27",
    readingMinutes: 7,
    tags: ["retirement", "investing"],
    coverImage: {
      src: "/images/calculators/retirement.jpg",
      alt: "Retirement planning concept illustration",
    },
  },
  {
    slug: "debt-payoff",
    title: "Debt Payoff Calculator",
    excerpt:
      "See how fast you can pay off debt with different monthly payments and interest rates. Compare scenarios quickly.",
    updatedAt: "2026-01-27",
    readingMinutes: 6,
    tags: ["debt", "credit-loans", "personal-finance"],
    coverImage: {
      src: "/images/calculators/debt-payoff.jpg",
      alt: "Debt payoff plan checklist",
    },
  },
];

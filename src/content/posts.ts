export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: "how-to" | "market" | "mindset";
  publishedAt: string;
  readingMinutes: number;
  coverImage: {
    src: string;
    alt: string;
  };
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "why-your-budget-fails",
    title: "Why Your Budget Fails (And How to Fix It)",
    excerpt:
      "Most budgets fail because they are too strict or unrealistic. Here is a simple system that works.",
    category: "how-to",
    publishedAt: "2026-01-10",
    readingMinutes: 6,
    coverImage: {
      src: "/images/blog/budget-fails.jpg",
      alt: "Budget planner and calculator on desk representing budgeting mistakes",
    },
    body: [
      "Budgets often fail because they assume perfect behavior.",
      "A realistic budget allows flexibility while maintaining structure.",
      "Automating savings and tracking fewer categories improves success.",
      "The best budget is one you can consistently follow."
    ]
  },

  {
    slug: "interest-rates-explained",
    title: "Interest Rates Explained: Why They Affect Everything",
    excerpt:
      "Interest rates influence loans, savings, and investment decisions more than most people realize.",
    category: "market",
    publishedAt: "2026-01-14",
    readingMinutes: 7,
    coverImage: {
      src: "/images/blog/interest-rates.jpg",
      alt: "Interest rate chart affecting loans and investments",
    },
    body: [
      "Interest rates represent the cost of borrowing and reward for saving.",
      "Higher rates increase loan costs but can benefit savers.",
      "Understanding rate cycles helps you plan long-term financial decisions.",
      "Focus on controllable factors like debt reduction and savings rate."
    ]
  },

  {
    slug: "small-habits-build-wealth",
    title: "Small Habits That Build Wealth Over Time",
    excerpt:
      "Wealth is usually built through small, consistent habits rather than big financial moves.",
    category: "mindset",
    publishedAt: "2026-01-18",
    readingMinutes: 5,
    coverImage: {
      src: "/images/blog/wealth-habits.jpg",
      alt: "Daily financial habits checklist for long-term wealth",
    },
    body: [
      "Automating finances removes emotional decision-making.",
      "Avoid lifestyle inflation as income grows.",
      "Tracking net worth monthly builds awareness and motivation.",
      "Consistency over time creates powerful results."
    ]
  }
];

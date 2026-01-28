import type { Block } from "@/components/ContentBlocks";

export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  updatedAt: string;
  readingMinutes: number;
  coverImage: {
    src: string;
    alt: string;
  };
  blocks: Block[];
  faqs: { q: string; a: string }[];
};

export const guides: Guide[] = [
  // =========================
  // GUIDE 1 (existing)
  // =========================
  {
    slug: "how-to-build-wealth-step-by-step",
    title: "How to Build Wealth Step by Step (Beginner-Friendly Guide)",
    excerpt:
      "Building wealth isn’t about quick wins or risky bets. It’s about smart money management, long-term investing, and consistent habits that compound over time.",
    tags: ["personal-finance", "investing", "budgeting", "wealth-building"],
    updatedAt: "2026-01-27",
    readingMinutes: 12,
    coverImage: {
      src: "/images/guides/build-wealth.jpg",
      alt: "Wealth building roadmap with budgeting, saving, and investing steps",
    },
    blocks: [
      { type: "p", text: "Building wealth is not about getting rich quickly or taking extreme financial risks..." },
      { type: "p", text: "Wealth is not defined by how much money you earn, but by how much you keep and grow..." },

      { type: "ad", label: "Ad Slot (After introduction)" },

      { type: "h2", text: "Understand Your Cash Flow First" },
      { type: "p", text: "The first step to building wealth is understanding your cash flow..." },

      {
        type: "callout",
        tone: "info",
        title: "Why this matters",
        text: "You can’t improve your finances if you don’t clearly see how money flows each month.",
      },

      { type: "h2", text: "Final Thoughts" },
      {
        type: "p",
        text: "By controlling expenses, saving consistently, and investing patiently, anyone can build wealth.",
      },
    ],
    faqs: [
      { q: "Can beginners really build wealth?", a: "Yes. Wealth depends more on habits than income." },
      { q: "Should I invest before paying off debt?", a: "High-interest debt should usually be paid off first." },
    ],
  },

  // =========================
  // GUIDE 2 (NEW – Smart Money Habits)
  // =========================
  {
    slug: "smart-money-habits-that-actually-grow-wealth-over-time",
    title: "Smart Money Habits That Actually Grow Wealth Over Time",
    excerpt:
      "Wealth is built through consistent habits, not big wins. Learn the smart money habits that quietly compound year after year.",
    tags: [
      "money-habits",
      "wealth-building",
      "personal-finance",
      "saving",
      "investing",
    ],
    updatedAt: "2026-01-28",
    readingMinutes: 14,
    coverImage: {
      src: "/images/guides/smart-money-habits.jpg",
      alt: "Smart money habits checklist for long-term wealth",
    },
    blocks: [
      {
        type: "p",
        text: "Building wealth is rarely about a single big decision. It is the result of many small choices made consistently over time.People who successfully grow wealth usually do not rely on luck, perfect timing, or sudden income increases. Instead, they develop smart money habits that quietly compound year after year.",
      },
      {
        type: "p",
        text: "These habits work regardless of income level or economic conditions because they focus on behavior rather than speculation.",
      },

    

      {
        type: "callout",
        tone: "info",
        title: "Core principle",
        text: "Wealth grows from habits, not one-time actions.",
      },

      { type: "ad", label: "Ad Slot (After introduction)" },

      { type: "h2", text: "Awareness Is the Starting Point of All Financial Growth" },
      {
        type: "p",
        text: "One of the most important habits for long-term wealth is becoming aware of how money flows in and out of your life. Many people earn enough to save and invest but struggle financially because spending happens automatically. Without awareness, money decisions are often reactive rather than intentional. Developing the habit of paying attention to cash flow creates clarity and opens the door to better choices.",
      },

      { type: "h2", text: "Intentional Spending Creates Long-Term Value" },
      {
        type: "p",
        text: "Spending intentionally does not mean eliminating enjoyment or living extremely frugally. It means choosing where money goes based on long-term value rather than impulse. Wealth builders often pause before spending and consider whether a purchase aligns with their goals. Over time, this habit reduces wasteful spending and increases the amount available for saving and investing without creating dissatisfaction.",
      },

      { type: "h2", text: "Living Below Your Means Builds Financial Margin" },
      {
        type: "p",
        text: "Living below your means is one of the most powerful wealth-building habits. This principle works at every income level and becomes even more effective as income grows. When expenses remain lower than income, a financial buffer is created. This buffer supports saving, investing, and handling unexpected costs without relying on debt. It also provides flexibility and peace of mind.",
      },

      { type: "ad", label: "Ad Slot (Mid-article)" },

      { type: "h2", text: "Avoiding Lifestyle Inflation Accelerates Wealth Growth" },
      {
        type: "p",
        text: "As income increases, it is tempting to increase spending at the same pace. This habit, known as lifestyle inflation, is one of the biggest barriers to wealth accumulation. People who grow wealth tend to increase their standard of living slowly and intentionally. By controlling lifestyle growth while income rises, they create a widening gap that fuels long-term financial progress.",
      },

      {
        type: "callout",
        tone: "tip",
        title: "Habit tip",
        text: "Automate savings immediately after payday.",
      },

      { type: "h2", text: "Tracking Money Keeps Financial Progress on Course" },
      {
        type: "p",
        text: "Regularly tracking income, expenses, and savings is a habit shared by most wealth builders. This does not require complex systems or daily monitoring. Even a simple monthly review can reveal patterns and highlight areas for improvement. Tracking money increases accountability and helps catch small issues before they become long-term problems.",
      },

      { type: "ad", label: "Ad Slot (Before conclusion)" },

      { type: "h2", text: "Consistent Saving Builds Financial Momentum" },
      {
        type: "p",
        text: "Saving money consistently is a foundational habit for wealth creation. Waiting to save whatever is left at the end of the month often results in inconsistent progress. Wealth builders prioritize saving and treat it as a non-negotiable expense. Even small amounts saved regularly create momentum and reinforce disciplined behavior.",
      },

      { type: "h2", text: "Automating Savings Removes Willpower from the Equation" },
      {
        type: "p",
        text: "Automation is one of the most effective tools for building saving habits. When savings are automated, money is set aside before it can be spent. This removes emotional decision-making and ensures consistency. Over time, automated savings grow quietly and steadily, making wealth building feel effortless rather than forced.",
      },

      { type: "h2", text: "Emergency Funds Protect Wealth from Setbacks" },
      {
        type: "p",
        text: "An emergency fund is a habit that protects progress rather than directly growing wealth. Unexpected expenses are inevitable, and without emergency savings, people often rely on high-interest debt or sell investments at the wrong time. Maintaining an emergency fund provides stability and allows long-term plans to continue uninterrupted during difficult periods.",
      },


      { type: "h2", text: "Automating Savings Removes Willpower from the Equation" },
      {
        type: "p",
        text: "Automation is one of the most effective tools for building saving habits. When savings are automated, money is set aside before it can be spent. This removes emotional decision-making and ensures consistency. Over time, automated savings grow quietly and steadily, making wealth building feel effortless rather than forced.",
      },
    ],
    faqs: [
      {
        q: "Do small habits really make a difference?",
        a: "Yes. Small habits compound over time and create large financial results.",
      },
      {
        q: "Is income more important than habits?",
        a: "Income helps, but habits determine how much wealth you actually keep and grow.",
      },
      {
        q: "How long does it take to see results?",
        a: "Financial habits show results gradually, but consistency leads to meaningful progress within years.",
      },
    ],
  },
];

export const site = {
  name: "WealthFlow",
  adsenseEnabled: false,
  adsenseClient: "ca-pub-xxxxxxxxxxxx",
  domain: "https://wealthflow.com",
  tagline: "Smarter money decisions, made simple.",
  description:
    "Finance guides, calculators, and practical insights to help you save smarter, invest better, and plan long-term.",
  language: "en",
  ogImage: "/images/og-default.png",
  nav: [
    { label: "Calculators", href: "/calculators" },
    { label: "Guides", href: "/guides" },
    { label: "Topics", href: "/topics" },
    { label: "Blog", href: "/blog" },
    { label: "Search", href: "/search" },
  ],
} as const;

export const site = {
  name: "WealthFlow",
  adsenseEnabled: false, // ✅ correct (hide all ads)
  adsenseClient: "ca-pub-xxxxxxxxxxxx", // ✅ safe placeholder
  domain: "https://example.com", // ⚠️ change before production
  tagline: "Smarter money decisions, made simple.",
  description:
    "Finance guides, calculators, and practical insights to help you save smarter, invest better, and plan long-term.",
  language: "en",
  nav: [
    { label: "Calculators", href: "/calculators" },
    { label: "Guides", href: "/guides" },
    { label: "Topics", href: "/topics" },
    { label: "Blog", href: "/blog" },
    { label: "Search", href: "/search" },
  ],
} as const;

export const siteContent = {
  brand: {
    name: "aany",
    positioning: "Smart services from talented people",
    shortDescription:
      "Aany helps people discover real services at smarter prices from talented students and trusted providers.",
  },

  navigation: {
    main: [
      { label: "Home", href: "/" },
      { label: "Customers", href: "/customers" },
      { label: "Providers", href: "/providers" },
      { label: "About", href: "/about" },
      { label: "Support", href: "/support" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Provider Terms", href: "/legal/provider-terms" },
      { label: "Community Guidelines", href: "/legal/community-guidelines" },
      { label: "Verification Policy", href: "/legal/verification-policy" },
      { label: "Reports and Disputes", href: "/legal/reports-and-disputes" },
      { label: "Future Payments", href: "/legal/future-payments" },
      { label: "Account Deletion", href: "/account-deletion" },
    ],
    searchQuickLinks: [
      { label: "Support center", href: "/support" },
      { label: "Customers", href: "/customers" },
      { label: "Providers", href: "/providers" },
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Community Guidelines", href: "/legal/community-guidelines" },
      { label: "Reports and Disputes", href: "/legal/reports-and-disputes" },
      { label: "Verification Policy", href: "/legal/verification-policy" },
      { label: "Account deletion", href: "/account-deletion" },
    ],
  },

  home: {
    eyebrow: "Smart local services",
    title: "Real services at smarter prices.",
    body:
      "Aany helps people find practical services from talented students and trusted providers, with a clear marketplace experience built around value, trust, and support.",
  },

  customers: {
    eyebrow: "For customers",
    title: "Find useful services with more confidence.",
    body:
      "Aany helps customers discover real services from talented students and trusted providers without making the experience feel complicated.",
  },

  providers: {
    eyebrow: "For providers",
    title: "Turn your skills into real service opportunities.",
    body:
      "Aany gives talented student providers more visibility while keeping the marketplace open to trusted providers who meet clear service expectations.",
  },

  about: {
    eyebrow: "About Aany",
    title: "A smarter way to discover services from talented people.",
    body:
      "Aany is student-first by design, but customer-value first in experience: useful services, smarter prices, talented people, and trusted participation.",
  },

  support: {
    eyebrow: "aany Support",
    title: "Need help? Start here.",
    body:
      "Find help for your account, service requests, provider questions, reports, privacy, and account deletion.",
  },
} as const;
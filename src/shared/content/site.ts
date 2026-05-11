export const siteContent = {
  brand: {
    name: "aany",
    positioning: "Student-first services marketplace",
    shortDescription:
      "aany helps customers discover useful services from students and trusted providers.",
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
      { label: "Account Deletion", href: "/account-deletion" },
    ],
    searchQuickLinks: [
      { label: "Support center", href: "/support" },
      { label: "Customers", href: "/customers" },
      { label: "Providers", href: "/providers" },
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Account deletion", href: "/account-deletion" },
    ],
  },

  home: {
    eyebrow: "Student-first services marketplace",
    title: "Services from students, powered by trust.",
    body:
      "aany helps customers discover useful services while giving students and trusted providers a clearer way to offer their skills.",
  },

  customers: {
    eyebrow: "For customers",
    title: "Find services from students and trusted providers.",
    body:
      "aany is designed to help customers discover useful services, compare options, and request help through a clean marketplace experience.",
  },

  providers: {
    eyebrow: "For providers",
    title: "Offer your skills in a trusted marketplace.",
    body:
      "aany is built to highlight student providers first, while keeping the marketplace open to trusted non-student providers as well.",
  },

  about: {
    eyebrow: "About aany",
    title: "A marketplace built to support student opportunity.",
    body:
      "aany is being built as a student-first services marketplace: a platform that helps customers discover useful services while giving students and trusted providers a clearer path to offer their skills.",
  },

  support: {
    eyebrow: "aany Support",
    title: "Need help? Start here.",
    body:
      "Find support for accounts, providers, service requests, reports, privacy, and account deletion.",
  },
} as const;
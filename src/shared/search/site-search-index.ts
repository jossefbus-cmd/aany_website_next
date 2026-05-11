export type SiteSearchItem = {
  label: string;
  href: string;
  description: string;
  keywords: ReadonlyArray<string>;
};

export const siteSearchIndex: ReadonlyArray<SiteSearchItem> = [
  {
    label: "Find services",
    href: "/customers",
    description:
      "Discover practical services from talented students and trusted providers.",
    keywords: [
      "find",
      "service",
      "services",
      "customer",
      "customers",
      "help",
      "local",
      "need",
      "request",
    ],
  },
  {
    label: "Offer a service",
    href: "/providers",
    description:
      "Turn what you can do into a service people can find.",
    keywords: [
      "offer",
      "provider",
      "providers",
      "skill",
      "skills",
      "work",
      "earn",
      "service",
      "services",
      "task",
      "tasks",
    ],
  },
  {
    label: "Teach or tutor",
    href: "/providers",
    description:
      "Offer tutoring, language help, study support, coaching, or lessons as a service.",
    keywords: [
      "teach",
      "teacher",
      "tutor",
      "tutoring",
      "lesson",
      "lessons",
      "study",
      "student",
      "language",
      "english",
      "thai",
      "japanese",
      "coach",
      "coaching",
    ],
  },
  {
    label: "Cleaning and organizing",
    href: "/providers",
    description:
      "Offer everyday help such as cleaning, organizing, moving help, or home tasks.",
    keywords: [
      "clean",
      "cleaning",
      "organize",
      "organizing",
      "home",
      "house",
      "room",
      "move",
      "moving",
      "errand",
      "errands",
      "task",
      "tasks",
    ],
  },
  {
    label: "Repairs and setup",
    href: "/providers",
    description:
      "Offer practical help with setup, basic repair, installation, or hands-on tasks.",
    keywords: [
      "repair",
      "repairs",
      "fix",
      "setup",
      "install",
      "installation",
      "tech",
      "phone",
      "computer",
      "wifi",
      "device",
      "hands-on",
    ],
  },
  {
    label: "Creative work",
    href: "/providers",
    description:
      "Offer design, photography, video, writing, translation, or creative services.",
    keywords: [
      "design",
      "designer",
      "photo",
      "photography",
      "video",
      "edit",
      "editing",
      "write",
      "writing",
      "translate",
      "translation",
      "creative",
      "content",
    ],
  },
  {
    label: "Personal help and errands",
    href: "/providers",
    description:
      "Offer flexible everyday help for people who need support with simple tasks.",
    keywords: [
      "help",
      "assistant",
      "assist",
      "errand",
      "errands",
      "personal",
      "delivery",
      "buy",
      "pickup",
      "queue",
      "support",
    ],
  },
  {
    label: "Support center",
    href: "/support",
    description:
      "Get help with accounts, providers, reports, privacy, and service questions.",
    keywords: [
      "support",
      "help",
      "report",
      "reports",
      "dispute",
      "disputes",
      "issue",
      "problem",
      "account",
    ],
  },
  {
    label: "Privacy Policy",
    href: "/legal/privacy",
    description:
      "Learn how Aany handles personal information.",
    keywords: ["privacy", "data", "personal", "information", "policy"],
  },
  {
    label: "Account Deletion",
    href: "/account-deletion",
    description:
      "Request account deletion and related privacy support.",
    keywords: ["delete", "deletion", "account", "remove", "privacy", "data"],
  },
  {
    label: "Provider Terms",
    href: "/legal/provider-terms",
    description:
      "Read expectations for providers who offer services through Aany.",
    keywords: ["provider", "terms", "rules", "service", "services"],
  },
  {
    label: "Community Guidelines",
    href: "/legal/community-guidelines",
    description:
      "Read behavior expectations for customers, providers, and visitors.",
    keywords: ["community", "guidelines", "rules", "behavior", "safety"],
  },
  {
    label: "Verification Policy",
    href: "/legal/verification-policy",
    description:
      "Learn how verification may support trust and marketplace quality.",
    keywords: ["verification", "verify", "identity", "student", "provider"],
  },
  {
    label: "Reports and Disputes",
    href: "/legal/reports-and-disputes",
    description:
      "Learn how reports, service issues, and disputes may be reviewed.",
    keywords: ["reports", "report", "disputes", "dispute", "issue", "safety"],
  },
  {
    label: "Future Payments",
    href: "/legal/future-payments",
    description:
      "Read how future payment, fee, wallet, or payout features may require additional terms.",
    keywords: [
      "payment",
      "payments",
      "fee",
      "fees",
      "commission",
      "wallet",
      "payout",
      "future",
    ],
  },
] as const;
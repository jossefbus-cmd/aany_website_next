import { getDictionary } from "@/shared/i18n/get-dictionary";
import type { Locale } from "@/shared/i18n/locales";

export type SiteSearchItem = {
  label: string;
  href: string;
  description: string;
  keywords: ReadonlyArray<string>;
};

type Dictionary = ReturnType<typeof getDictionary>;

type SearchRoute = {
  href: string;
  label: (dictionary: Dictionary) => string;
  description: (dictionary: Dictionary) => string;
  source: (dictionary: Dictionary) => unknown;
  aliases?: Partial<Record<Locale, ReadonlyArray<string>>>;
};

export const searchUi = {
  en: {
    placeholder: "Search aany",
    close: "Close",
    quickLinks: "Quick links",
    results: "Search results",
    noResults: "No results found.",
  },
  th: {
    placeholder: "ค้นหาใน Aany",
    close: "ปิด",
    quickLinks: "ลิงก์ด่วน",
    results: "ผลการค้นหา",
    noResults: "ไม่พบผลลัพธ์",
  },
} as const;

const searchRoutes: ReadonlyArray<SearchRoute> = [
  {
    href: "/",
    label: (dictionary) => dictionary.home.hero.title,
    description: (dictionary) => dictionary.home.hero.body,
    source: (dictionary) => dictionary.home,
    aliases: {
      en: ["home", "aany", "marketplace", "local services", "student services"],
      th: ["หน้าแรก", "aany", "บริการ", "ตลาดบริการ", "บริการท้องถิ่น"],
    },
  },
  {
    href: "/customers",
    label: (dictionary) => dictionary.customers.hero.title,
    description: (dictionary) => dictionary.customers.hero.body,
    source: (dictionary) => dictionary.customers,
    aliases: {
      en: ["customers", "find services", "request service", "book service"],
      th: ["ลูกค้า", "ค้นหาบริการ", "ขอบริการ", "บริการ"],
    },
  },
  {
    href: "/providers",
    label: (dictionary) => dictionary.providers.hero.title,
    description: (dictionary) => dictionary.providers.hero.body,
    source: (dictionary) => dictionary.providers,
    aliases: {
      en: [
        "providers",
        "offer service",
        "sell service",
        "skills",
        "teach",
        "cleaning",
        "repair",
        "design",
        "creative",
      ],
      th: [
        "ผู้ให้บริการ",
        "ลงบริการ",
        "ทักษะ",
        "สอน",
        "ติว",
        "ทำความสะอาด",
        "ซ่อม",
        "ออกแบบ",
      ],
    },
  },
  {
    href: "/about",
    label: (dictionary) => dictionary.about.hero.title,
    description: (dictionary) => dictionary.about.hero.body,
    source: (dictionary) => dictionary.about,
    aliases: {
      en: ["about", "company", "mission", "student-first", "aany"],
      th: ["เกี่ยวกับ", "บริษัท", "ทิศทาง", "นักศึกษา", "aany"],
    },
  },
  {
    href: "/support",
    label: (dictionary) => dictionary.support.hero.title,
    description: (dictionary) => dictionary.support.hero.body,
    source: (dictionary) => dictionary.support,
    aliases: {
      en: ["support", "help", "contact", "issue", "problem", "report"],
      th: ["ช่วยเหลือ", "ศูนย์ช่วยเหลือ", "ติดต่อ", "ปัญหา", "รายงาน"],
    },
  },
  {
    href: "/account-deletion",
    label: (dictionary) => dictionary.accountDeletion.hero.title,
    description: (dictionary) => dictionary.accountDeletion.hero.body,
    source: (dictionary) => dictionary.accountDeletion,
    aliases: {
      en: [
        "account deletion",
        "delete account",
        "remove account",
        "close account",
        "delete data",
      ],
      th: ["การลบบัญชี", "ลบบัญชี", "ลบข้อมูล", "บัญชี", "ปิดบัญชี"],
    },
  },
  {
    href: "/legal/privacy",
    label: (dictionary) => dictionary.legal.privacy.title,
    description: (dictionary) => dictionary.legal.privacy.body,
    source: (dictionary) => dictionary.legal.privacy,
    aliases: {
      en: ["privacy", "privacy policy", "data", "personal information"],
      th: ["ความเป็นส่วนตัว", "นโยบายความเป็นส่วนตัว", "ข้อมูล", "ข้อมูลส่วนบุคคล"],
    },
  },
  {
    href: "/legal/terms",
    label: (dictionary) => dictionary.legal.terms.title,
    description: (dictionary) => dictionary.legal.terms.body,
    source: (dictionary) => dictionary.legal.terms,
    aliases: {
      en: ["terms", "terms of service", "rules", "agreement", "legal"],
      th: ["เงื่อนไข", "เงื่อนไขการใช้บริการ", "ข้อกำหนด", "กฎหมาย"],
    },
  },
  {
    href: "/legal/provider-terms",
    label: (dictionary) => dictionary.legal.providerTerms.title,
    description: (dictionary) => dictionary.legal.providerTerms.body,
    source: (dictionary) => dictionary.legal.providerTerms,
    aliases: {
      en: ["provider terms", "provider rules", "provider agreement"],
      th: ["เงื่อนไขผู้ให้บริการ", "กฎผู้ให้บริการ", "ผู้ให้บริการ"],
    },
  },
  {
    href: "/legal/community-guidelines",
    label: (dictionary) => dictionary.legal.communityGuidelines.title,
    description: (dictionary) => dictionary.legal.communityGuidelines.body,
    source: (dictionary) => dictionary.legal.communityGuidelines,
    aliases: {
      en: ["community guidelines", "community", "behavior", "safety", "rules"],
      th: ["แนวทางชุมชน", "ชุมชน", "พฤติกรรม", "ความปลอดภัย", "กฎ"],
    },
  },
  {
    href: "/legal/verification-policy",
    label: (dictionary) => dictionary.legal.verificationPolicy.title,
    description: (dictionary) => dictionary.legal.verificationPolicy.body,
    source: (dictionary) => dictionary.legal.verificationPolicy,
    aliases: {
      en: ["verification", "verify", "identity", "student verification", "trust"],
      th: ["ยืนยัน", "ยืนยันตัวตน", "ตรวจสอบ", "นักศึกษา", "ความน่าเชื่อถือ"],
    },
  },
  {
    href: "/legal/reports-and-disputes",
    label: (dictionary) => dictionary.legal.reportsAndDisputes.title,
    description: (dictionary) => dictionary.legal.reportsAndDisputes.body,
    source: (dictionary) => dictionary.legal.reportsAndDisputes,
    aliases: {
      en: ["reports", "report", "disputes", "dispute", "issue", "complaint"],
      th: ["รายงาน", "ข้อพิพาท", "ปัญหา", "ร้องเรียน", "ตรวจสอบ"],
    },
  },
  {
    href: "/legal/future-payments",
    label: (dictionary) => dictionary.legal.futurePayments.title,
    description: (dictionary) => dictionary.legal.futurePayments.body,
    source: (dictionary) => dictionary.legal.futurePayments,
    aliases: {
      en: ["payments", "payment", "fees", "commission", "wallet", "payout"],
      th: ["ชำระเงิน", "การชำระเงิน", "ค่าธรรมเนียม", "คอมมิชชัน", "กระเป๋าเงิน"],
    },
  },
];

function collectStrings(value: unknown): string[] {
  if (typeof value === "string") {
    return [value];
  }

  if (Array.isArray(value)) {
    return value.flatMap((item) => collectStrings(item));
  }

  if (value && typeof value === "object") {
    return Object.values(value).flatMap((item) => collectStrings(item));
  }

  return [];
}

function normalizeText(value: string) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .replace(/\s+/g, " ");
}

function tokenizeText(value: string) {
  return normalizeText(value)
    .split(/[\s-]+/)
    .map((token) => token.trim())
    .filter((token) => token.length >= 2);
}

function getPhrasesFromText(value: string) {
  const normalized = normalizeText(value);

  if (!normalized) {
    return [];
  }

  const words = tokenizeText(normalized);
  const phrases: string[] = [normalized];

  for (let index = 0; index < words.length - 1; index += 1) {
    phrases.push(`${words[index]} ${words[index + 1]}`);
  }

  return phrases;
}

function unique(values: ReadonlyArray<string>) {
  const seen = new Set<string>();
  const result: string[] = [];

  for (const value of values) {
    const normalized = normalizeText(value);

    if (!normalized || seen.has(normalized)) {
      continue;
    }

    seen.add(normalized);
    result.push(normalized);
  }

  return result;
}

function buildKeywords({
  locale,
  route,
  dictionary,
}: {
  locale: Locale;
  route: SearchRoute;
  dictionary: Dictionary;
}) {
  const strings = collectStrings(route.source(dictionary));

  const generatedKeywords = strings.flatMap((text) => [
    ...tokenizeText(text),
    ...getPhrasesFromText(text),
  ]);

  const aliases = route.aliases?.[locale] ?? [];

  return unique([...aliases, ...generatedKeywords]);
}

export function getSearchUi(locale: Locale) {
  return searchUi[locale];
}

export function getSiteSearchIndex(
  locale: Locale,
): ReadonlyArray<SiteSearchItem> {
  const dictionary = getDictionary(locale);

  return searchRoutes.map((route) => ({
    label: route.label(dictionary),
    href: route.href,
    description: route.description(dictionary),
    keywords: buildKeywords({
      locale,
      route,
      dictionary,
    }),
  }));
}
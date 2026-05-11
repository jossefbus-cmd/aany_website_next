import type { Locale } from "@/shared/i18n/locales";

export type SiteSearchItem = {
  label: string;
  href: string;
  description: string;
  keywords: ReadonlyArray<string>;
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

const enSearchIndex: ReadonlyArray<SiteSearchItem> = [
  {
    label: "Find services",
    href: "/customers",
    description:
      "Discover practical services from talented students and trusted providers.",
    keywords: ["find", "service", "services", "customer", "help", "local"],
  },
  {
    label: "Offer a service",
    href: "/providers",
    description: "Turn what you can do into a service people can find.",
    keywords: ["offer", "provider", "skill", "skills", "work", "tasks"],
  },
  {
    label: "Teach or tutor",
    href: "/providers",
    description:
      "Offer tutoring, language help, study support, coaching, or lessons as a service.",
    keywords: ["teach", "teacher", "tutor", "lesson", "study", "language"],
  },
  {
    label: "Cleaning and organizing",
    href: "/providers",
    description:
      "Offer everyday help such as cleaning, organizing, moving help, or home tasks.",
    keywords: ["clean", "cleaning", "organize", "home", "house", "tasks"],
  },
  {
    label: "Repairs and setup",
    href: "/providers",
    description:
      "Offer practical help with setup, basic repair, installation, or hands-on tasks.",
    keywords: ["repair", "fix", "setup", "install", "tech", "device"],
  },
  {
    label: "Creative work",
    href: "/providers",
    description:
      "Offer design, photography, video, writing, translation, or creative services.",
    keywords: ["design", "photo", "video", "write", "translate", "creative"],
  },
  {
    label: "Support center",
    href: "/support",
    description:
      "Get help with accounts, providers, reports, privacy, and service questions.",
    keywords: ["support", "help", "report", "dispute", "issue", "account"],
  },
];

const thSearchIndex: ReadonlyArray<SiteSearchItem> = [
  {
    label: "ค้นหาบริการ",
    href: "/customers",
    description:
      "ค้นหาบริการที่ใช้งานได้จริงจากนักศึกษาที่มีความสามารถและผู้ให้บริการที่น่าเชื่อถือ",
    keywords: ["ค้นหา", "บริการ", "ลูกค้า", "ช่วยเหลือ", "local", "service"],
  },
  {
    label: "ลงบริการ",
    href: "/providers",
    description:
      "เปลี่ยนสิ่งที่คุณทำได้ ให้เป็นบริการที่คนค้นหาเจอ",
    keywords: ["ลงบริการ", "ผู้ให้บริการ", "ทักษะ", "งาน", "skill", "offer"],
  },
  {
    label: "สอนหรือติว",
    href: "/providers",
    description:
      "เสนอการติว ภาษา การสอน การโค้ช หรือบทเรียนเป็นบริการ",
    keywords: ["สอน", "ติว", "ภาษา", "เรียน", "teach", "tutor", "lesson"],
  },
  {
    label: "ทำความสะอาดและจัดระเบียบ",
    href: "/providers",
    description:
      "เสนองานช่วยเหลือทั่วไป เช่น ทำความสะอาด จัดระเบียบ หรือช่วยงานบ้าน",
    keywords: ["ทำความสะอาด", "จัดระเบียบ", "บ้าน", "clean", "cleaning"],
  },
  {
    label: "ซ่อมแซมและตั้งค่า",
    href: "/providers",
    description:
      "เสนอความช่วยเหลือด้านการตั้งค่า ซ่อมแซมเบื้องต้น หรืองานที่ต้องลงมือทำ",
    keywords: ["ซ่อม", "ตั้งค่า", "ติดตั้ง", "repair", "setup", "install"],
  },
  {
    label: "งานสร้างสรรค์",
    href: "/providers",
    description:
      "เสนองานออกแบบ ถ่ายภาพ วิดีโอ เขียน แปลภาษา หรืองานสร้างสรรค์",
    keywords: ["ออกแบบ", "ถ่ายภาพ", "วิดีโอ", "แปล", "design", "photo"],
  },
  {
    label: "ศูนย์ช่วยเหลือ",
    href: "/support",
    description:
      "รับความช่วยเหลือเกี่ยวกับบัญชี ผู้ให้บริการ รายงาน ความเป็นส่วนตัว และบริการ",
    keywords: ["ช่วยเหลือ", "รายงาน", "ปัญหา", "บัญชี", "support", "help"],
  },
];

export function getSearchUi(locale: Locale) {
  return searchUi[locale];
}

export function getSiteSearchIndex(
  locale: Locale,
): ReadonlyArray<SiteSearchItem> {
  return locale === "th" ? thSearchIndex : enSearchIndex;
}
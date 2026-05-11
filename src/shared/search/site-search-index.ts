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
    label: "Home",
    href: "/",
    description: "Smart local services from talented people.",
    keywords: ["home", "aany", "services", "marketplace", "local", "student"],
  },
  {
    label: "Find services",
    href: "/customers",
    description:
      "Discover practical services from talented students and trusted providers.",
    keywords: ["find", "service", "services", "customer", "customers", "help", "local", "request"],
  },
  {
    label: "Offer a service",
    href: "/providers",
    description: "Turn what you can do into a service people can find.",
    keywords: ["offer", "provider", "providers", "skill", "skills", "work", "earn", "task", "tasks"],
  },
  {
    label: "Teach or tutor",
    href: "/providers",
    description:
      "Offer tutoring, language help, study support, coaching, or lessons as a service.",
    keywords: ["teach", "teacher", "tutor", "tutoring", "lesson", "study", "language"],
  },
  {
    label: "Cleaning and organizing",
    href: "/providers",
    description:
      "Offer everyday help such as cleaning, organizing, moving help, or home tasks.",
    keywords: ["clean", "cleaning", "organize", "organizing", "home", "house", "room", "task"],
  },
  {
    label: "Repairs and setup",
    href: "/providers",
    description:
      "Offer practical help with setup, basic repair, installation, or hands-on tasks.",
    keywords: ["repair", "repairs", "fix", "setup", "install", "installation", "tech", "device"],
  },
  {
    label: "Creative work",
    href: "/providers",
    description:
      "Offer design, photography, video, writing, translation, or creative services.",
    keywords: ["design", "photo", "photography", "video", "writing", "translate", "translation", "creative"],
  },
  {
    label: "About Aany",
    href: "/about",
    description: "Learn about Aany and the marketplace direction.",
    keywords: ["about", "company", "aany", "student-first", "mission", "direction"],
  },
  {
    label: "Support center",
    href: "/support",
    description:
      "Get help with accounts, providers, reports, privacy, and service questions.",
    keywords: ["support", "help", "report", "reports", "dispute", "issue", "problem", "account"],
  },
  {
    label: "Account Deletion",
    href: "/account-deletion",
    description: "Request account deletion and related privacy support.",
    keywords: [
      "account deletion",
      "delete account",
      "delete",
      "deletion",
      "account",
      "remove account",
      "privacy",
      "data",
      "close account",
    ],
  },
  {
    label: "Privacy Policy",
    href: "/legal/privacy",
    description: "Learn how Aany handles personal information.",
    keywords: ["privacy", "data", "personal", "information", "policy"],
  },
  {
    label: "Terms of Service",
    href: "/legal/terms",
    description: "Read the basic terms for using Aany.",
    keywords: ["terms", "terms of service", "rules", "legal", "agreement"],
  },
  {
    label: "Provider Terms",
    href: "/legal/provider-terms",
    description:
      "Read expectations for providers who offer services through Aany.",
    keywords: ["provider terms", "provider", "terms", "rules", "services"],
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
    keywords: ["payment", "payments", "fee", "fees", "commission", "wallet", "payout", "future"],
  },
];

const thSearchIndex: ReadonlyArray<SiteSearchItem> = [
  {
    label: "หน้าแรก",
    href: "/",
    description: "บริการท้องถิ่นที่คุ้มค่าจากคนที่มีความสามารถ",
    keywords: ["หน้าแรก", "aany", "บริการ", "ตลาดบริการ", "ท้องถิ่น"],
  },
  {
    label: "ค้นหาบริการ",
    href: "/customers",
    description:
      "ค้นหาบริการที่ใช้งานได้จริงจากนักศึกษาที่มีความสามารถและผู้ให้บริการที่น่าเชื่อถือ",
    keywords: ["ค้นหา", "บริการ", "ลูกค้า", "ช่วยเหลือ", "service", "customer"],
  },
  {
    label: "ลงบริการ",
    href: "/providers",
    description:
      "เปลี่ยนสิ่งที่คุณทำได้ ให้เป็นบริการที่คนค้นหาเจอ",
    keywords: ["ลงบริการ", "ผู้ให้บริการ", "ทักษะ", "งาน", "provider", "skill", "offer"],
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
    label: "เกี่ยวกับ Aany",
    href: "/about",
    description: "เรียนรู้เกี่ยวกับ Aany และทิศทางของตลาดบริการ",
    keywords: ["เกี่ยวกับ", "บริษัท", "aany", "นักศึกษา", "ทิศทาง"],
  },
  {
    label: "ศูนย์ช่วยเหลือ",
    href: "/support",
    description:
      "รับความช่วยเหลือเกี่ยวกับบัญชี ผู้ให้บริการ รายงาน ความเป็นส่วนตัว และบริการ",
    keywords: ["ช่วยเหลือ", "รายงาน", "ปัญหา", "บัญชี", "support", "help"],
  },
  {
    label: "การลบบัญชี",
    href: "/account-deletion",
    description:
      "ขอลบบัญชีและรับความช่วยเหลือด้านความเป็นส่วนตัวที่เกี่ยวข้อง",
    keywords: [
      "การลบบัญชี",
      "ลบบัญชี",
      "ลบ",
      "บัญชี",
      "ข้อมูล",
      "ความเป็นส่วนตัว",
      "delete account",
      "account deletion",
    ],
  },
  {
    label: "นโยบายความเป็นส่วนตัว",
    href: "/legal/privacy",
    description: "เรียนรู้ว่า Aany จัดการข้อมูลส่วนบุคคลอย่างไร",
    keywords: ["ความเป็นส่วนตัว", "ข้อมูล", "นโยบาย", "privacy", "data"],
  },
  {
    label: "เงื่อนไขการใช้บริการ",
    href: "/legal/terms",
    description: "อ่านเงื่อนไขพื้นฐานในการใช้งาน Aany",
    keywords: ["เงื่อนไข", "ข้อกำหนด", "กฎหมาย", "terms"],
  },
  {
    label: "เงื่อนไขผู้ให้บริการ",
    href: "/legal/provider-terms",
    description: "อ่านความคาดหวังสำหรับผู้ให้บริการบน Aany",
    keywords: ["ผู้ให้บริการ", "เงื่อนไขผู้ให้บริการ", "provider terms"],
  },
  {
    label: "แนวทางชุมชน",
    href: "/legal/community-guidelines",
    description: "อ่านแนวทางพฤติกรรมสำหรับลูกค้า ผู้ให้บริการ และผู้เยี่ยมชม",
    keywords: ["แนวทาง", "ชุมชน", "ความปลอดภัย", "community"],
  },
  {
    label: "นโยบายการยืนยันตัวตน",
    href: "/legal/verification-policy",
    description: "เรียนรู้ว่าการยืนยันข้อมูลช่วยสร้างความน่าเชื่อถืออย่างไร",
    keywords: ["ยืนยัน", "ยืนยันตัวตน", "ตรวจสอบ", "verification"],
  },
  {
    label: "รายงานและข้อพิพาท",
    href: "/legal/reports-and-disputes",
    description: "เรียนรู้ว่ารายงาน ปัญหาบริการ และข้อพิพาทอาจถูกตรวจสอบอย่างไร",
    keywords: ["รายงาน", "ข้อพิพาท", "ปัญหา", "report", "dispute"],
  },
  {
    label: "การชำระเงินในอนาคต",
    href: "/legal/future-payments",
    description: "อ่านข้อมูลเกี่ยวกับการชำระเงิน ค่าธรรมเนียม และกระเป๋าเงินในอนาคต",
    keywords: ["ชำระเงิน", "ค่าธรรมเนียม", "กระเป๋าเงิน", "payment", "wallet"],
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
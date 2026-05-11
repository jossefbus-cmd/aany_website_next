import type { Locale } from "./locales";

export const footerDictionary = {
  en: {
    description:
      "Aany is a smart local services marketplace operated by Al Aziz Co., Ltd. The platform helps people discover real services from talented students and trusted providers.",
    copyright: "© 2026 Al Aziz Co., Ltd. All rights reserved.",
    columns: [
      {
        title: "Explore",
        links: [
          { label: "Home", href: "/" },
          { label: "Customers", href: "/customers" },
          { label: "Providers", href: "/providers" },
          { label: "About aany", href: "/about" },
        ],
      },
      {
        title: "Marketplace",
        links: [
          { label: "Smart local services", href: "/" },
          { label: "For customers", href: "/customers" },
          { label: "For providers", href: "/providers" },
          { label: "Support center", href: "/support" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Support center", href: "/support" },
          { label: "Account help", href: "/support" },
          {
            label: "Reports and Disputes",
            href: "/legal/reports-and-disputes",
          },
          { label: "Account deletion", href: "/account-deletion" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", href: "/legal/privacy" },
          { label: "Terms of Service", href: "/legal/terms" },
          { label: "Provider Terms", href: "/legal/provider-terms" },
          {
            label: "Community Guidelines",
            href: "/legal/community-guidelines",
          },
          { label: "Verification Policy", href: "/legal/verification-policy" },
          { label: "Future Payments", href: "/legal/future-payments" },
        ],
      },
    ],
    inlineLinks: [
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Terms", href: "/legal/terms" },
      { label: "Provider Terms", href: "/legal/provider-terms" },
      { label: "Support", href: "/support" },
      { label: "Account Deletion", href: "/account-deletion" },
    ],
  },

  th: {
    description:
      "Aany เป็นตลาดบริการท้องถิ่นที่ดำเนินการโดย Al Aziz Co., Ltd. แพลตฟอร์มนี้ช่วยให้ผู้คนค้นพบบริการจริงจากนักศึกษาที่มีความสามารถและผู้ให้บริการที่น่าเชื่อถือ",
    copyright: "© 2026 Al Aziz Co., Ltd. สงวนลิขสิทธิ์",
    columns: [
      {
        title: "สำรวจ",
        links: [
          { label: "หน้าแรก", href: "/" },
          { label: "ลูกค้า", href: "/customers" },
          { label: "ผู้ให้บริการ", href: "/providers" },
          { label: "เกี่ยวกับ Aany", href: "/about" },
        ],
      },
      {
        title: "ตลาดบริการ",
        links: [
          { label: "บริการท้องถิ่นที่คุ้มค่า", href: "/" },
          { label: "สำหรับลูกค้า", href: "/customers" },
          { label: "สำหรับผู้ให้บริการ", href: "/providers" },
          { label: "ศูนย์ช่วยเหลือ", href: "/support" },
        ],
      },
      {
        title: "ช่วยเหลือ",
        links: [
          { label: "ศูนย์ช่วยเหลือ", href: "/support" },
          { label: "ช่วยเหลือเรื่องบัญชี", href: "/support" },
          {
            label: "รายงานและข้อพิพาท",
            href: "/legal/reports-and-disputes",
          },
          { label: "การลบบัญชี", href: "/account-deletion" },
        ],
      },
      {
        title: "กฎหมาย",
        links: [
          { label: "นโยบายความเป็นส่วนตัว", href: "/legal/privacy" },
          { label: "เงื่อนไขการใช้บริการ", href: "/legal/terms" },
          { label: "เงื่อนไขผู้ให้บริการ", href: "/legal/provider-terms" },
          {
            label: "แนวทางชุมชน",
            href: "/legal/community-guidelines",
          },
          {
            label: "นโยบายการยืนยันตัวตน",
            href: "/legal/verification-policy",
          },
          { label: "การชำระเงินในอนาคต", href: "/legal/future-payments" },
        ],
      },
    ],
    inlineLinks: [
      { label: "ความเป็นส่วนตัว", href: "/legal/privacy" },
      { label: "เงื่อนไข", href: "/legal/terms" },
      { label: "เงื่อนไขผู้ให้บริการ", href: "/legal/provider-terms" },
      { label: "ช่วยเหลือ", href: "/support" },
      { label: "การลบบัญชี", href: "/account-deletion" },
    ],
  },
} as const;

export function getFooterDictionary(locale: Locale) {
  return footerDictionary[locale];
}
import type { Locale } from "./locales";

export type UiLink = {
  label: string;
  href: string;
};

export type UiMegaColumn = {
  title: string;
  links: ReadonlyArray<UiLink>;
  primary?: boolean;
};

export const uiDictionary = {
  en: {
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
    },

    megaMenu: {
      home: [
        {
          title: "Explore aany",
          primary: true,
          links: [
            { label: "Home", href: "/" },
            { label: "Customers", href: "/customers" },
            { label: "Providers", href: "/providers" },
            { label: "About aany", href: "/about" },
          ],
        },
        {
          title: "Support",
          links: [
            { label: "Support center", href: "/support" },
            { label: "Account deletion", href: "/account-deletion" },
          ],
        },
        {
          title: "Legal",
          links: [
            { label: "Privacy Policy", href: "/legal/privacy" },
            { label: "Terms of Service", href: "/legal/terms" },
            { label: "Provider Terms", href: "/legal/provider-terms" },
          ],
        },
      ],

      customers: [
        {
          title: "For customers",
          primary: true,
          links: [
            { label: "Discover services", href: "/customers" },
            { label: "How requests work", href: "/customers" },
            { label: "Support center", href: "/support" },
          ],
        },
        {
          title: "Helpful topics",
          links: [
            { label: "Smart local services", href: "/" },
            { label: "Privacy Policy", href: "/legal/privacy" },
            { label: "Account deletion", href: "/account-deletion" },
          ],
        },
        {
          title: "Explore",
          links: [
            { label: "Providers", href: "/providers" },
            { label: "Terms of Service", href: "/legal/terms" },
            { label: "Support", href: "/support" },
          ],
        },
      ],

      providers: [
        {
          title: "For providers",
          primary: true,
          links: [
            { label: "Provider basics", href: "/providers" },
            { label: "Create services", href: "/providers" },
            { label: "Build trust", href: "/providers" },
          ],
        },
        {
          title: "Provider rules",
          links: [
            { label: "Provider Terms", href: "/legal/provider-terms" },
            { label: "Verification Policy", href: "/legal/verification-policy" },
            { label: "Reports and Disputes", href: "/legal/reports-and-disputes" },
          ],
        },
        {
          title: "Marketplace",
          links: [
            { label: "Customers", href: "/customers" },
            { label: "About aany", href: "/about" },
            { label: "Support", href: "/support" },
          ],
        },
      ],

      about: [
        {
          title: "About aany",
          primary: true,
          links: [
            { label: "Our direction", href: "/about" },
            { label: "Customer value first", href: "/about" },
            { label: "Student-first by design", href: "/about" },
          ],
        },
        {
          title: "Explore",
          links: [
            { label: "Customers", href: "/customers" },
            { label: "Providers", href: "/providers" },
            { label: "Support", href: "/support" },
          ],
        },
        {
          title: "Legal",
          links: [
            { label: "Privacy Policy", href: "/legal/privacy" },
            { label: "Terms of Service", href: "/legal/terms" },
            { label: "Provider Terms", href: "/legal/provider-terms" },
          ],
        },
      ],

      support: [
        {
          title: "Explore Support",
          primary: true,
          links: [
            { label: "Support center", href: "/support" },
            { label: "Account help", href: "/support" },
            { label: "Reports and disputes", href: "/legal/reports-and-disputes" },
            { label: "Account deletion", href: "/account-deletion" },
          ],
        },
        {
          title: "Get help",
          links: [
            { label: "Privacy questions", href: "/legal/privacy" },
            { label: "Provider questions", href: "/providers" },
            { label: "Terms of Service", href: "/legal/terms" },
          ],
        },
        {
          title: "Helpful topics",
          links: [
            { label: "Customers", href: "/customers" },
            { label: "Providers", href: "/providers" },
            { label: "About aany", href: "/about" },
          ],
        },
      ],
    },
  },


  th: {
    navigation: {
      main: [
        { label: "หน้าแรก", href: "/" },
        { label: "ลูกค้า", href: "/customers" },
        { label: "ผู้ให้บริการ", href: "/providers" },
        { label: "เกี่ยวกับ", href: "/about" },
        { label: "ช่วยเหลือ", href: "/support" },
      ],
      legal: [
        { label: "นโยบายความเป็นส่วนตัว", href: "/legal/privacy" },
        { label: "เงื่อนไขการใช้บริการ", href: "/legal/terms" },
        { label: "เงื่อนไขผู้ให้บริการ", href: "/legal/provider-terms" },
        { label: "แนวทางชุมชน", href: "/legal/community-guidelines" },
        { label: "นโยบายการยืนยันตัวตน", href: "/legal/verification-policy" },
        { label: "รายงานและข้อพิพาท", href: "/legal/reports-and-disputes" },
        { label: "การชำระเงินในอนาคต", href: "/legal/future-payments" },
        { label: "การลบบัญชี", href: "/account-deletion" },
      ],
    },

    megaMenu: {
      home: [
        {
          title: "สำรวจ Aany",
          primary: true,
          links: [
            { label: "หน้าแรก", href: "/" },
            { label: "สำหรับลูกค้า", href: "/customers" },
            { label: "สำหรับผู้ให้บริการ", href: "/providers" },
            { label: "เกี่ยวกับ Aany", href: "/about" },
          ],
        },
        {
          title: "ช่วยเหลือ",
          links: [
            { label: "ศูนย์ช่วยเหลือ", href: "/support" },
            { label: "การลบบัญชี", href: "/account-deletion" },
          ],
        },
        {
          title: "กฎหมาย",
          links: [
            { label: "นโยบายความเป็นส่วนตัว", href: "/legal/privacy" },
            { label: "เงื่อนไขการใช้บริการ", href: "/legal/terms" },
            { label: "เงื่อนไขผู้ให้บริการ", href: "/legal/provider-terms" },
          ],
        },
      ],

      customers: [
        {
          title: "สำหรับลูกค้า",
          primary: true,
          links: [
            { label: "ค้นหาบริการ", href: "/customers" },
            { label: "วิธีขอบริการ", href: "/customers" },
            { label: "ศูนย์ช่วยเหลือ", href: "/support" },
          ],
        },
        {
          title: "หัวข้อที่เกี่ยวข้อง",
          links: [
            { label: "บริการท้องถิ่นที่คุ้มค่า", href: "/" },
            { label: "นโยบายความเป็นส่วนตัว", href: "/legal/privacy" },
            { label: "การลบบัญชี", href: "/account-deletion" },
          ],
        },
        {
          title: "สำรวจ",
          links: [
            { label: "ผู้ให้บริการ", href: "/providers" },
            { label: "เงื่อนไขการใช้บริการ", href: "/legal/terms" },
            { label: "ช่วยเหลือ", href: "/support" },
          ],
        },
      ],

      providers: [
        {
          title: "สำหรับผู้ให้บริการ",
          primary: true,
          links: [
            { label: "ข้อมูลผู้ให้บริการ", href: "/providers" },
            { label: "สร้างบริการ", href: "/providers" },
            { label: "สร้างความน่าเชื่อถือ", href: "/providers" },
          ],
        },
        {
          title: "กฎสำหรับผู้ให้บริการ",
          links: [
            { label: "เงื่อนไขผู้ให้บริการ", href: "/legal/provider-terms" },
            { label: "นโยบายการยืนยันตัวตน", href: "/legal/verification-policy" },
            { label: "รายงานและข้อพิพาท", href: "/legal/reports-and-disputes" },
          ],
        },
        {
          title: "ตลาดบริการ",
          links: [
            { label: "ลูกค้า", href: "/customers" },
            { label: "เกี่ยวกับ Aany", href: "/about" },
            { label: "ช่วยเหลือ", href: "/support" },
          ],
        },
      ],

      about: [
        {
          title: "เกี่ยวกับ Aany",
          primary: true,
          links: [
            { label: "ทิศทางของเรา", href: "/about" },
            { label: "คุณค่าของลูกค้ามาก่อน", href: "/about" },
            { label: "เน้นนักศึกษาโดยการออกแบบ", href: "/about" },
          ],
        },
        {
          title: "สำรวจ",
          links: [
            { label: "ลูกค้า", href: "/customers" },
            { label: "ผู้ให้บริการ", href: "/providers" },
            { label: "ช่วยเหลือ", href: "/support" },
          ],
        },
        {
          title: "กฎหมาย",
          links: [
            { label: "นโยบายความเป็นส่วนตัว", href: "/legal/privacy" },
            { label: "เงื่อนไขการใช้บริการ", href: "/legal/terms" },
            { label: "เงื่อนไขผู้ให้บริการ", href: "/legal/provider-terms" },
          ],
        },
      ],

      support: [
        {
          title: "ศูนย์ช่วยเหลือ",
          primary: true,
          links: [
            { label: "ศูนย์ช่วยเหลือ", href: "/support" },
            { label: "ช่วยเหลือเรื่องบัญชี", href: "/support" },
            { label: "รายงานและข้อพิพาท", href: "/legal/reports-and-disputes" },
            { label: "การลบบัญชี", href: "/account-deletion" },
          ],
        },
        {
          title: "ขอความช่วยเหลือ",
          links: [
            { label: "คำถามด้านความเป็นส่วนตัว", href: "/legal/privacy" },
            { label: "คำถามผู้ให้บริการ", href: "/providers" },
            { label: "เงื่อนไขการใช้บริการ", href: "/legal/terms" },
          ],
        },
        {
          title: "หัวข้อที่เกี่ยวข้อง",
          links: [
            { label: "ลูกค้า", href: "/customers" },
            { label: "ผู้ให้บริการ", href: "/providers" },
            { label: "เกี่ยวกับ Aany", href: "/about" },
          ],
        },
      ],
    },
  },
} as const;

export function getUiDictionary(locale: Locale) {
  return uiDictionary[locale];
}
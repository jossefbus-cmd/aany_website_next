import type { Metadata } from "next";

import { LegalPageShell } from "@/features/legal/components/legal-page-shell";
import { privacyContent } from "@/features/legal/privacy-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how aany expects to collect, use, protect, and manage personal data.",
};

export default function Page() {
  return (
    <LegalPageShell
      eyebrow={privacyContent.eyebrow}
      title={privacyContent.title}
      body={privacyContent.body}
      sections={privacyContent.sections}
    />
  );
}
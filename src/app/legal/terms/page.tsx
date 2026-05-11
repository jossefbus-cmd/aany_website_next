import type { Metadata } from "next";

import { LegalPageShell } from "@/features/legal/components/legal-page-shell";
import { termsContent } from "@/features/legal/terms-content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the expected terms for using aany as a customer, visitor, or general user.",
};

export default function Page() {
  return (
    <LegalPageShell
      eyebrow={termsContent.eyebrow}
      title={termsContent.title}
      body={termsContent.body}
      sections={termsContent.sections}
    />
  );
}
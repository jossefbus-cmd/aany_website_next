import type { Metadata } from "next";

import { LegalPageShell } from "@/features/legal/components/legal-page-shell";
import { providerTermsContent } from "@/features/legal/provider-terms-content";

export const metadata: Metadata = {
  title: "Provider Terms",
  description:
    "Read the expected terms for providers offering services through aany.",
};

export default function Page() {
  return (
    <LegalPageShell
      eyebrow={providerTermsContent.eyebrow}
      title={providerTermsContent.title}
      body={providerTermsContent.body}
      sections={providerTermsContent.sections}
    />
  );
}
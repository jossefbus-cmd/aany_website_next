import { LegalPageShell } from "@/features/legal/components/legal-page-shell";
import { verificationPolicyContent } from "@/features/legal/verification-policy-content";
import { buildMetadata } from "@/shared/seo/metadata";

export const metadata = buildMetadata({
  title: "Verification Policy",
  description:
    "Learn how Aany may review provider or user information where verification is needed.",
  path: "/legal/verification-policy",
});

export default function Page() {
  return (
    <LegalPageShell
      eyebrow={verificationPolicyContent.eyebrow}
      title={verificationPolicyContent.title}
      body={verificationPolicyContent.body}
      sections={verificationPolicyContent.sections}
    />
  );
}
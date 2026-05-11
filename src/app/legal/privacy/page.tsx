import { LegalPageShell } from "@/features/legal/components/legal-page-shell";
import { privacyContent } from "@/features/legal/privacy-content";
import { buildMetadata } from "@/shared/seo/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Learn how aany handles personal information for users, customers, and providers.",
  path: "/legal/privacy",
});

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
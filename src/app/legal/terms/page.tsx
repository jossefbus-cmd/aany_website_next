import { LegalPageShell } from "@/features/legal/components/legal-page-shell";
import { termsContent } from "@/features/legal/terms-content";
import { buildMetadata } from "@/shared/seo/metadata";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Read the basic terms for using aany as a visitor, customer, or general user.",
  path: "/legal/terms",
});

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
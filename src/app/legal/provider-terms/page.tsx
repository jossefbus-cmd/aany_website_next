import { LegalPageShell } from "@/features/legal/components/legal-page-shell";
import { providerTermsContent } from "@/features/legal/provider-terms-content";
import { buildMetadata } from "@/shared/seo/metadata";

export const metadata = buildMetadata({
  title: "Provider Terms",
  description:
    "Read the basic expectations for providers who offer services through aany.",
  path: "/legal/provider-terms",
});

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
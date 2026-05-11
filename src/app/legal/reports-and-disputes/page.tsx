import { LegalPageShell } from "@/features/legal/components/legal-page-shell";
import { reportsAndDisputesContent } from "@/features/legal/reports-and-disputes-content";
import { buildMetadata } from "@/shared/seo/metadata";

export const metadata = buildMetadata({
  title: "Reports and Disputes",
  description:
    "Learn how Aany may receive, review, and respond to reports and disputes.",
  path: "/legal/reports-and-disputes",
});

export default function Page() {
  return (
    <LegalPageShell
      eyebrow={reportsAndDisputesContent.eyebrow}
      title={reportsAndDisputesContent.title}
      body={reportsAndDisputesContent.body}
      sections={reportsAndDisputesContent.sections}
    />
  );
}
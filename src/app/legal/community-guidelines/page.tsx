import { LegalPageShell } from "@/features/legal/components/legal-page-shell";
import { communityGuidelinesContent } from "@/features/legal/community-guidelines-content";
import { buildMetadata } from "@/shared/seo/metadata";

export const metadata = buildMetadata({
  title: "Community Guidelines",
  description:
    "Read Aany community guidelines for customers, providers, and visitors.",
  path: "/legal/community-guidelines",
});

export default function Page() {
  return (
    <LegalPageShell
      eyebrow={communityGuidelinesContent.eyebrow}
      title={communityGuidelinesContent.title}
      body={communityGuidelinesContent.body}
      sections={communityGuidelinesContent.sections}
    />
  );
}
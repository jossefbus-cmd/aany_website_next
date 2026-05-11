import { LegalPageShell } from "@/features/legal/components/legal-page-shell";
import type { getDictionary } from "@/shared/i18n/get-dictionary";

type Dictionary = ReturnType<typeof getDictionary>;

type LocalizedLegalContent =
  Dictionary["legal"][keyof Dictionary["legal"]];

type LocalizedLegalPageProps = {
  content: LocalizedLegalContent;
};

export function LocalizedLegalPage({ content }: LocalizedLegalPageProps) {
  return (
    <LegalPageShell
      eyebrow={content.eyebrow}
      title={content.title}
      body={content.body}
      sections={content.sections}
    />
  );
}
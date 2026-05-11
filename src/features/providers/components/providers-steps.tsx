import { ContentCard } from "@/shared/components/ui/content-card";
import { SectionHeader } from "@/shared/components/ui/section-header";
import { providersContent } from "../content";

export function ProvidersSteps() {
  return (
    <section className="mx-auto max-w-6xl px-7 pb-16">
      <SectionHeader
        eyebrow={providersContent.steps.eyebrow}
        title={providersContent.steps.title}
        body={providersContent.steps.body}
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {providersContent.cards.map((card) => (
          <ContentCard key={card.title} title={card.title} body={card.body} />
        ))}
      </div>
    </section>
  );
}
import { ContentCard } from "@/shared/components/ui/content-card";
import { SectionHeader } from "@/shared/components/ui/section-header";
import { aboutContent } from "../content";

export function AboutMission() {
  return (
    <section className="mx-auto max-w-6xl px-7 pb-16">
      <SectionHeader
        eyebrow={aboutContent.mission.eyebrow}
        title={aboutContent.mission.title}
        body={aboutContent.mission.body}
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {aboutContent.cards.map((card) => (
          <ContentCard key={card.title} title={card.title} body={card.body} />
        ))}
      </div>
    </section>
  );
}
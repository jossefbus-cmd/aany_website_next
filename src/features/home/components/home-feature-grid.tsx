import { ContentCard } from "@/shared/components/ui/content-card";
import { homeContent } from "../content";

export function HomeFeatureGrid() {
  return (
    <section className="mx-auto grid max-w-6xl gap-4 px-7 pb-7 md:grid-cols-3">
      {homeContent.highlights.map((feature) => (
        <ContentCard
          key={feature.title}
          title={feature.title}
          body={feature.body}
        />
      ))}
    </section>
  );
}
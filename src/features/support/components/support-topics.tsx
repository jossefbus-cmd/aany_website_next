import { ContentCard } from "@/shared/components/ui/content-card";
import { supportContent } from "../content";

export function SupportTopics() {
  return (
    <section className="mx-auto max-w-6xl px-7 pb-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {supportContent.topics.map((topic) => (
          <ContentCard key={topic.title} title={topic.title} body={topic.body} />
        ))}
      </div>
    </section>
  );
}
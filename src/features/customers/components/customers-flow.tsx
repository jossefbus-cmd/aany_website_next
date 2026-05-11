import { ContentCard } from "@/shared/components/ui/content-card";
import { SectionHeader } from "@/shared/components/ui/section-header";
import { customersContent } from "../content";

export function CustomersFlow() {
  return (
    <section className="mx-auto max-w-6xl px-7 pb-16">
      <SectionHeader
        eyebrow={customersContent.flow.eyebrow}
        title={customersContent.flow.title}
        body={customersContent.flow.body}
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {customersContent.steps.map((step) => (
          <ContentCard key={step.title} title={step.title} body={step.body} />
        ))}
      </div>
    </section>
  );
}
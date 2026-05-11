import { ContentCard } from "@/shared/components/ui/content-card";

const features = [
  {
    title: "For customers",
    body: "Find useful services with a clean and simple experience.",
  },
  {
    title: "For students",
    body: "Create real opportunities for skilled student providers.",
  },
  {
    title: "For providers",
    body: "Keep the marketplace open while highlighting student talent.",
  },
];

export function HomeFeatureGrid() {
  return (
    <section className="mx-auto grid max-w-6xl gap-4 px-7 pb-7 md:grid-cols-3">
      {features.map((feature) => (
        <ContentCard key={feature.title} title={feature.title} body={feature.body} />
      ))}
    </section>
  );
}
import { InsightSection } from "@/shared/components/ui/insight-section";

import { ProvidersHero } from "./components/providers-hero";
import { ProvidersSteps } from "./components/providers-steps";
import { providersContent } from "./content";

export function ProvidersPage() {
  return (
    <>
      <ProvidersHero />
      <ProvidersSteps />

      <InsightSection
        eyebrow={providersContent.flexible.eyebrow}
        title={providersContent.flexible.title}
        body={providersContent.flexible.body}
        items={providersContent.flexible.items}
      />
    </>
  );
}
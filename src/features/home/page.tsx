import { InsightSection } from "@/shared/components/ui/insight-section";

import { HomeFeatureGrid } from "./components/home-feature-grid";
import { HomeHero } from "./components/home-hero";
import { HomeTrustSection } from "./components/home-trust-section";
import { homeContent } from "./content";

export function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeFeatureGrid />

      <InsightSection
        eyebrow={homeContent.value.eyebrow}
        title={homeContent.value.title}
        body={homeContent.value.body}
        items={homeContent.value.items}
      />

      <InsightSection
        eyebrow={homeContent.customerPromise.eyebrow}
        title={homeContent.customerPromise.title}
        body={homeContent.customerPromise.body}
        items={homeContent.customerPromise.items}
      />

      <HomeTrustSection />
    </>
  );
}
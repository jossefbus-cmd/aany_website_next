import { HomeFeatureGrid } from "./components/home-feature-grid";
import { HomeHero } from "./components/home-hero";
import { HomeTrustSection } from "./components/home-trust-section";

export function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeFeatureGrid />
      <HomeTrustSection />
    </>
  );
}
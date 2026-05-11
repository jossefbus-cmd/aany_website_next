import { SupportContact } from "./components/support-contact";
import { SupportHero } from "./components/support-hero";
import { SupportTopics } from "./components/support-topics";

export function SupportPage() {
  return (
    <>
      <SupportHero />
      <SupportTopics />
      <SupportContact />
    </>
  );
}
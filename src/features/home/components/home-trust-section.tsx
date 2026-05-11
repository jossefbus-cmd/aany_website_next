import { SectionHeader } from "@/shared/components/ui/section-header";
import { homeContent } from "../content";

export function HomeTrustSection() {
  return (
    <section className="mx-auto max-w-6xl px-7 py-7">
      <div className="rounded-[34px] border border-black/[0.06] bg-white p-8">
        <SectionHeader
          eyebrow={homeContent.trust.eyebrow}
          title={homeContent.trust.title}
          body={homeContent.trust.body}
        />
      </div>
    </section>
  );
}
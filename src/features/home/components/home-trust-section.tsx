import { SectionHeader } from "@/shared/components/ui/section-header";

export function HomeTrustSection() {
  return (
    <section className="mx-auto max-w-6xl px-7 py-7">
      <div className="rounded-[34px] border border-black/[0.06] bg-white p-8">
        <SectionHeader
          eyebrow="Trust foundation"
          title="Built around accounts, providers, orders, and support."
          body="The official website will grow with the product and explain how aany handles customers, providers, trust, support, legal policies, and future marketplace operations."
        />
      </div>
    </section>
  );
}
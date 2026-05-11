import { PrimaryButton } from "@/shared/components/ui/primary-button";
import { siteContent } from "@/shared/content/site";

export function HomeHero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-7 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:py-20">
      <div>
        <p className="inline-flex rounded-full bg-black/[0.06] px-4 py-2 text-sm font-bold text-[#171217]">
          {siteContent.home.eyebrow}
        </p>

        <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-normal text-[#171217] sm:text-5xl lg:text-[48px]">
          {siteContent.home.title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 tracking-normal text-black/60">
          {siteContent.home.body}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <PrimaryButton label="Explore the vision" href="/about" />
          <PrimaryButton label="For providers" href="/providers" variant="light" />
        </div>
      </div>

      <div className="rounded-[36px] bg-[#111111] p-8 text-white shadow-[0_24px_42px_rgba(0,0,0,0.18)]">
        <div className="text-4xl">✦</div>

        <div className="mt-32">
          <h2 className="text-3xl font-semibold leading-tight tracking-normal">
            Built for launch, ready to grow.
          </h2>

          <p className="mt-5 text-base leading-7 tracking-normal text-white/70">
            A clean foundation for customers, providers, trust, support, and future operations.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-bold">
              Student-first
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-bold">
              Open marketplace
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
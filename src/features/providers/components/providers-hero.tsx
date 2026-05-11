import { PrimaryButton } from "@/shared/components/ui/primary-button";
import { providersContent } from "../content";

export function ProvidersHero() {
  return (
    <section className="mx-auto max-w-6xl px-7 py-16 text-center lg:py-20">
      <p className="inline-flex rounded-full bg-black/[0.06] px-4 py-2 text-sm font-bold text-[#171217]">
        {providersContent.hero.eyebrow}
      </p>

      <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-normal text-[#171217] sm:text-5xl lg:text-[48px]">
        {providersContent.hero.title}
      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/60">
        {providersContent.hero.body}
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <PrimaryButton label="Provider basics" href="/providers" />
        <PrimaryButton
          label="Read provider terms"
          href="/legal/provider-terms"
          variant="light"
        />
      </div>
    </section>
  );
}
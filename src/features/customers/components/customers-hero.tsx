import { PrimaryButton } from "@/shared/components/ui/primary-button";
import { customersContent } from "../content";

export function CustomersHero() {
  return (
    <section className="mx-auto max-w-6xl px-7 py-16 text-center lg:py-20">
      <p className="inline-flex rounded-full bg-black/[0.06] px-4 py-2 text-sm font-bold text-[#171217]">
        {customersContent.hero.eyebrow}
      </p>

      <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-normal text-[#171217] sm:text-5xl lg:text-[48px]">
        {customersContent.hero.title}
      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/60">
        {customersContent.hero.body}
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <PrimaryButton label="How it works" href="/customers" />
        <PrimaryButton label="Get support" href="/support" variant="light" />
      </div>
    </section>
  );
}
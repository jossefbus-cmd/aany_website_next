import { ContentCard } from "@/shared/components/ui/content-card";
import { PrimaryButton } from "@/shared/components/ui/primary-button";
import { SectionHeader } from "@/shared/components/ui/section-header";
import type { getDictionary } from "@/shared/i18n/get-dictionary";
import type { Locale } from "@/shared/i18n/locales";
import { localizeHref } from "@/shared/i18n/routing";

type LocalizedCustomersPageProps = {
  dictionary: ReturnType<typeof getDictionary>;
  locale: Locale;
};

export function LocalizedCustomersPage({
  dictionary,
  locale,
}: LocalizedCustomersPageProps) {
  const customers = dictionary.customers;

  return (
    <>
      <section className="mx-auto max-w-6xl px-7 py-16 text-center lg:py-20">
        <p className="inline-flex rounded-full bg-black/[0.06] px-4 py-2 text-sm font-bold text-[#171217]">
          {customers.hero.eyebrow}
        </p>

        <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-normal text-[#171217] sm:text-5xl lg:text-[48px]">
          {customers.hero.title}
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/60">
          {customers.hero.body}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <PrimaryButton
            label={customers.hero.primaryAction}
            href={localizeHref("/customers", locale)}
          />
          <PrimaryButton
            label={customers.hero.secondaryAction}
            href={localizeHref("/providers", locale)}
            variant="light"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-7 pb-16">
        <SectionHeader
          eyebrow={customers.flow.eyebrow}
          title={customers.flow.title}
          body={customers.flow.body}
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {customers.steps.map((step) => (
            <ContentCard key={step.title} title={step.title} body={step.body} />
          ))}
        </div>
      </section>
    </>
  );
}
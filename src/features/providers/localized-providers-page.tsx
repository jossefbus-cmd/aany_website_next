import { ContentCard } from "@/shared/components/ui/content-card";
import { InsightSection } from "@/shared/components/ui/insight-section";
import { PrimaryButton } from "@/shared/components/ui/primary-button";
import { SectionHeader } from "@/shared/components/ui/section-header";
import type { getDictionary } from "@/shared/i18n/get-dictionary";
import type { Locale } from "@/shared/i18n/locales";
import { localizeHref } from "@/shared/i18n/routing";

type LocalizedProvidersPageProps = {
  dictionary: ReturnType<typeof getDictionary>;
  locale: Locale;
};

export function LocalizedProvidersPage({
  dictionary,
  locale,
}: LocalizedProvidersPageProps) {
  const providers = dictionary.providers;

  return (
    <>
      <section className="mx-auto max-w-6xl px-7 py-16 text-center lg:py-20">
        <p className="inline-flex rounded-full bg-black/[0.06] px-4 py-2 text-sm font-bold text-[#171217]">
          {providers.hero.eyebrow}
        </p>

        <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-normal text-[#171217] sm:text-5xl lg:text-[48px]">
          {providers.hero.title}
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/60">
          {providers.hero.body}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <PrimaryButton
            label={providers.hero.primaryAction}
            href={localizeHref("/providers", locale)}
          />
          <PrimaryButton
            label={providers.hero.secondaryAction}
            href={localizeHref("/legal/provider-terms", locale)}
            variant="light"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-7 pb-16">
        <SectionHeader
          eyebrow={providers.steps.eyebrow}
          title={providers.steps.title}
          body={providers.steps.body}
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {providers.cards.map((card) => (
            <ContentCard key={card.title} title={card.title} body={card.body} />
          ))}
        </div>
      </section>

      <InsightSection
        eyebrow={providers.flexible.eyebrow}
        title={providers.flexible.title}
        body={providers.flexible.body}
        items={providers.flexible.items}
      />
    </>
  );
}
import { ContentCard } from "@/shared/components/ui/content-card";
import { InsightSection } from "@/shared/components/ui/insight-section";
import { PrimaryButton } from "@/shared/components/ui/primary-button";
import { SectionHeader } from "@/shared/components/ui/section-header";
import type { getDictionary } from "@/shared/i18n/get-dictionary";
import type { Locale } from "@/shared/i18n/locales";
import { localizeHref } from "@/shared/i18n/routing";

type LocalizedHomePageProps = {
  dictionary: ReturnType<typeof getDictionary>;
  locale: Locale;
};

export function LocalizedHomePage({
  dictionary,
  locale,
}: LocalizedHomePageProps) {
  const home = dictionary.home;

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-7 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
        <div>
          <p className="inline-flex rounded-full bg-black/[0.06] px-4 py-2 text-sm font-bold text-[#171217]">
            {home.hero.eyebrow}
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-normal text-[#171217] sm:text-5xl lg:text-[48px]">
            {home.hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 tracking-normal text-black/60">
            {home.hero.body}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton
              label={home.hero.primaryAction}
              href={localizeHref("/customers", locale)}
            />
            <PrimaryButton
              label={home.hero.secondaryAction}
              href={localizeHref("/providers", locale)}
              variant="light"
            />
          </div>
        </div>

        <div className="rounded-[36px] bg-[#111111] p-8 text-white shadow-[0_24px_42px_rgba(0,0,0,0.18)]">
          <div className="text-4xl">✦</div>

          <div className="mt-32">
            <h2 className="text-3xl font-semibold leading-tight tracking-normal">
              {home.providers.title}
            </h2>

            <p className="mt-5 text-base leading-7 tracking-normal text-white/70">
              {home.providers.body}
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-bold">
                {home.highlights[0]?.title}
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-bold">
                {home.highlights[1]?.title}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-7 pb-7 md:grid-cols-3">
        {home.highlights.map((feature) => (
          <ContentCard
            key={feature.title}
            title={feature.title}
            body={feature.body}
          />
        ))}
      </section>

      <InsightSection
        eyebrow={home.value.eyebrow}
        title={home.value.title}
        body={home.value.body}
        items={home.value.items}
      />

      <InsightSection
        eyebrow={home.providers.eyebrow}
        title={home.providers.title}
        body={home.providers.body}
        items={home.providers.items}
      />

      <section className="mx-auto max-w-6xl px-7 py-7">
        <div className="rounded-[34px] border border-black/[0.06] bg-white p-8">
          <SectionHeader
            eyebrow={home.trust.eyebrow}
            title={home.trust.title}
            body={home.trust.body}
          />
        </div>
      </section>
    </>
  );
}
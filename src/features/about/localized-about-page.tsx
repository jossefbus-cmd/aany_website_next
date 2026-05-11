import { ContentCard } from "@/shared/components/ui/content-card";
import { SectionHeader } from "@/shared/components/ui/section-header";
import type { getDictionary } from "@/shared/i18n/get-dictionary";

type LocalizedAboutPageProps = {
  dictionary: ReturnType<typeof getDictionary>;
};

export function LocalizedAboutPage({ dictionary }: LocalizedAboutPageProps) {
  const about = dictionary.about;

  return (
    <>
      <section className="mx-auto max-w-6xl px-7 py-16 text-center lg:py-20">
        <p className="inline-flex rounded-full bg-black/[0.06] px-4 py-2 text-sm font-bold text-[#171217]">
          {about.hero.eyebrow}
        </p>

        <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-normal text-[#171217] sm:text-5xl lg:text-[48px]">
          {about.hero.title}
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/60">
          {about.hero.body}
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-7 pb-16">
        <SectionHeader
          eyebrow={about.mission.eyebrow}
          title={about.mission.title}
          body={about.mission.body}
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {about.cards.map((card) => (
            <ContentCard key={card.title} title={card.title} body={card.body} />
          ))}
        </div>
      </section>
    </>
  );
}
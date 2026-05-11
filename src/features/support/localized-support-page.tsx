import { ContentCard } from "@/shared/components/ui/content-card";
import type { getDictionary } from "@/shared/i18n/get-dictionary";

type LocalizedSupportPageProps = {
  dictionary: ReturnType<typeof getDictionary>;
};

export function LocalizedSupportPage({ dictionary }: LocalizedSupportPageProps) {
  const support = dictionary.support;

  return (
    <>
      <section className="mx-auto max-w-6xl px-7 py-16 text-center lg:py-20">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[28px] bg-[#111111] text-4xl text-white shadow-[0_18px_34px_rgba(0,0,0,0.16)]">
          ?
        </div>

        <p className="mt-8 inline-flex rounded-full bg-black/[0.06] px-4 py-2 text-sm font-bold text-[#171217]">
          {support.hero.eyebrow}
        </p>

        <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-normal text-[#171217] sm:text-5xl lg:text-[48px]">
          {support.hero.title}
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/60">
          {support.hero.body}
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-7 pb-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {support.topics.map((topic) => (
            <ContentCard
              key={topic.title}
              title={topic.title}
              body={topic.body}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-7 pb-16">
        <div className="rounded-[34px] bg-[#111111] p-8 text-white shadow-[0_18px_36px_rgba(0,0,0,0.16)]">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-normal">
                {support.contact.title}
              </h2>

              <p className="mt-3 max-w-2xl text-base leading-7 text-white/70">
                {support.contact.body}
              </p>
            </div>

            <div className="inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-bold text-black">
              {support.contact.email}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
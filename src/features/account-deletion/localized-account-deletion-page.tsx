import { ContentCard } from "@/shared/components/ui/content-card";
import type { getDictionary } from "@/shared/i18n/get-dictionary";

type LocalizedAccountDeletionPageProps = {
  dictionary: ReturnType<typeof getDictionary>;
};

export function LocalizedAccountDeletionPage({
  dictionary,
}: LocalizedAccountDeletionPageProps) {
  const accountDeletion = dictionary.accountDeletion;

  return (
    <>
      <section className="mx-auto max-w-6xl px-7 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-black/45">
            {accountDeletion.hero.eyebrow}
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-[1.12] tracking-normal text-[#171217] sm:text-5xl lg:text-[48px]">
            {accountDeletion.hero.title}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/60">
            {accountDeletion.hero.body}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-7 pb-20">
        <div className="grid gap-4 md:grid-cols-2">
          {accountDeletion.sections.map((section) => (
            <ContentCard
              key={section.title}
              title={section.title}
              body={section.body}
            />
          ))}
        </div>
      </section>
    </>
  );
}
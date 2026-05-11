import { ContentCard } from "@/shared/components/ui/content-card";
import { accountDeletionContent } from "../content";

export function AccountDeletionContent() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-7 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-black/45">
            {accountDeletionContent.hero.eyebrow}
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-[1.12] tracking-normal text-[#171217] sm:text-5xl lg:text-[48px]">
            {accountDeletionContent.hero.title}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/60">
            {accountDeletionContent.hero.body}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-7 pb-20">
        <div className="rounded-[34px] bg-white p-6 shadow-[0_16px_34px_rgba(0,0,0,0.04)] sm:p-8">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-black/45">
              Deletion process
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-[1.18] tracking-normal text-[#171217] sm:text-4xl">
              Clear account deletion support before launch.
            </h2>

            <p className="mt-4 text-base leading-7 text-black/60 sm:text-lg">
              This page explains how aany will handle account deletion requests,
              what may be deleted, and what may need to be retained for safety,
              support, fraud prevention, dispute, or legal reasons.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {accountDeletionContent.sections.map((section) => (
              <ContentCard
                key={section.title}
                title={section.title}
                body={section.body}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
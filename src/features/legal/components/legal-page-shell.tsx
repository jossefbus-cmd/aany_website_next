import { LegalSection } from "./legal-section";

type LegalPageShellProps = {
  eyebrow: string;
  title: string;
  body: string;
  sections: ReadonlyArray<{
    readonly title: string;
    readonly body: string;
  }>;
};

export function LegalPageShell({
  eyebrow,
  title,
  body,
  sections,
}: LegalPageShellProps) {
  return (
    <>
      <section className="mx-auto max-w-6xl px-11 py-14 lg:py-16">
         <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-black/45">
            {eyebrow}
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-[1.12] tracking-normal text-[#171217] sm:text-5xl lg:text-[48px]">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">
            {body}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-7 pb-20">
         <div className="max-w-5xl rounded-[34px] bg-white p-6 shadow-[0_16px_35px_rgba(0,0,0,0.04)] sm:p-8">
          {sections.map((section) => (
            <LegalSection
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
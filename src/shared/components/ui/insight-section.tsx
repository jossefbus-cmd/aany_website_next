type InsightItem = {
  title: string;
  body: string;
};

type InsightSectionProps = {
  eyebrow: string;
  title: string;
  body: string;
  items: ReadonlyArray<InsightItem>;
};

export function InsightSection({
  eyebrow,
  title,
  body,
  items,
}: InsightSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-7 py-12">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-black/45">
            {eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-[1.14] tracking-normal text-[#171217] sm:text-4xl lg:text-[44px]">
            {title}
          </h2>

          <p className="mt-5 text-base leading-8 text-black/60 sm:text-lg">
            {body}
          </p>
        </div>

        <div className="grid gap-4">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-[28px] border border-black/[0.06] bg-white p-6 shadow-[0_14px_24px_rgba(0,0,0,0.035)]"
            >
              <h3 className="text-xl font-semibold tracking-normal text-[#171217]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-black/58 sm:text-[15px]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
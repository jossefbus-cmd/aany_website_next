type LegalSectionProps = {
  title: string;
  body: string;
};

export function LegalSection({ title, body }: LegalSectionProps) {
  return (
    <section className="border-t border-black/10 py-8 first:border-t-0 first:pt-0">
      <h2 className="text-2xl font-semibold leading-tight tracking-normal text-[#171217]">
        {title}
      </h2>

      <p className="mt-4 max-w-4xl text-base leading-8 text-black/60">
        {body}
      </p>
    </section>
  );
}
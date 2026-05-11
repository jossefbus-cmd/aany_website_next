type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  body: string;
  centered?: boolean;
  maxWidthClassName?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  body,
  centered = false,
  maxWidthClassName = "max-w-3xl",
}: SectionHeaderProps) {
  return (
    <div
      className={[
        maxWidthClassName,
        centered ? "mx-auto text-center" : "",
      ].join(" ")}
    >
      <p className="text-sm font-semibold tracking-[0.12em] text-black/45 uppercase">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-[0.005em] text-[#171217] sm:text-4xl lg:text-[44px]">
        {title}
      </h2>

      <p className="mt-5 text-base leading-8 text-black/58 sm:text-lg">
        {body}
      </p>
    </div>
  );
}
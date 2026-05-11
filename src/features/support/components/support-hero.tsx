import { supportContent } from "../content";

export function SupportHero() {
  return (
    <section className="mx-auto max-w-6xl px-7 py-16 text-center lg:py-20">
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[28px] bg-[#111111] text-4xl text-white shadow-[0_18px_34px_rgba(0,0,0,0.16)]">
        ?
      </div>

      <p className="mt-8 inline-flex rounded-full bg-black/[0.06] px-4 py-2 text-sm font-bold text-[#171217]">
        {supportContent.hero.eyebrow}
      </p>

      <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-normal text-[#171217] sm:text-5xl lg:text-[48px]">
        {supportContent.hero.title}
      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/60">
        {supportContent.hero.body}
      </p>
    </section>
  );
}
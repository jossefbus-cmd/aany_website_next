import { aboutContent } from "../content";

export function AboutHero() {
  return (
    <section className="mx-auto max-w-6xl px-7 py-16 text-center lg:py-20">
      <p className="inline-flex rounded-full bg-black/[0.06] px-4 py-2 text-sm font-bold text-[#171217]">
        {aboutContent.hero.eyebrow}
      </p>

      <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-normal text-[#171217] sm:text-5xl lg:text-[48px]">
        {aboutContent.hero.title}
      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/60">
        {aboutContent.hero.body}
      </p>
    </section>
  );
}
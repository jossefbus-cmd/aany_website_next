import { supportContent } from "../content";

export function SupportContact() {
  return (
    <section className="mx-auto max-w-6xl px-7 pb-16">
      <div className="rounded-[34px] bg-[#111111] p-8 text-white shadow-[0_18px_36px_rgba(0,0,0,0.16)]">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-normal">
              {supportContent.contact.title}
            </h2>

            <p className="mt-3 max-w-2xl text-base leading-7 text-white/70">
              {supportContent.contact.body}
            </p>
          </div>

          <div className="inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-bold text-black">
            {supportContent.contact.email}
          </div>
        </div>
      </div>
    </section>
  );
}
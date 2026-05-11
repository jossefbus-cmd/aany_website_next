import type { ReactNode } from "react";

type ContentCardProps = {
  title: string;
  body: string;
  icon?: ReactNode;
};

export function ContentCard({ title, body, icon }: ContentCardProps) {
  return (
    <article className="min-h-[180px] rounded-[30px] border border-black/[0.06] bg-white p-7 shadow-[0_14px_24px_rgba(0,0,0,0.035)]">
      {icon ? <div className="mb-6 text-[#171217]">{icon}</div> : null}

      <h3 className="text-xl font-semibold tracking-[-0.005em] text-[#171217]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-black/58 sm:text-[15px]">
        {body}
      </p>
    </article>
  );
}
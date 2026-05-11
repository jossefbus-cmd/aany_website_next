import Link from "next/link";
import type { ReactNode } from "react";

type PrimaryButtonProps = {
  label: string;
  href: string;
  variant?: "dark" | "light";
  icon?: ReactNode;
};

export function PrimaryButton({
  label,
  href,
  variant = "dark",
  icon,
}: PrimaryButtonProps) {
  const isDark = variant === "dark";

  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition",
        "focus:outline-none focus:ring-2 focus:ring-black/20 focus:ring-offset-2",
        isDark
          ? "bg-black text-white shadow-[0_12px_28px_rgba(0,0,0,0.14)] hover:bg-black/85"
          : "border border-black/10 bg-white text-black shadow-[0_10px_24px_rgba(0,0,0,0.04)] hover:bg-black/[0.03]",
      ].join(" ")}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
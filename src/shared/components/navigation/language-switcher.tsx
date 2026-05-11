"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getLocaleFromPathname, switchLocalePath } from "@/shared/i18n/routing";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);

  return (
    <div className="hidden items-center rounded-full bg-black/[0.05] p-1 text-xs font-bold text-black/60 sm:flex">
      <Link
        href={switchLocalePath(pathname, "en")}
        className={[
          "rounded-full px-2.5 py-1 transition",
          currentLocale === "en" ? "bg-white text-black shadow-sm" : "",
        ].join(" ")}
      >
        EN
      </Link>

      <Link
        href={switchLocalePath(pathname, "th")}
        className={[
          "rounded-full px-2.5 py-1 transition",
          currentLocale === "th" ? "bg-white text-black shadow-sm" : "",
        ].join(" ")}
      >
        ไทย
      </Link>
    </div>
  );
}
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getFooterDictionary } from "@/shared/i18n/footer-dictionary";
import { getLocaleFromPathname, localizeHref } from "@/shared/i18n/routing";

export function SiteFooter() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const footer = getFooterDictionary(locale);

  return (
    <footer className="bg-[#ededed] px-7 py-10">
      <div className="mx-auto max-w-6xl">
        <p className="max-w-4xl text-sm leading-7 text-black/55">
          {footer.description}
        </p>

        <div className="my-7 h-px bg-black/10" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footer.columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-bold text-[#171217]">
                {column.title}
              </h2>

              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={localizeHref(link.href, locale)}
                      className="text-sm font-medium leading-6 text-black/55 transition hover:text-black"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="my-7 h-px bg-black/10" />

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-black/55">
          <span>{footer.copyright}</span>

          {footer.inlineLinks.map((link) => (
            <Link
              key={link.href + link.label}
              href={localizeHref(link.href, locale)}
              className="hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
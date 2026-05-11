import Link from "next/link";

import { getUiDictionary, type UiMegaColumn } from "@/shared/i18n/ui-dictionary";
import type { Locale } from "@/shared/i18n/locales";
import { localizeHref } from "@/shared/i18n/routing";

type MegaMenuProps = {
  activeHref: string | null;
  locale: Locale;
  onClose: () => void;
};

function resolveMenuKey(activeHref: string | null) {
  if (activeHref === "/customers") return "customers";
  if (activeHref === "/providers") return "providers";
  if (activeHref === "/about") return "about";
  if (activeHref === "/support") return "support";
  return "home";
}

export function MegaMenu({ activeHref, locale, onClose }: MegaMenuProps) {
  const open = activeHref !== null;
  const ui = getUiDictionary(locale);
  const columns: ReadonlyArray<UiMegaColumn> =
    ui.megaMenu[resolveMenuKey(activeHref)];

  return (
    <div
      className={[
        "hidden overflow-hidden bg-white/95 backdrop-blur-xl md:block",
        "transition-[max-height,opacity,transform] duration-500 ease-out",
        open
          ? "max-h-[360px] translate-y-0 opacity-100"
          : "max-h-0 -translate-y-2 opacity-0",
      ].join(" ")}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-16 px-7 pb-10 pt-8">
        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-sm font-semibold text-black/45">
              {column.title}
            </p>

            <div className="mt-4 grid gap-3">
              {column.links.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={localizeHref(link.href, locale)}
                  onClick={onClose}
                  className={[
                    "font-semibold text-[#171217] transition hover:text-black/65",
                    column.primary ? "text-2xl leading-tight" : "text-base",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
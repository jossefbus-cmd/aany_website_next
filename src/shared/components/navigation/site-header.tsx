"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { BrandMark } from "@/shared/components/ui/brand-mark";
import { getUiDictionary } from "@/shared/i18n/ui-dictionary";
import {
  getLocaleFromPathname,
  localizeHref,
  stripLocaleFromPathname,
} from "@/shared/i18n/routing";
import { LanguageSwitcher } from "./language-switcher";
import { MegaMenu } from "./mega-menu";
import { MobileMenu } from "./mobile-menu";
import { SearchOverlay } from "./search-overlay";

export function SiteHeader() {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);
  const pathWithoutLocale = stripLocaleFromPathname(pathname);
  const ui = getUiDictionary(currentLocale);

  const [activeMegaHref, setActiveMegaHref] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {activeMegaHref !== null ? (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 top-16 z-30 bg-white/25 backdrop-blur-md" />
      ) : null}

      <header
        className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-xl"
        onMouseLeave={() => setActiveMegaHref(null)}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center px-5">
          <div className="flex flex-1 items-center">
            <div onMouseEnter={() => setActiveMegaHref("/")}>
              <BrandMark href={localizeHref("/", currentLocale)} />
            </div>
          </div>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 md:flex"
          >
            {ui.navigation.main.map((item) => {
              const active =
                item.href === "/"
                  ? pathWithoutLocale === "/"
                  : pathWithoutLocale.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={localizeHref(item.href, currentLocale)}
                  onMouseEnter={() => setActiveMegaHref(item.href)}
                  className={[
                    "rounded-full px-4 py-2 text-sm font-semibold transition",
                    active || activeMegaHref === item.href
                      ? "bg-black/[0.07] text-black"
                      : "text-black/65 hover:bg-black/[0.06] hover:text-black",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-1 items-center justify-end gap-0">
            <LanguageSwitcher />

            <button
  type="button"
  aria-label="Search"
  onClick={() => setSearchOpen(true)}
  className="flex h-11 w-11 items-center justify-center rounded-full text-black transition hover:bg-black/[0.06]"
>
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-4.5 w-4.5 translate-y-[1px]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="M16 16L21 21" />
  </svg>
</button>

            <button
  type="button"
  aria-label="Open menu"
  onClick={() => setMobileOpen((value) => !value)}
  className="flex h-11 w-11 items-center justify-center rounded-full text-black transition hover:bg-black/[0.06] md:hidden"
>
  {mobileOpen ? (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 6L18 18" />
      <path d="M18 6L6 18" />
    </svg>
  ) : (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 7H20" />
      <path d="M4 12H20" />
      <path d="M4 17H20" />
    </svg>
  )}
</button>
          </div>
        </div>

        <MegaMenu
          activeHref={activeMegaHref}
          locale={currentLocale}
          onClose={() => setActiveMegaHref(null)}
        />
      </header>

      <div className="h-16" aria-hidden="true" />

      <MobileMenu
        open={mobileOpen}
        locale={currentLocale}
        onClose={() => setMobileOpen(false)}
      />

      <SearchOverlay
        open={searchOpen}
        locale={currentLocale}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
}
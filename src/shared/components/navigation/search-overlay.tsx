"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

import type { Locale } from "@/shared/i18n/locales";
import { localizeHref } from "@/shared/i18n/routing";
import {
  getSearchUi,
  getSiteSearchIndex,
  type SiteSearchItem,
} from "@/shared/search/site-search-index";

type SearchOverlayProps = {
  open: boolean;
  locale: Locale;
  onClose: () => void;
};

function normalize(value: string) {
  return value.trim().toLowerCase();
}

function getSearchScore(item: SiteSearchItem, query: string): number {
  const label = normalize(item.label);
  const description = normalize(item.description);
  const keywords = item.keywords.map((keyword) => normalize(keyword));

  if (label === query) return 1000;
  if (label.startsWith(query)) return 950;
  if (label.includes(query)) return 900;

  if (keywords.some((keyword) => keyword === query)) return 850;
  if (keywords.some((keyword) => keyword.startsWith(query))) return 800;
  if (keywords.some((keyword) => keyword.includes(query))) return 750;

  if (description.includes(query)) return 500;

  return 0;
}

function uniqueResults(items: ReadonlyArray<SiteSearchItem>) {
  const seen = new Set<string>();

  return items.filter((item) => {
    const key = `${normalize(item.href)}-${normalize(item.label)}`;

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

export function SearchOverlay({ open, locale, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const searchUi = getSearchUi(locale);
  const searchIndex = getSiteSearchIndex(locale);

  const closeSearch = useCallback(() => {
    setQuery("");
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeSearch();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, closeSearch]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  const results = useMemo(() => {
    const normalizedQuery = normalize(query);

    if (!normalizedQuery) {
      return searchIndex.slice(0, 6);
    }

    const scoredResults = searchIndex
      .map((item) => ({
        item,
        score: getSearchScore(item, normalizedQuery),
      }))
      .filter((result) => result.score > 0)
      .sort((a, b) => {
        if (b.score !== a.score) {
          return b.score - a.score;
        }

        return a.item.label.localeCompare(b.item.label);
      })
      .map((result) => result.item);

    return uniqueResults(scoredResults);
  }, [query, searchIndex]);

  return (
    <div
      className={[
        "fixed inset-0 z-[90] transition-all duration-300 ease-out",
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0",
      ].join(" ")}
    >
      <button
        type="button"
        aria-label={searchUi.close}
        onClick={closeSearch}
        className="absolute inset-0 cursor-default bg-white/30 backdrop-blur-md"
      />

      <div
        className={[
          "relative mx-auto mt-4 w-[min(760px,calc(100%-32px))] overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.18)]",
          "transition-all duration-300 ease-out",
          open ? "translate-y-0 scale-100" : "-translate-y-4 scale-[0.98]",
        ].join(" ")}
      >
        <div className="flex h-20 items-center gap-4 px-6">
          <span className="text-2xl text-black/40">⌕</span>

          <input
            autoFocus={open}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={searchUi.placeholder}
            className="h-full flex-1 bg-transparent text-2xl font-semibold text-[#171217] outline-none placeholder:text-black/30"
          />

          <button
            type="button"
            onClick={closeSearch}
            className="rounded-full px-4 py-2 text-sm font-semibold text-black/55 transition hover:bg-black/[0.06] hover:text-black"
          >
            {searchUi.close}
          </button>
        </div>

        <div className="border-t border-black/10 px-6 py-6">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-black/40">
            {query.trim() ? searchUi.results : searchUi.quickLinks}
          </p>

          <div className="mt-4 grid max-h-[52vh] gap-2 overflow-y-auto pr-1">
            {results.length > 0 ? (
              results.map((item) => (
                <Link
                  key={`${item.href}-${item.label}`}
                  href={localizeHref(item.href, locale)}
                  onClick={closeSearch}
                  className="rounded-2xl px-4 py-3 transition hover:bg-black/[0.05]"
                >
                  <span className="block text-lg font-semibold text-[#171217]">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-black/50">
                    {item.description}
                  </span>
                </Link>
              ))
            ) : (
              <div className="rounded-2xl px-4 py-5 text-base font-medium text-black/50">
                {searchUi.noResults}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
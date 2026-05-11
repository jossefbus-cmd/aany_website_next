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

type ScoredSearchResult = {
  item: SiteSearchItem;
  score: number;
};

function normalize(value: string) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .replace(/\s+/g, " ");
}

function tokenize(value: string) {
  return normalize(value)
    .split(/[\s-]+/)
    .map((token) => token.trim())
    .filter(Boolean);
}

function levenshteinDistance(a: string, b: string) {
  if (a === b) {
    return 0;
  }

  if (a.length === 0) {
    return b.length;
  }

  if (b.length === 0) {
    return a.length;
  }

  const previous = Array.from({ length: b.length + 1 }, (_, index) => index);
  const current = Array.from({ length: b.length + 1 }, () => 0);

  for (let i = 1; i <= a.length; i += 1) {
    current[0] = i;

    for (let j = 1; j <= b.length; j += 1) {
      const substitutionCost = a[i - 1] === b[j - 1] ? 0 : 1;

      current[j] = Math.min(
        previous[j] + 1,
        current[j - 1] + 1,
        previous[j - 1] + substitutionCost,
      );
    }

    for (let j = 0; j <= b.length; j += 1) {
      previous[j] = current[j];
    }
  }

  return previous[b.length] ?? 0;
}

function isLikelyLatin(value: string) {
  return /^[a-z0-9\s-]+$/i.test(value);
}

function getFuzzyTokenScore(queryToken: string, targetTokens: string[]) {
  if (!isLikelyLatin(queryToken) || queryToken.length < 4) {
    return 0;
  }

  let bestScore = 0;

  for (const targetToken of targetTokens) {
    if (targetToken.length < 4) {
      continue;
    }

    const distance = levenshteinDistance(queryToken, targetToken);
    const maxLength = Math.max(queryToken.length, targetToken.length);
    const similarity = 1 - distance / maxLength;

    if (distance <= 1 && similarity >= 0.75) {
      bestScore = Math.max(bestScore, 55);
    } else if (distance <= 2 && similarity >= 0.78) {
      bestScore = Math.max(bestScore, 40);
    }
  }

  return bestScore;
}

function scoreTextAgainstQuery({
  query,
  queryTokens,
  text,
  exactWeight,
  startsWithWeight,
  includesWeight,
  tokenWeight,
  fuzzyWeight,
}: {
  query: string;
  queryTokens: string[];
  text: string;
  exactWeight: number;
  startsWithWeight: number;
  includesWeight: number;
  tokenWeight: number;
  fuzzyWeight: number;
}) {
  const normalizedText = normalize(text);
  const textTokens = tokenize(text);

  let score = 0;

  if (!normalizedText) {
    return score;
  }

  if (normalizedText === query) {
    score += exactWeight;
  }

  if (normalizedText.startsWith(query)) {
    score += startsWithWeight;
  }

  if (normalizedText.includes(query)) {
    score += includesWeight;
  }

  for (const queryToken of queryTokens) {
    if (normalizedText.includes(queryToken)) {
      score += tokenWeight;
    }

    if (textTokens.some((textToken) => textToken.startsWith(queryToken))) {
      score += Math.round(tokenWeight * 0.8);
    }

    score += Math.round(
      getFuzzyTokenScore(queryToken, textTokens) * (fuzzyWeight / 100),
    );
  }

  return score;
}

function getSearchScore(item: SiteSearchItem, rawQuery: string) {
  const query = normalize(rawQuery);
  const queryTokens = tokenize(rawQuery);

  if (!query) {
    return 0;
  }

  const keywordText = item.keywords.join(" ");
  const searchableText = normalize(
    [item.label, item.description, keywordText].join(" "),
  );

  let score = 0;

  score += scoreTextAgainstQuery({
    query,
    queryTokens,
    text: item.label,
    exactWeight: 1200,
    startsWithWeight: 950,
    includesWeight: 780,
    tokenWeight: 120,
    fuzzyWeight: 100,
  });

  score += scoreTextAgainstQuery({
    query,
    queryTokens,
    text: keywordText,
    exactWeight: 850,
    startsWithWeight: 700,
    includesWeight: 600,
    tokenWeight: 100,
    fuzzyWeight: 80,
  });

  score += scoreTextAgainstQuery({
    query,
    queryTokens,
    text: item.description,
    exactWeight: 450,
    startsWithWeight: 380,
    includesWeight: 320,
    tokenWeight: 55,
    fuzzyWeight: 40,
  });

  const matchedTokenCount = queryTokens.filter((token) =>
    searchableText.includes(token),
  ).length;

  if (queryTokens.length > 1 && matchedTokenCount === queryTokens.length) {
    score += 260;
  }

  if (queryTokens.length > 1 && matchedTokenCount > 0) {
    score += matchedTokenCount * 35;
  }

  return score;
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

function rankSearchResults(
  searchIndex: ReadonlyArray<SiteSearchItem>,
  query: string,
) {
  const scoredResults: ScoredSearchResult[] = searchIndex
    .map((item) => ({
      item,
      score: getSearchScore(item, query),
    }))
    .filter((result) => result.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      return a.item.label.localeCompare(b.item.label);
    });

  return uniqueResults(scoredResults.map((result) => result.item));
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

    return rankSearchResults(searchIndex, query);
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
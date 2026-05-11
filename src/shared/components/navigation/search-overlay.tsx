"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { siteContent } from "@/shared/content/site";

type SearchOverlayProps = {
  open: boolean;
  onClose: () => void;
};

const searchablePages = [
  {
    label: "Home",
    href: "/",
    description: "Student-first services marketplace.",
    keywords: ["home", "aany", "student", "services", "marketplace"],
  },
  {
    label: "Customers",
    href: "/customers",
    description: "Find services from students and trusted providers.",
    keywords: ["customers", "customer", "services", "request", "discover"],
  },
  {
    label: "Providers",
    href: "/providers",
    description: "Offer your skills in a trusted marketplace.",
    keywords: ["providers", "provider", "student", "services", "skills"],
  },
  {
    label: "About aany",
    href: "/about",
    description: "Learn about aany and the student-first direction.",
    keywords: ["about", "vision", "student-first", "marketplace"],
  },
  {
    label: "Support",
    href: "/support",
    description: "Get help with accounts, providers, reports, and requests.",
    keywords: ["support", "help", "reports", "disputes", "account"],
  },
  {
    label: "Account Deletion",
    href: "/account-deletion",
    description: "Request account deletion and privacy support.",
    keywords: ["account", "deletion", "delete", "privacy", "data"],
  },
  {
    label: "Privacy Policy",
    href: "/legal/privacy",
    description: "How aany handles personal information.",
    keywords: ["privacy", "data", "personal", "information", "policy"],
  },
  {
    label: "Terms of Service",
    href: "/legal/terms",
    description: "Rules for using aany.",
    keywords: ["terms", "service", "rules", "users"],
  },
  {
    label: "Provider Terms",
    href: "/legal/provider-terms",
    description: "Rules and expectations for providers.",
    keywords: ["provider", "terms", "rules", "verification", "services"],
  },
];

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);



  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return siteContent.navigation.searchQuickLinks.map((item) => ({
        label: item.label,
        href: item.href,
        description: "Quick link",
      }));
    }

    return searchablePages.filter((page) => {
      const searchableText = [
        page.label,
        page.description,
        ...page.keywords,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [query]);

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
        aria-label="Close search"
        onClick={() => {
  setQuery("");
  onClose();
}}
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
            placeholder="Search aany"
            className="h-full flex-1 bg-transparent text-2xl font-semibold text-[#171217] outline-none placeholder:text-black/30"
          />

          <button
            type="button"
            onClick={() => {
  setQuery("");
  onClose();
}}
            className="rounded-full px-4 py-2 text-sm font-semibold text-black/55 transition hover:bg-black/[0.06] hover:text-black"
          >
            Close
          </button>
        </div>

        <div className="border-t border-black/10 px-6 py-6">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-black/40">
            {query.trim() ? "Search results" : "Quick links"}
          </p>

          <div className="mt-4 grid gap-2">
            {results.length > 0 ? (
              results.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
  setQuery("");
  onClose();
}}
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
                No results found.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
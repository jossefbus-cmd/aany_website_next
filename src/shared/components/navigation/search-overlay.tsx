"use client";

import Link from "next/link";
import { useEffect } from "react";

import { siteContent } from "@/shared/content/site";

type SearchOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
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
        onClick={onClose}
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
            placeholder="Search aany"
            className="h-full flex-1 bg-transparent text-2xl font-semibold text-[#171217] outline-none placeholder:text-black/30"
          />

          <button
            type="button"
            onClick={onClose}
            className="rounded-full px-4 py-2 text-sm font-semibold text-black/55 transition hover:bg-black/[0.06] hover:text-black"
          >
            Close
          </button>
        </div>

        <div className="border-t border-black/10 px-6 py-6">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-black/40">
            Quick links
          </p>

          <div className="mt-4 grid gap-2">
            {siteContent.navigation.searchQuickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="rounded-2xl px-4 py-3 text-lg font-semibold text-[#171217] transition hover:bg-black/[0.05]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
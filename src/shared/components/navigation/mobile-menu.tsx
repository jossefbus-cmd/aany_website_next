"use client";

import Link from "next/link";
import { useEffect } from "react";

import { siteContent } from "@/shared/content/site";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
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
        "fixed inset-x-0 top-16 z-[70] md:hidden",
        "transition-all duration-300 ease-out",
        open
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-3 opacity-0",
      ].join(" ")}
    >
      <div className="bg-white/95 shadow-[0_18px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl">
        <nav
          className="mx-auto max-w-6xl px-5 py-5"
          aria-label="Mobile navigation"
        >
          <div className="grid gap-1">
            {siteContent.navigation.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="rounded-2xl px-4 py-4 text-2xl font-semibold text-[#171217] transition hover:bg-black/[0.05]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-4 border-t border-black/10 pt-4">
            <p className="px-4 text-xs font-bold uppercase tracking-[0.14em] text-black/40">
              Legal
            </p>

            <div className="mt-2 grid gap-1">
              {siteContent.navigation.legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="rounded-2xl px-4 py-3 text-base font-semibold text-black/60 transition hover:bg-black/[0.05] hover:text-black"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
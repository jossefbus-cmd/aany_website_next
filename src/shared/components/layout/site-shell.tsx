import type { ReactNode } from "react";

import { SiteFooter } from "@/shared/components/navigation/site-footer";
import { SiteHeader } from "@/shared/components/navigation/site-header";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#171217]">
      <SiteHeader />

      <main>{children}</main>

      <SiteFooter />
    </div>
  );
}
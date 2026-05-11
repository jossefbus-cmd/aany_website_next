import type { Metadata } from "next";
import "./globals.css";

import { SiteShell } from "@/shared/components/layout/site-shell";
import { buildMetadata } from "@/shared/seo/metadata";

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
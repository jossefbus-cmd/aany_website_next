import type { MetadataRoute } from "next";

import { siteConfig } from "@/shared/config/site";
import { locales } from "@/shared/i18n/locales";

const baseRoutes = [
  "",
  "/customers",
  "/providers",
  "/about",
  "/support",
  "/legal/privacy",
  "/legal/terms",
  "/legal/provider-terms",
  "/legal/community-guidelines",
  "/legal/verification-policy",
  "/legal/reports-and-disputes",
  "/legal/future-payments",
  "/account-deletion",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return locales.flatMap((locale) =>
    baseRoutes.map((route) => ({
      url: `${siteConfig.url}/${locale}${route}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages: {
          en: `${siteConfig.url}/en${route}`,
          th: `${siteConfig.url}/th${route}`,
        },
      },
    })),
  );
}
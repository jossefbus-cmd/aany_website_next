import type { MetadataRoute } from "next";

import { siteConfig } from "@/shared/config/site";

const routes = [
  siteConfig.links.home,
  siteConfig.links.customers,
  siteConfig.links.providers,
  siteConfig.links.about,
  siteConfig.links.support,
  siteConfig.links.privacy,
  siteConfig.links.terms,
  siteConfig.links.providerTerms,
  siteConfig.links.communityGuidelines,
  siteConfig.links.verificationPolicy,
  siteConfig.links.reportsAndDisputes,
  siteConfig.links.futurePayments,
  siteConfig.links.accountDeletion,
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: new URL(route, siteConfig.url).toString(),
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
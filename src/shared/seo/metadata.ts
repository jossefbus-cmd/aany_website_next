import type { Metadata } from "next";

import { siteConfig } from "@/shared/config/site";

type BuildMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
};

function removeLocalePrefix(path: string) {
  if (path === "/en" || path === "/th") {
    return "";
  }

  if (path.startsWith("/en/")) {
    return path.replace(/^\/en/, "");
  }

  if (path.startsWith("/th/")) {
    return path.replace(/^\/th/, "");
  }

  return path === "/" ? "" : path;
}

function buildLocalizedAlternates(path: string) {
  const route = removeLocalePrefix(path);

  return {
    en: `${siteConfig.url}/en${route}`,
    th: `${siteConfig.url}/th${route}`,
    "th-TH": `${siteConfig.url}/th${route}`,
    "x-default": `${siteConfig.url}/en${route}`,
  };
}

function resolveOpenGraphLocale(path: string) {
  if (path === "/th" || path.startsWith("/th/")) {
    return "th_TH";
  }

  return "en_US";
}

export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
}: BuildMetadataInput = {}): Metadata {
  const resolvedTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.title;

  const url = new URL(path, siteConfig.url).toString();

  return {
    title: resolvedTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
      languages: buildLocalizedAlternates(path),
    },
    openGraph: {
      title: resolvedTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: resolveOpenGraphLocale(path),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
    },
  };
}
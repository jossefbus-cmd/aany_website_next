import { NextRequest, NextResponse } from "next/server";

import {
  defaultLocale,
  isSupportedLocale,
  type Locale,
} from "@/shared/i18n/locales";

const PUBLIC_FILE_PATTERN = /\.(.*)$/;

function isBot(userAgent: string) {
  return /bot|crawler|spider|crawling|googlebot|bingbot|yandex|duckduckbot/i.test(
    userAgent,
  );
}

function hasLocalePrefix(pathname: string) {
  const firstSegment = pathname.split("/").filter(Boolean)[0];

  return Boolean(firstSegment && isSupportedLocale(firstSegment));
}

function getCountryCode(request: NextRequest) {
  return (
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry") ||
    request.headers.get("cloudfront-viewer-country") ||
    ""
  ).toUpperCase();
}

function getPreferredLocaleByCountry(request: NextRequest): Locale {
  const countryCode = getCountryCode(request);

  if (countryCode === "TH") {
    return "th";
  }

  return defaultLocale;
}

function shouldIgnorePath(pathname: string) {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/opengraph-image" ||
    pathname === "/twitter-image" ||
    PUBLIC_FILE_PATTERN.test(pathname)
  );
}

function redirectWithNoCache(request: NextRequest, locale: Locale) {
  const url = request.nextUrl.clone();
  const pathname = request.nextUrl.pathname;

  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  const response = NextResponse.redirect(url);

  response.headers.set("Cache-Control", "no-store, max-age=0");

  return response;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (shouldIgnorePath(pathname)) {
    return NextResponse.next();
  }

  // إذا المستخدم دخل /en أو /th صراحة، لا نغيّر اختياره.
  if (hasLocalePrefix(pathname)) {
    return NextResponse.next();
  }

  const userAgent = request.headers.get("user-agent") ?? "";

  // للبوتات نخلي الافتراضي إنجليزي حتى لا يحصل تذبذب في الأرشفة.
  if (isBot(userAgent)) {
    return redirectWithNoCache(request, defaultLocale);
  }

  const locale = getPreferredLocaleByCountry(request);

  return redirectWithNoCache(request, locale);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
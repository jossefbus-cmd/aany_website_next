import { NextRequest, NextResponse } from "next/server";

import { defaultLocale, isSupportedLocale, type Locale } from "@/shared/i18n/locales";

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

function getPreferredLocale(request: NextRequest): Locale {
  const countryCode = getCountryCode(request);
  const acceptLanguage = request.headers.get("accept-language")?.toLowerCase() ?? "";

  if (countryCode === "TH") {
    return "th";
  }

  if (acceptLanguage.includes("th")) {
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

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (shouldIgnorePath(pathname)) {
    return NextResponse.next();
  }

  if (hasLocalePrefix(pathname)) {
    return NextResponse.next();
  }

  const userAgent = request.headers.get("user-agent") ?? "";

  if (isBot(userAgent)) {
    const botUrl = request.nextUrl.clone();
    botUrl.pathname = `/en${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(botUrl);
  }

  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();

  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
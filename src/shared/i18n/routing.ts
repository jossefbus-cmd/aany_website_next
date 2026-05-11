import { defaultLocale, isSupportedLocale, type Locale } from "./locales";

export function getLocaleFromPathname(pathname: string): Locale {
  const firstSegment = pathname.split("/").filter(Boolean)[0];

  if (firstSegment && isSupportedLocale(firstSegment)) {
    return firstSegment;
  }

  return defaultLocale;
}

export function stripLocaleFromPathname(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment && isSupportedLocale(firstSegment)) {
    const rest = segments.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }

  return pathname || "/";
}

export function localizeHref(href: string, locale: Locale): string {
  if (href.startsWith("http")) {
    return href;
  }

  const cleanHref = href === "/" ? "" : href;
  return `/${locale}${cleanHref}`;
}

export function switchLocalePath(pathname: string, locale: Locale): string {
  const pathWithoutLocale = stripLocaleFromPathname(pathname);
  return localizeHref(pathWithoutLocale, locale);
}
import { notFound } from "next/navigation";

import { LocalizedSupportPage } from "@/features/support/localized-support-page";
import { getDictionary } from "@/shared/i18n/get-dictionary";
import { isSupportedLocale, locales, type Locale } from "@/shared/i18n/locales";
import { buildMetadata } from "@/shared/seo/metadata";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale);

  return buildMetadata({
    title: dictionary.support.hero.title,
    description: dictionary.support.hero.body,
    path: `/${locale}/support`,
  });
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale as Locale);

  return <LocalizedSupportPage dictionary={dictionary} />;
}
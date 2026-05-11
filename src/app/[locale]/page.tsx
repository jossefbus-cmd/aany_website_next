import { notFound } from "next/navigation";

import { LocalizedHomePage } from "@/features/home/localized-home-page";
import { getDictionary } from "@/shared/i18n/get-dictionary";
import { isSupportedLocale, locales, type Locale } from "@/shared/i18n/locales";
import { buildMetadata } from "@/shared/seo/metadata";

type LocalizedPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({ params }: LocalizedPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale);

  return buildMetadata({
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    path: `/${locale}`,
  });
}

export default async function Page({ params }: LocalizedPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale as Locale);

  return <LocalizedHomePage dictionary={dictionary} locale={locale} />;
}
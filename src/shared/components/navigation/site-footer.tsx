import Link from "next/link";

import { siteContent } from "@/shared/content/site";

const footerColumns = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "Customers", href: "/customers" },
      { label: "Providers", href: "/providers" },
      { label: "About aany", href: "/about" },
    ],
  },
  {
    title: "Marketplace",
    links: [
      { label: "Student-first services", href: "/about" },
      { label: "For customers", href: "/customers" },
      { label: "For providers", href: "/providers" },
      { label: "Support center", href: "/support" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Support center", href: "/support" },
      { label: "Account help", href: "/support" },
      { label: "Reports and disputes", href: "/support" },
      { label: "Account deletion", href: "/account-deletion" },
    ],
  },
  {
    title: "Legal",
    links: siteContent.navigation.legal,
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-[#ededed] px-7 py-10">
      <div className="mx-auto max-w-6xl">
        <p className="max-w-4xl text-sm leading-7 text-black/55">
          Aany is a student-first services marketplace operated by Al Aziz Co., Ltd. The platform is designed to highlight student providers while remaining open to trusted non-student providers.
        </p>

        <div className="my-7 h-px bg-black/10" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-bold text-[#171217]">
                {column.title}
              </h2>

              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium leading-6 text-black/55 transition hover:text-black"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="my-7 h-px bg-black/10" />

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-black/55">
          <span>© 2026 Al Aziz Co., Ltd. All rights reserved.</span>

          <Link href="/legal/privacy" className="hover:text-black">
            Privacy
          </Link>

          <Link href="/legal/terms" className="hover:text-black">
            Terms
          </Link>

          <Link href="/legal/provider-terms" className="hover:text-black">
            Provider Terms
          </Link>

          <Link href="/support" className="hover:text-black">
            Support
          </Link>

          <Link href="/account-deletion" className="hover:text-black">
            Account Deletion
          </Link>
        </div>
      </div>
    </footer>
  );
}
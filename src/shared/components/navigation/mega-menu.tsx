import Link from "next/link";

import { siteContent } from "@/shared/content/site";

type MegaMenuProps = {
  activeHref: string | null;
  onClose: () => void;
};

type MegaColumn = {
  title: string;
  links: ReadonlyArray<{
    readonly label: string;
    readonly href: string;
  }>;
  primary?: boolean;
};

function getColumns(activeHref: string | null): MegaColumn[] {
  if (activeHref === "/customers") {
    return [
      {
        title: "For customers",
        primary: true,
        links: [
          { label: "Discover services", href: "/customers" },
          { label: "How requests work", href: "/customers" },
          { label: "Support center", href: "/support" },
        ],
      },
      {
        title: "Helpful topics",
        links: [
          { label: "Student-first marketplace", href: "/about" },
          { label: "Privacy Policy", href: "/legal/privacy" },
          { label: "Account deletion", href: "/account-deletion" },
        ],
      },
      {
        title: "Explore",
        links: [
          { label: "Providers", href: "/providers" },
          { label: "Terms of Service", href: "/legal/terms" },
          { label: "Support", href: "/support" },
        ],
      },
    ];
  }

  if (activeHref === "/providers") {
    return [
      {
        title: "For providers",
        primary: true,
        links: [
          { label: "Provider basics", href: "/providers" },
          { label: "Create services", href: "/providers" },
          { label: "Build trust", href: "/providers" },
        ],
      },
      {
        title: "Provider rules",
        links: [
          { label: "Provider Terms", href: "/legal/provider-terms" },
          { label: "Verification basics", href: "/providers" },
          { label: "Reports and disputes", href: "/support" },
        ],
      },
      {
        title: "Marketplace",
        links: [
          { label: "Customers", href: "/customers" },
          { label: "About aany", href: "/about" },
          { label: "Support", href: "/support" },
        ],
      },
    ];
  }

  if (activeHref === "/about") {
    return [
      {
        title: "About aany",
        primary: true,
        links: [
          { label: "Our vision", href: "/about" },
          { label: "Student-first, not student-only", href: "/about" },
          { label: "Trust foundation", href: "/about" },
        ],
      },
      {
        title: "Explore",
        links: [
          { label: "Customers", href: "/customers" },
          { label: "Providers", href: "/providers" },
          { label: "Support", href: "/support" },
        ],
      },
      {
        title: "Legal",
        links: siteContent.navigation.legal,
      },
    ];
  }

  if (activeHref === "/support") {
    return [
      {
        title: "Explore Support",
        primary: true,
        links: [
          { label: "Support center", href: "/support" },
          { label: "Account help", href: "/support" },
          { label: "Reports and disputes", href: "/support" },
          { label: "Account deletion", href: "/account-deletion" },
        ],
      },
      {
        title: "Get help",
        links: [
          { label: "Privacy questions", href: "/legal/privacy" },
          { label: "Provider questions", href: "/providers" },
          { label: "Terms of Service", href: "/legal/terms" },
        ],
      },
      {
        title: "Helpful topics",
        links: [
          { label: "Customers", href: "/customers" },
          { label: "Providers", href: "/providers" },
          { label: "About aany", href: "/about" },
        ],
      },
    ];
  }

  return [
    {
      title: "Explore aany",
      primary: true,
      links: [
        { label: "Home", href: "/" },
        { label: "Customers", href: "/customers" },
        { label: "Providers", href: "/providers" },
        { label: "About aany", href: "/about" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Support center", href: "/support" },
        { label: "Account deletion", href: "/account-deletion" },
      ],
    },
    {
      title: "Legal",
      links: siteContent.navigation.legal,
    },
  ];
}

export function MegaMenu({ activeHref, onClose }: MegaMenuProps) {
  const open = activeHref !== null;
  const columns = getColumns(activeHref);

  return (
  <div
    className={[
      "hidden overflow-hidden bg-white/95 backdrop-blur-xl md:block",
      "transition-[max-height,opacity,transform] duration-500 ease-out",
      open
        ? "max-h-[360px] translate-y-0 opacity-100"
        : "max-h-0 -translate-y-2 opacity-0",
    ].join(" ")}
  >
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-16 px-7 pb-10 pt-8">
        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-sm font-semibold text-black/45">
              {column.title}
            </p>

            <div className="mt-4 grid gap-3">
              {column.links.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  onClick={onClose}
                  className={[
                    "font-semibold text-[#171217] transition hover:text-black/65",
                    column.primary ? "text-2xl leading-tight" : "text-base",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
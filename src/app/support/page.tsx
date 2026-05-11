import { SupportPage } from "@/features/support/page";
import { buildMetadata } from "@/shared/seo/metadata";

export const metadata = buildMetadata({
  title: "Support",
  description:
    "Get help with aany accounts, providers, service requests, reports, privacy, and account deletion.",
  path: "/support",
});

export default function Page() {
  return <SupportPage />;
}
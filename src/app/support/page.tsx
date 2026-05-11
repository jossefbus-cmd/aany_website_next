import type { Metadata } from "next";
import { SupportPage } from "@/features/support/page";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with aany accounts, providers, service requests, reports, privacy, and account deletion.",
};

export default function Page() {
  return <SupportPage />;
}
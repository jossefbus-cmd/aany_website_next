import type { Metadata } from "next";
import { ProvidersPage } from "@/features/providers/page";

export const metadata: Metadata = {
  title: "Providers",
  description:
    "Offer services through aany, a student-first marketplace open to trusted providers.",
};

export default function Page() {
  return <ProvidersPage />;
}
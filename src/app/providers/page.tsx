import { ProvidersPage } from "@/features/providers/page";
import { buildMetadata } from "@/shared/seo/metadata";

export const metadata = buildMetadata({
  title: "Providers",
  description:
    "Offer services through aany, a student-first marketplace open to trusted providers.",
  path: "/providers",
});

export default function Page() {
  return <ProvidersPage />;
}
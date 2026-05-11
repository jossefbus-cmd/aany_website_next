import { LegalPageShell } from "@/features/legal/components/legal-page-shell";
import { futurePaymentsContent } from "@/features/legal/future-payments-content";
import { buildMetadata } from "@/shared/seo/metadata";

export const metadata = buildMetadata({
  title: "Future Payments and Fees",
  description:
    "Learn how future payment, wallet, fee, commission, payout, or settlement features may require additional terms.",
  path: "/legal/future-payments",
});

export default function Page() {
  return (
    <LegalPageShell
      eyebrow={futurePaymentsContent.eyebrow}
      title={futurePaymentsContent.title}
      body={futurePaymentsContent.body}
      sections={futurePaymentsContent.sections}
    />
  );
}
import { AccountDeletionPage } from "@/features/account-deletion/page";
import { buildMetadata } from "@/shared/seo/metadata";

export const metadata = buildMetadata({
  title: "Account Deletion",
  description:
    "Learn how aany users can request account deletion and related privacy support.",
  path: "/account-deletion",
});

export default function Page() {
  return <AccountDeletionPage />;
}
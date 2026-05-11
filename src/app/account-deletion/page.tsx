import type { Metadata } from "next";
import { AccountDeletionPage } from "@/features/account-deletion/page";

export const metadata: Metadata = {
  title: "Account Deletion",
  description:
    "Learn how aany users will be able to request account deletion.",
};

export default function Page() {
  return <AccountDeletionPage />;
}
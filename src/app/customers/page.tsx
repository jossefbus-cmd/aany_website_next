import type { Metadata } from "next";
import { CustomersPage } from "@/features/customers/page";

export const metadata: Metadata = {
  title: "Customers",
  description:
    "Find services from students and trusted providers through aany.",
};

export default function Page() {
  return <CustomersPage />;
}
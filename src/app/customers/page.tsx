import { CustomersPage } from "@/features/customers/page";
import { buildMetadata } from "@/shared/seo/metadata";

export const metadata = buildMetadata({
  title: "Customers",
  description:
    "Find services from students and trusted providers through aany.",
  path: "/customers",
});

export default function Page() {
  return <CustomersPage />;
}
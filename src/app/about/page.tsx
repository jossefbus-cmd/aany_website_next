import { AboutPage } from "@/features/about/page";
import { buildMetadata } from "@/shared/seo/metadata";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn about aany, a student-first services marketplace built to support student opportunity.",
  path: "/about",
});

export default function Page() {
  return <AboutPage />;
}
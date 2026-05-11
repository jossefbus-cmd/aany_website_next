import type { Metadata } from "next";
import { AboutPage } from "@/features/about/page";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about aany, a student-first services marketplace built to support student opportunity.",
};

export default function Page() {
  return <AboutPage />;
}
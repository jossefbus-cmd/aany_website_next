import { permanentRedirect } from "next/navigation";

export function redirectToEnglish(path: string) {
  permanentRedirect(`/en${path}`);
}
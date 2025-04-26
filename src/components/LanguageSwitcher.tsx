"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  const otherLocale = locale === "fr" ? "en" : "fr";
  const newPath = pathname.replace(/^\/(fr|en)/, "/" + otherLocale);

  return <Link className="text-blue-700" href={newPath}>{otherLocale.toUpperCase()}</Link>;
}

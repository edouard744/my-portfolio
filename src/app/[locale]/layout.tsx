import { ReactNode } from "react";
import { notFound } from "next/navigation";
import "@/app/globals.css";
import { Poppins } from "next/font/google";
const locales = ["fr", "en"];

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
type Params = Promise<{ locale: string }>;
export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Params;
}) {
  const p = await params;
  const locale = p.locale;

  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}

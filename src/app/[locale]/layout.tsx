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
export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}

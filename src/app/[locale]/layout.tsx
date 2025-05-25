import { ReactNode } from "react";
import { notFound } from "next/navigation";
import "@/app/globals.css";
import { Poppins } from "next/font/google";
import type { Locale } from "@/lib/i18n/types";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
const locales = ["fr", "en"];

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

type Params = Promise<{ locale: Locale }>;
export async function generateMetadata({ params }: { params: Params }) {
  const p = await params;
  const locale = p.locale;

  const metadata = {
    en: {
      title: "Edouard Willems - Portfolio Full-Stack Developer",
      description: "Showcasing my skills and achievements in web development",
    },
    fr: {
      title: "Edouard Willems - Portfolio Développeur Full-Stack",
      description:
        "Présentation de mes compétences et réalisations en développement web",
    },
  };

  return {
    title: metadata[locale].title,
    description: metadata[locale].description,
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/icon.png', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-icon.png', type: 'image/png' },
      ],
      shortcut: ['/favicon.ico'],
    },
    manifest: '/manifest.json',
  };
}
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
      <body className="bg-white">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

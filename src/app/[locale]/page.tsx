import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/types";
import Hero from "@/components/Home/Hero";
import { Nav } from "@/components/Nav";
import About from "@/components/Home/About";
import Projects from "@/components/Home/Project";
import ContactSection from "@/components/Home/Contact";
import Footer from "@/components/Home/Footer";

type Params = Promise<{ locale: Locale }>;

export default async function Home({ params }: { params: Params }) {
  const p = await params;
  const locale = p.locale;

  const t = await getDictionary(locale);

  return (
    <>
      <main className="bg-white text-gray-900 scroll-smooth">
        <Nav t={t} />
        <Hero t={t} />
        <About t={t} />
        <Projects t={t} />
        <ContactSection t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}

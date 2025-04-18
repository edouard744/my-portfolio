// app/[locale]/page.tsx
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/types";
import Hero from "@/components/Home/Hero";
import { Nav } from "@/components/Nav";
import About from "@/components/Home/About";

type Props = {
  params: { locale: Locale };
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const t = await getDictionary(locale);

  return (
    <main className="bg-white text-gray-900 scroll-smooth">
      <Nav t={t}/>
      <Hero t={t} />
      <About t={t}/>

      <section id="projects" className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Edouard. All right reserved.
      </footer>
    </main>
  );
}

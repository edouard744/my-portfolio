import { getDictionary } from "@/lib/i18n/getDictionary";
import Footer from "@/components/Home/Footer";
import { Locale } from "@/lib/i18n/types";
import { Nav } from "@/components/Nav";

type Params = Promise<{ locale: Locale }>;
export default async function MentionsLegales({ params }: { params: Params }) {
  const p = await params;
  const locale = p.locale;

  const t = await getDictionary(locale);
  return (
    <>
      <header>
        <Nav t={t} />
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-6 py-8">
            <h1 className="text-6xl font-bold text-center text-blue-900 mb-8">
              {t.legal.title}
            </h1>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-blue-700 border-b border-gray-200 pb-2 mb-4">
                {t.legal.identity.title}
              </h2>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>{t.legal.identity.owner}</strong> Willems Edouard
                </p>
                <p>
                  <strong>{t.legal.identity.address.title}</strong>{" "}
                  {t.legal.identity.address.content}
                </p>
                <p>
                  <strong>{t.legal.identity.phone}</strong> 0498043730{" "}
                </p>
                <p>
                  <strong>{t.legal.identity.email}</strong>{" "}
                  contact@willems-edouard.be{" "}
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-blue-700 border-b border-gray-200 pb-2 mb-4">
                {t.legal.hosting.title}
              </h2>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>{t.legal.hosting.name}</strong> Hostinger
                </p>
                <p>
                  <strong>{t.legal.hosting.address}</strong> Švitrigailos str.
                  34, Vilnius 03230 Lithuania
                </p>
                <p>
                  <strong>{t.legal.hosting.phone}</strong> +37064503378
                </p>
                <p>
                  <strong>{t.legal.hosting.website}</strong>{" "}
                  https://www.hostinger.fr
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-blue-700 border-b border-gray-200 pb-2 mb-4">
                {t.legal.intellectualProperty.title}
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>{t.legal.intellectualProperty.paragraph1}</p>
                <p>{t.legal.intellectualProperty.paragraph2}</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-blue-700 border-b border-gray-200 pb-2 mb-4">
                {t.legal.personalData.title}
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>{t.legal.personalData.introduction}</p>

                <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                  {t.legal.personalData.collection.title}
                </h3>
                <p>{t.legal.personalData.collection.introduction}</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>{t.legal.personalData.collection.connectionData}</li>
                  <li>{t.legal.personalData.collection.formData}</li>
                </ul>

                <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">
                  {t.legal.personalData.cookies.title}
                </h3>
                <p>{t.legal.personalData.cookies.description}</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-blue-700 border-b border-gray-200 pb-2 mb-4">
                {t.legal.hyperlinks.title}
              </h2>
              <div className="text-gray-700">
                <p>{t.legal.hyperlinks.description}</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-blue-700 border-b border-gray-200 pb-2 mb-4">
                {t.legal.applicableLaw.title}
              </h2>
              <div className="text-gray-700">
                <p>{t.legal.applicableLaw.description}</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-blue-700 border-b border-gray-200 pb-2 mb-4">
                {t.legal.contact.title}
              </h2>
              <div className="text-gray-700">
                <p>{t.legal.contact.description}</p>
              </div>
            </section>

            <div className="mt-10 pt-6 border-t border-gray-200 text-gray-600 text-center">
              <p>{t.legal.lastUpdate} 24/04/2025</p>
            </div>
          </div>
        </div>
      </main>

      <Footer t={t} />
    </>
  );
}


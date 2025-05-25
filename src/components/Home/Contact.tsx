import Link from "next/link";
import { WavingIcon } from "../Icons/waving";

export default function ContactSection({ t }: { t: any }) {
  return (
    <section className="bg-gray-50 py-32">
      <div className="px-4 md:mx-auto flex flex-col flex-wrap items-center md:max-w-7xl">
        <h2 className="mb-6 text-center text-2xl s:text-3xl lg:max-w-4xl md:max-w-lg xl:max-w-full font-medium text-gray-900 lg:text-5xl animate-on-scroll animate-slide-down duration-500">
          {t.contact.title}
          <span className="inline-block ml-2 animate-wave">
            <WavingIcon size={50} />
          </span>
        </h2>

        <p className="mb-8 text-center sm:text-2xl text-blue-900 font-semibold max-w-3xl animate-on-scroll animate-slide-up duration-500 delay-200">
          {t.contact.subtitle}
        </p>

        <div className="text-center animate-on-scroll animate-scale duration-500 delay-400">
          <Link
            href="mailto:contact@willems-edouard.be"
            className="mx-auto block w-max rounded-full px-10 py-4 text-white bg-blue-700 border-2 border-blue-700 overflow-hidden transition-all duration-150 hover:bg-white hover:text-blue-700 hover:scale-105 focus:bg-white focus:text-blue-700 focus:scale-105 hover:shadow-xl focus:shadow-xl"
          >
            {t.contact.button}
          </Link>
        </div>
      </div>
    </section>
  );
}

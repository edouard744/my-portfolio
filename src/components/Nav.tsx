import Link from "next/link";
import LogoIcon from "./Icons/logo";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Nav({ t }: { t: any }) {
  return (
    <nav
      role="navigation"
      className="flex justify-between flex-wrap items-center pt-10 pb-4 px-6 max-w-6xl mx-auto direct-animate-slide-down direct-animate-delay-600"
    >
      <div className="flex items-center gap-4 hover:scale-105 transition-all duration-150">
        <Link
          href="/"
          aria-label={t.nav.linklabel}
          className="text-2xl font-semibold flex items-center gap-2"
        >
          <LogoIcon size={60} />
          <span className="text-blue-800 hidden md:inline">{t.nav.name}</span>
        </Link>
      </div>
      <div className="flex font-medium items-center gap-8">
        <a
          href="#about"
          className="text-gray-800 hover:text-blue-600 focus:text-blue-600 hover:scale-105 focus:scale-105  sm:inline hidden transition-all duration-150"
        >
          {t.nav.about}
        </a>
        <a
          href="#projects"
          className="text-gray-800 hover:text-blue-600 focus:text-blue-600 hover:scale-105 focus:scale-105 sm:inline hidden transition-all duration-150"
        >
          {t.nav.projects}
        </a>
        <a
          href="mailto:contact@willems-edouard.be"
          className="border-2 border-blue-700 py-1.5 px-6 rounded-2xl hover:bg-blue-700 focus:bg-blue-700 text-blue-700 hover:text-white focus:text-white hover:border-blue-700 focus:border-blue-700 sm:inline hover:shadow-xl hover:scale-105 transition-all duration-150"
        >
          {t.nav.contact}
        </a>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}

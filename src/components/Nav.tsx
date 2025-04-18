import Link from "next/link";
import LogoIcon from "./Icons/logo";

export function Nav({ t }: { t: any }) {
  return (
    <nav className="flex justify-between items-center pt-10 pb-4 px-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-4">
        <Link
          href="/"
          aria-label={t.nav.linklabel}
          className="text-2xl font-semibold flex items-center gap-2"
        >
          <LogoIcon size={60} aria-hidden="true" />
          <span className="text-blue-800 hidden sm:inline">{t.nav.name}</span>
        </Link>
      </div>
      <div className="flex font-medium items-center gap-8">
        <a href="#about" className="text-gray-800 hover:text-blue-600 sm:inline hidden">
          {t.nav.about}
        </a>
        <a href="#projects" className="text-gray-800 hover:text-blue-600 sm:inline hidden">
          {t.nav.projects}
        </a>
        <a
          href="mailto:contact@willems-edouard.be"
          className="border-2 border-blue-700 py-1.5 px-6 rounded-2xl hover:bg-blue-700 text-blue-700 hover:text-white hover:border-blue-700 sm:inline"
        >
          {t.nav.contact}
        </a>
      </div>
    </nav>
  );
}

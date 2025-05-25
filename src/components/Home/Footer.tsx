import Link from "next/link";
import { GithubIcon } from "../Icons/github";
import { LinkedinIcon } from "../Icons/linkedIn";

export default function Footer({ t }: { t: any }) {
  return (
    <footer className="bg-blue-900 overflow-hidden px-4 pb-24 text-white md:px-8">
      <h2 className="sr-only">{t.footer.title}</h2>

      <div className="mx-auto mb-14 flex max-w-7xl gap-4 border-b-2 px-10 pt-10 pb-4 lg:px-0 items-center animate-on-scroll animate-slide-up duration-500 delay-200">
        <svg
          className="animate-on-scroll animate-scale duration-700 hover:scale-105 focus:scale-105 hover:duration-300 focus:duration-300"
          width={50}
          height={50}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" fill="none" />
          <path
            d="M20.6772 14.2921L20.3528 14.1249C19.1472 13.5036 17.6737 13.9919 17.0615 15.2154L9.8259 29.6771C9.21373 30.9006 9.6948 32.3961 10.9004 33.0174L11.2248 33.1845C12.4304 33.8058 13.904 33.3176 14.5161 32.0941L21.7517 17.6323C22.3639 16.4088 21.8828 14.9133 20.6772 14.2921Z"
            fill="#fff"
          />
          <path
            d="M29.3071 14.2926L28.9827 14.1254C27.7771 13.5041 26.3035 13.9923 25.6914 15.2159L18.4558 29.6776C17.8436 30.9011 18.3247 32.3966 19.5303 33.0179L19.8547 33.185C21.0603 33.8063 22.5339 33.3181 23.146 32.0945L30.3816 17.6328C30.9938 16.4093 30.5127 14.9138 29.3071 14.2926Z"
            fill="#fff"
          />
          <path
            d="M7.96891 27.1709L4.38944 19.7074C4.1791 19.269 4.04646 18.794 4.01235 18.3074C3.93845 17.2863 4.15257 15.692 5.86557 14.5824C7.0783 13.7978 8.68139 13.6459 10.1499 14.5709C10.9591 15.0805 12.5129 16.5363 11.8724 19.0401C11.7777 19.4113 11.6318 19.767 11.4631 20.1093L7.96701 27.169L7.96891 27.1709Z"
            fill="#fff"
          />
          <path
            d="M42.3692 28.421H34.314H27.7538L25.082 33.7595H42.3673C43.8207 33.7595 44.9975 32.5633 44.9975 31.0903C44.9975 29.6153 43.8188 28.421 42.3673 28.421H42.3692Z"
            fill="#fff"
          />
          <path
            d="M38.6514 21.1306H31.4091L28.7373 26.4691H38.6514C40.1048 26.4691 41.2816 25.2729 41.2816 23.7998C41.2816 22.3248 40.1029 21.1306 38.6514 21.1306Z"
            fill="#fff"
          />
          <path
            d="M42.3694 13.7614H35.0569L32.4287 19.0152V19.0998H34.5131H42.3675C43.8209 19.0998 44.9976 17.9037 44.9976 16.4306C44.9976 14.9575 43.819 13.7614 42.3675 13.7614H42.3694Z"
            fill="#fff"
          />
        </svg>
        <span className="text-2xl sm:inline hidden font-semibold animate-on-scroll animate-slide-up duration-500 delay-400">
          Willems Edouard
        </span>
      </div>

      <div className="mx-auto  flex max-w-7xl flex-col px-10 md:flex-row md:justify-between lg:px-0">
        <div className="mb-10 flex flex-col justify-center gap-6 md:justify-start animate-on-scroll animate-slide-up duration-500">
          <span className="text-xl font-bold">{t.nav.footer.navigation}</span>

          <Link
            className="hover:text-blue-300 focus:text-blue-300 duration-200 hover:translate-x-1.5 focus:translate-x-1.5 hover:underline focus:underline"
            href="#about"
          >
            {t.nav.about}
          </Link>

          <Link
            className="hover:text-blue-300 focus:text-blue-300 duration-200 hover:translate-x-1.5 focus:translate-x-1.5 hover:underline focus:underline"
            href="#projects"
          >
            {t.nav.projects}
          </Link>
        </div>

        <div className="flex mb-10 min-w-32 flex-col gap-4 pb-4 animate-on-scroll animate-slide-up duration-500 delay-100 ">
          <span className="text-xl font-semibold">{t.nav.footer.social}</span>
          <div className="flex gap-2">
            <a
              className=" hover:scale-105 focus:scale-105 focus:rotate-5 hover:rotate-5 hover:duration-300 focus:duration-300"
              href="https://github.com"
              target="blank"
              aria-label="GitHub"
            >
              <GithubIcon fill="#fff" size={40} />
            </a>
            <a
              className=" hover:scale-105 focus:scale-105 focus:-rotate-5 hover:-rotate-5 hover:duration-300 focus:duration-300"
              href="https://linkedin.com"
              target="blank"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={40} />
            </a>
          </div>
        </div>

        <div className="mb-10 flex flex-col justify-center gap-6 md:justify-start animate-on-scroll animate-slide-up duration-500 delay-200">
          <span className="text-xl font-bold">{t.nav.footer.info}</span>
          <a
            className="hover:text-blue-300 focus:text-blue-300 duration-200 hover:translate-x-1.5 focus:translate-x-1.5 hover:underline focus:underline"
            href="mailto:contact@willems-edouard.be"
          >
            contact@willems-edouard.be
          </a>
          <a
            href="tel:+32498043730"
            className="hover:text-blue-300 focus:text-blue-300 duration-200 hover:translate-x-1.5 focus:translate-x-1.5 hover:underline focus:underline"
          >
            +32 498 04 37 30
          </a>
        </div>
      </div>

      <div className="mx-auto mb-10 flex max-w-7xl flex-col justify-center gap-6 border-t-2 px-10 py-10 md:mb-0 md:flex-row md:items-center md:justify-end lg:justify-between lg:px-0 animate-on-scroll animate-slide-up duration-500">
        <span>© Willems Edouard {new Date().getFullYear()}</span>
        <div className="animate-on-scroll animate-scale duration-500 hover:scale-105 focus:scale-105 hover:duration-300 focus:duration-300">
          <Link
            className="hover:text-blue-300 focus:text-blue-300 duration-200 hover:translate-x-1.5 focus:translate-x-1.5 hover:underline focus:underline"
            href="/legal-mentions"
          >
            {t.footer.legal}
          </Link>
        </div>
      </div>
    </footer>
  );
}

// components/Hero.jsx
import ProfilePic from "@/app/assets/profile.jpeg";
import Image from "next/image";
import { GithubIcon } from "../Icons/github";
import { LinkedinIcon } from "../Icons/linkedIn";

export default function Hero({ t }: { t: any }) {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-20 pt-20 pb-80 px-6 max-w-7xl mx-auto">
      {/* Image avec animation scale */}
      <div className="w-40 xs:w-72 justify-center aspect-square relative direct-animate-scale">
        <Image
          src={ProfilePic}
          alt={t.hero.alt}
          fill
          priority
          className="rounded-full object-cover shadow-lg"
        />
      </div>

      <div className="text-center flex flex-col items-center md:text-left lg:block">
        {/* Titre avec animation slide up */}
        <h1 className="xs:text-6xl text-4xl text-center lg:text-left font-bold mb-6 leading-[1.5] lg:leading-[1.2] direct-animate-slide-up direct-animate-delay-200">
          <span className="sm:pr-2">{t.hero.title.hi}</span>
          <br className="sm:hidden lg:block" />
          {t.hero.title.iam}
          <br className="lg:hidden" />
          {/* Le nom peut avoir sa propre animation séparée si vous voulez */}
          <span className="lg:ml-4 bg-blue-800 text-white px-4 rounded-2xl">
            {t.hero.title.firstname}
          </span>
        </h1>

        {/* Sous-titre avec animation slide right */}
        <p className="text-2xl font-semibold text-blue-800 mb-4 text-center max-w-sm lg:max-w-screen direct-animate-slide-right direct-animate-delay-400">
          {t.hero.subtitle}
        </p>

        {/* Icônes sociales avec animation slide up */}
        <div className="flex justify-center lg:justify-start gap-4 direct-animate-slide-up direct-animate-delay-600">
          <a
            href="https://github.com/edouard744"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:scale-125 focus:scale-125 focus:rotate-5 hover:rotate-5 transition-all duration-300"
          >
            <GithubIcon fill="#fff" size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/edouard-willems/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:scale-125 focus:scale-125 focus:-rotate-5 hover:-rotate-5 transition-all duration-300"
          >
            <LinkedinIcon size={40} />
          </a>
        </div>
      </div>
    </section>
  );
}


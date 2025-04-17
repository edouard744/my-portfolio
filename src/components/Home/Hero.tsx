import ProfilePic from "@/app/assets/profile.jpg";
import Image from "next/image";
import { GithubIcon } from "../Icons/github";
import { LinkedinIcon } from "../Icons/linkedIn";
export default function Hero({ t }: { t: any }) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 py-20 px-6 max-w-7xl mx-auto">
      <div className="flex-shrink-0 ">
        <Image
          src={ProfilePic}
          alt={t.hero.alt}
          className="w-40 h-40 md:w-52 md:h-52 lg:h-72 lg:w-72 rounded-full object-cover shadow-lg"
        />
      </div>

      {/* Text content */}
      <div className="text-center md:text-left">
        <h1 className="text-6xl font-bold mb-6 leading-[1.2]">
          {t.hero.title.hi}
          <br />
          {t.hero.title.iam}
          <span className="ml-4 bg-blue-800 text-white px-4 rounded-2xl">
            {t.hero.title.firstname}
          </span>
        </h1>
        <p className="text-2xl font-semibold text-blue-800 mb-4">
          {t.hero.subtitle}
        </p>
        <div className="flex justify-center  md:justify-start gap-4">
          <a href="https://github.com" aria-label="GitHub">
            <GithubIcon size={30} />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn">
            <LinkedinIcon size={30} />
          </a>
        </div>
      </div>
    </section>
  );
}

import ProfilePic from "@/app/assets/profile.jpg";
import Image from "next/image";
import { GithubIcon } from "../Icons/github";
import { LinkedinIcon } from "../Icons/linkedIn";
export default function Hero({ t }: { t: any }) {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-10 py-20 px-6 max-w-7xl mx-auto ">
     <div className="w-40 xs:w-72 justify-center   aspect-square relative">
  <Image
    src={ProfilePic}
    alt={t.hero.alt}
    fill
    className="rounded-full object-cover shadow-lg"
  />
</div>
      <div className="text-center flex flex-col items-center md:text-left lg:block ">
        <h1 className="xs:text-6xl text-4xl text-center lg:text-left font-bold mb-6 leading-[1.5] lg:leading-[1.2]">
          <span className=" sm:pr-2">{t.hero.title.hi}</span>
          <br className="sm:hidden lg:block"/>
          {t.hero.title.iam}
          <br className="lg:hidden"/>
          <span className="lg:ml-4  bg-blue-800 text-white px-4 rounded-2xl">
            {t.hero.title.firstname}
          </span>
        </h1>
        <p className="text-2xl font-semibold text-blue-800 mb-4 text-center max-w-sm lg:max-w-screen">
          {t.hero.subtitle}
        </p>
        <div className="flex justify-center  lg:justify-start gap-4">
          <a href="https://github.com" aria-label="GitHub">
            <GithubIcon size={40} />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn">
            <LinkedinIcon size={40} />
          </a>
        </div>
      </div>
    </section>
  );
}

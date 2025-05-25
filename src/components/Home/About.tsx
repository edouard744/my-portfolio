import Image from "next/image";
import { MailIcon } from "../Icons/mail";
import { PhoneIcon } from "../Icons/tel";

export default function About({ t }: { t: any }) {
  return (
    <section
      id="about"
      className="text-gray-50 bg-gray-900 flex flex-col items-center direct-animate-slide-up-xl"
    >
      <div className="max-w-7xl grid lg:grid-cols-3 lg:grid-rows-[min-content_1fr] py-20 mx-8">
        <div className="max-w-2xl border-b-2 border-dotted lg:pr-10 border-gray-50 pb-10 mb-10 lg:mb-0 lg:h-min lg:col-span-2">
          <h2 className="text-4xl s:text-6xl font-semibold mb-8 animate-on-scroll animate-slide-up duration-500">
            {t.about.title}
          </h2>
          <div className="flex flex-col gap-4 ">
            <p className="text-justify animate-on-scroll animate-slide-up duration-500">
              {t.about.subtitle.first}
            </p>
            <p className="text-justify animate-on-scroll animate-slide-up duration-500">
              {t.about.subtitle.second}
            </p>
            <p className="text-justify animate-on-scroll animate-slide-up duration-500">
              {t.about.subtitle.third}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:mx-auto lg:grid-cols-1 lg:mb-0 mb-10 lg:pl-10 lg:border-l-2 border-dotted border-gray-50 lg:row-span-2">
          <div>
            <h3 className="text-2xl mb-4 font-semibold animate-on-scroll animate-slide-up duration-500">
              {t.about.skills.first}
            </h3>
            <div className="mb-6">
              <ul className="space-y-4">
                {[
                  {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
                    alt: "TypeScript",
                    text: "JavaScript / TypeScript",
                  },
                  {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                    alt: "React",
                    text: "React / React Native",
                  },
                  {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
                    alt: "Node.js",
                    text: "Node.js",
                  },
                  {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
                    alt: "PHP Laravel",
                    text: "PHP / Laravel",
                  },
                  {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
                    alt: "SQL",
                    text: "SQL ( MySQL, PostgreSQL )",
                  },
                ].map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 animate-on-scroll animate-slide-left duration-400 hover:scale-105 "
                    style={{
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    <Image
                      width={20}
                      height={20}
                      src={skill.src}
                      alt={skill.alt}
                    />
                    <span>{skill.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl mb-4 font-semibold animate-on-scroll animate-slide-up duration-500">
              {t.about.skills.second}
            </h3>
            <ul className="space-y-4 mb-6">
              {[
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
                  alt: "Flutter",
                  text: "Flutter",
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
                  alt: "Figma",
                  text: "Figma",
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
                  alt: "Photoshop",
                  text: "Photoshop & Illustrator",
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
                  alt: "Git",
                  text: "Git / GitHub",
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg",
                  alt: "Docker",
                  text: "Docker",
                },
              ].map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 animate-on-scroll animate-slide-left duration-400 hover:scale-105"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <Image
                    width={20}
                    height={20}
                    src={skill.src}
                    alt={skill.alt}
                    style={{
                      animationDelay: `${index * 0.2}s`,
                    }}
                  />
                  <span>{skill.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-2xl mb-4 block font-semibold animate-on-scroll animate-slide-up duration-500">
              {t.about.skills.third}
            </span>
            <ul className="grid s:grid-cols-2 gap-4 list-disc list-inside max-w-md animate-on-scroll duration-500">
              {[
                t.about.skills.ability.first,
                t.about.skills.ability.second,
                t.about.skills.ability.third,
                t.about.skills.ability.fourth,
                t.about.skills.ability.fifth,
                t.about.skills.ability.sixth,
              ].map((ability, index) => (
                <li
                  className="animate-on-scroll animate-slide-left duration-400 hover:scale-105"
                  key={index}
                >
                  {ability}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col lg:row-span-2 pt-10 border-t-2 lg:border-t-0 border-gray-50 border-dotted animate-on-scroll animate-slide-up duration-500">
          <span className="font-semibold text-2xl mb-6 animate-on-scroll animate-slide-up duration-500">
            {t.about.skills.info.title}
          </span>
          <div className="flex flex-col gap-4 animate-on-scroll">
            <div className="flex gap-2 animate-on-scroll animate-slide-left duration-500 hover:scale-105">
              <MailIcon />
              <span>{t.about.skills.info.mail}</span>
            </div>
            <div className="flex gap-2 animate-on-scroll animate-slide-left duration-500 hover:scale-105">
              <PhoneIcon />
              <span>{t.about.skills.info.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

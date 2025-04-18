import { MailIcon } from "../Icons/mail";
import { PhoneIcon } from "../Icons/tel";

export default function About({ t }: { t: any }) {
  return (
    <section className="text-gray-50 bg-gray-900 flex flex-col items-center">
      <div className="max-w-7xl grid lg:grid-cols-3 lg:grid-rows-[min-content_1fr] py-20 mx-8">
        <div className="max-w-2xl border-b-2 border-dotted lg:pr-10 border-gray-50 pb-10 mb-10   lg:mb-0 lg:h-min lg:col-span-2">
          <h2 className="text-6xl font-semibold mb-8 ">{t.about.title}</h2>
          <div className="flex flex-col gap-4">
            <p className="text-justify">{t.about.subtitle.first}</p>
            <p className="text-justify">{t.about.subtitle.second}</p>
            <p className="text-justify">{t.about.subtitle.third}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:mx-auto lg:grid-cols-1 lg:mb-0 mb-10 lg:pl-10 lg:border-l-2 border-dotted border-gray-50 lg:row-span-2">
          <div>
            <h3 className="text-2xl mb-4 font-semibold">
              {t.about.skills.first}
            </h3>
            <div className="mb-6">
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                    alt="TypeScript"
                    className="w-5 h-5"
                  />
                  <span>JavaScript / TypeScript</span>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                    alt="React"
                    className="w-5 h-5"
                  />
                  <span>React / React Native</span>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                    alt="Node.js"
                    className="w-5 h-5"
                  />
                  <span>Node.js</span>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
                    alt="PHP Laravel"
                    className="w-5 h-5"
                  />
                  <span>PHP / Laravel</span>
                </li>
                <li className="flex items-center gap-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                    alt="SQL"
                    className="w-5 h-5"
                  />
                  <span>SQL ( MySQL, PostgreSQL )</span>
                </li>
              </ul>
            </div>
          </div>

          <div className=" ">
            <h3 className="text-2xl mb-4 font-semibold">
              {t.about.skills.second}
            </h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center gap-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"
                  alt="Flutter"
                  className="w-5 h-5"
                />
                <span>Flutter</span>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
                  alt="Figma"
                  className="w-5 h-5"
                />
                <span>Figma</span>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg"
                  alt="Photoshop"
                  className="w-5 h-5"
                />
                <span>Photoshop & Illustrator</span>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                  alt="Git"
                  className="w-5 h-5"
                />
                <span>Git / GitHub</span>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg"
                  alt="Docker"
                  className="w-5 h-5"
                />
                <span>Docker</span>
              </li>
            </ul>
          </div>
          <div>
            <span className="text-2xl mb-4 block font-semibold">
              {t.about.skills.third}
            </span>
            <ul className="grid s:grid-cols-2 gap-4  list-disc list-inside max-w-md">
              <li>{t.about.skills.ability.first}</li>
              <li>{t.about.skills.ability.second}</li>
              <li>{t.about.skills.ability.third}</li>
              <li>{t.about.skills.ability.fourth}</li>
              <li>{t.about.skills.ability.fifth}</li>
              <li>{t.about.skills.ability.sixth}</li>
            </ul>
          </div>
        </div>

        <div className="flex  flex-col lg:row-span-2 pt-10 border-t-2 lg:border-t-0 border-gray-50 border-dotted">
          <span className="font-semibold text-2xl mb-6">
            {t.about.skills.info.title}
          </span>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <MailIcon />
              <span>{t.about.skills.info.mail}</span>
            </div>
            <div className="flex gap-2">
              <PhoneIcon />
              <span>{t.about.skills.info.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

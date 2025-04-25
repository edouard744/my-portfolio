import * as motion from "motion/react-client";
import Image from "next/image";
import { MailIcon } from "../Icons/mail";
import { PhoneIcon } from "../Icons/tel";

export default function About({ t }: { t: any }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <motion.section
      id="about"
      className="text-gray-50 bg-gray-900 flex flex-col items-center"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="max-w-7xl grid lg:grid-cols-3 lg:grid-rows-[min-content_1fr] py-20 mx-8"
        initial={containerVariants.hidden}
        whileInView={containerVariants.visible}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="max-w-2xl border-b-2 border-dotted lg:pr-10 border-gray-50 pb-10 mb-10 lg:mb-0 lg:h-min lg:col-span-2"
          initial={itemVariants.hidden}
          whileInView={itemVariants.visible}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-6xl font-semibold mb-8"
            initial={itemVariants.hidden}
            whileInView={itemVariants.visible}
            viewport={{ once: true }}
          >
            {t.about.title}
          </motion.h2>
          <motion.div
            className="flex flex-col gap-4"
            initial={itemVariants.hidden}
            whileInView={itemVariants.visible}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-justify"
              initial={itemVariants.hidden}
              whileInView={itemVariants.visible}
              viewport={{ once: true }}
            >
              {t.about.subtitle.first}
            </motion.p>
            <motion.p
              className="text-justify"
              initial={itemVariants.hidden}
              whileInView={itemVariants.visible}
              viewport={{ once: true }}
            >
              {t.about.subtitle.second}
            </motion.p>
            <motion.p
              className="text-justify"
              initial={itemVariants.hidden}
              whileInView={itemVariants.visible}
              viewport={{ once: true }}
            >
              {t.about.subtitle.third}
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-4 md:grid-cols-2 md:mx-auto lg:grid-cols-1 lg:mb-0 mb-10 lg:pl-10 lg:border-l-2 border-dotted border-gray-50 lg:row-span-2"
          initial={containerVariants.hidden}
          whileInView={containerVariants.visible}
          viewport={{ once: true }}
        >
          <motion.div
            initial={itemVariants.hidden}
            whileInView={itemVariants.visible}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl mb-4 font-semibold"
              initial={itemVariants.hidden}
              whileInView={itemVariants.visible}
              viewport={{ once: true }}
            >
              {t.about.skills.first}
            </motion.h3>
            <motion.div
              className="mb-6"
              initial={containerVariants.hidden}
              whileInView={containerVariants.visible}
              viewport={{ once: true }}
            >
              <motion.ul
                className="space-y-4"
                initial={containerVariants.hidden}
                whileInView={containerVariants.visible}
                viewport={{ once: true }}
              >
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
                  <motion.li
                    key={index}
                    className="flex items-center gap-2"
                    initial={skillItemVariants.hidden}
                    whileInView={skillItemVariants.visible}
                    viewport={{ once: true }}
                    whileHover={skillItemVariants.hover}
                  >
                    <Image
                      width={20}
                      height={20}
                      src={skill.src}
                      alt={skill.alt}
                    />
                    <span>{skill.text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={itemVariants.hidden}
            whileInView={itemVariants.visible}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl mb-4 font-semibold"
              initial={itemVariants.hidden}
              whileInView={itemVariants.visible}
              viewport={{ once: true }}
            >
              {t.about.skills.second}
            </motion.h3>
            <motion.ul
              className="space-y-4 mb-6"
              initial={containerVariants.hidden}
              whileInView={containerVariants.visible}
              viewport={{ once: true }}
            >
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
                <motion.li
                  key={index}
                  className="flex items-center gap-2"
                  initial={skillItemVariants.hidden}
                  whileInView={skillItemVariants.visible}
                  viewport={{ once: true }}
                  whileHover={skillItemVariants.hover}
                >
                  <Image
                    width={20}
                    height={20}
                    src={skill.src}
                    alt={skill.alt}
                  />
                  <span>{skill.text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={itemVariants.hidden}
            whileInView={itemVariants.visible}
            viewport={{ once: true }}
          >
            <motion.span
              className="text-2xl mb-4 block font-semibold"
              initial={itemVariants.hidden}
              whileInView={itemVariants.visible}
              viewport={{ once: true }}
            >
              {t.about.skills.third}
            </motion.span>
            <motion.ul
              className="grid s:grid-cols-2 gap-4 list-disc list-inside max-w-md"
              initial={containerVariants.hidden}
              whileInView={containerVariants.visible}
              viewport={{ once: true }}
            >
              {[
                t.about.skills.ability.first,
                t.about.skills.ability.second,
                t.about.skills.ability.third,
                t.about.skills.ability.fourth,
                t.about.skills.ability.fifth,
                t.about.skills.ability.sixth,
              ].map((ability, index) => (
                <motion.li
                  key={index}
                  initial={skillItemVariants.hidden}
                  whileInView={skillItemVariants.visible}
                  viewport={{ once: true }}
                  whileHover={skillItemVariants.hover}
                >
                  {ability}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col lg:row-span-2 pt-10 border-t-2 lg:border-t-0 border-gray-50 border-dotted"
          initial={containerVariants.hidden}
          whileInView={containerVariants.visible}
          viewport={{ once: true }}
        >
          <motion.span
            className="font-semibold text-2xl mb-6"
            initial={itemVariants.hidden}
            whileInView={itemVariants.visible}
            viewport={{ once: true }}
          >
            {t.about.skills.info.title}
          </motion.span>
          <motion.div
            className="flex flex-col gap-4"
            initial={containerVariants.hidden}
            whileInView={containerVariants.visible}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex gap-2"
              initial={skillItemVariants.hidden}
              whileInView={skillItemVariants.visible}
              viewport={{ once: true }}
              whileHover={skillItemVariants.hover}
            >
              <MailIcon />
              <span>{t.about.skills.info.mail}</span>
            </motion.div>
            <motion.div
              className="flex gap-2"
              initial={skillItemVariants.hidden}
              whileInView={skillItemVariants.visible}
              viewport={{ once: true }}
              whileHover={skillItemVariants.hover}
            >
              <PhoneIcon />
              <span>{t.about.skills.info.phone}</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

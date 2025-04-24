import * as motion from "motion/react-client";
import ProfilePic from "@/app/assets/profile.jpeg";
import Image from "next/image";
import { GithubIcon } from "../Icons/github";
import { LinkedinIcon } from "../Icons/linkedIn";

export default function Hero({ t }: { t: any }) {
  return (
    <motion.section className="flex flex-col lg:flex-row items-center justify-center gap-20 pt-20 py-80 px-6 max-w-7xl mx-auto">
      <motion.div
        className="w-40 xs:w-72 justify-center aspect-square relative"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image
          src={ProfilePic}
          alt={t.hero.alt}
          fill
          priority
          className="rounded-full object-cover shadow-lg"
        />
      </motion.div>

      <div className="text-center flex flex-col items-center md:text-left lg:block">
        <motion.h1
          className="xs:text-6xl text-4xl text-center lg:text-left font-bold mb-6 leading-[1.5] lg:leading-[1.2]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="sm:pr-2">{t.hero.title.hi}</span>
          <br className="sm:hidden lg:block" />
          {t.hero.title.iam}
          <br className="lg:hidden" />
          <motion.span
            className="lg:ml-4 bg-blue-800 text-white px-4 rounded-2xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {t.hero.title.firstname}
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-2xl font-semibold text-blue-800 mb-4 text-center max-w-sm lg:max-w-screen"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          className="flex justify-center lg:justify-start gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.9 }}
        > 
            <motion.a 
              href="https://github.com" 
              target="blank" 
              aria-label="GitHub"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <GithubIcon fill="#fff" size={40} />
            </motion.a>
            <motion.a 
              href="https://linkedin.com" 
              target="blank" 
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <LinkedinIcon size={40} />
            </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}


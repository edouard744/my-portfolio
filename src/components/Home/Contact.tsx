import * as motion from "motion/react-client";
import Link from "next/link";
import { WavingIcon } from "../Icons/waving";

export default function ContactSection({ t }: { t: any }) {
  return (
    <section className="bg-gray-50 py-32">
      <div className="px-4 md:mx-auto flex flex-col flex-wrap items-center md:max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 text-center text-2xl s:text-3xl lg:max-w-4xl md:max-w-lg xl:max-w-full font-medium text-gray-900 lg:text-5xl"
        >
          {t.contact.title}
          <motion.span
            className="inline-block ml-2"
            animate={{
              rotate: [0, 20, -10, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          >
            <WavingIcon size={50} />
          </motion.span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8 text-center sm:text-2xl text-blue-900 font-semibold max-w-3xl"
        >
          {t.contact.subtitle}
        </motion.p>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="mailto:contact@willems-edouard.be"
            className="mx-auto block w-max rounded-full px-10 py-4 text-white bg-blue-700 border-2 border-blue-700 overflow-hidden transition-all duration-150 hover:bg-white hover:text-blue-700 hover:scale-105 focus:bg-white focus:text-blue-700 focus:scale-105 hover:shadow-xl focus:shadow-xl"
          >
            {t.contact.button}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

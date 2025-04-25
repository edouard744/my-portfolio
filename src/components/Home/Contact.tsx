import * as motion from "motion/react-client";
import Link from "next/link";
import { WavingIcon } from "../Icons/waving";

export default function ContactSection({ t }: { t: any }) {
  return (
    <section className="bg-gray-50 py-32">
      <div className="px-4 md:mx-auto flex flex-col items-center md:max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 text-center text-3xl font-medium text-gray-900 lg:text-5xl"
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
          className="mb-8 text-center text-2xl text-blue-900 font-semibold max-w-3xl"
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
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0, 0, 128, 0.2)",
              backgroundColor: "#1e40af",
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
            whileFocus={{
              scale: 1.05,
              boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.5)",
              backgroundColor: "#1e40af",
            }}
            className="mx-auto block w-max rounded-full bg-blue-800 overflow-hidden relative"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-900 opacity-0"
              whileHover={{ opacity: 1, x: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
            <Link
              href="mailto:contact@willems-edouard.be"
              className="mx-auto block w-max rounded-full px-10 py-4 text-white relative z-10"
            >
              {t.contact.button}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


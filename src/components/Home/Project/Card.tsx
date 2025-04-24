import Image from "next/image";
import * as motion from "motion/react-client";

export default function ProjectCard({
  image,
  alt,
  title,
  description,
  techno,
  aria,
  more,
  onClick,
}: {
  image: any;
  alt: string;
  title: string;
  description: string;
  techno: string[];
  aria: string;
  more:string;
  onClick?: () => void;
}) {
  return (
    <motion.article
      role="button"
      aria-label={`${aria} ${title}`}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}
      tabIndex={0}
      className="group cursor-pointer relative w-full max-w-2xl overflow-hidden rounded-lg border-2 border-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -10,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
    >
      <Image
        src={image}
        alt={alt}
        width={800}
        height={400}
        className="z-10 h-full max-h-80 w-full object-cover rounded-lg"
      />
      <div
        className="absolute inset-0 z-10 flex flex-col justify-end
        rounded-lg bg-blue-900/70 px-6 pb-8 pt-32 text-white
        backdrop-blur-sm opacity-0 invisible 
        transition-all duration-300 ease-out
        group-hover:opacity-100 group-hover:visible
        group-focus:opacity-100 group-focus:visible"
      ></div>
      <motion.div
        className="absolute text-gray-50 bottom-8 left-6 right-6 z-20 max-w-sm text-justify font-medium
        opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0
        transition-all duration-300 ease-out"
      >
        <h3 className="mb-3 text-xl font-bold">{title}</h3>
        <p className="mb-2">{description}</p>
        <div className="flex flex-col gap-2 justify-between">
          {techno && (
            <ul className="flex mb-2 text-sm gap-2">
              {techno.map((e, i) => (
                <motion.li
                  key={i}
                  className="border border-gray-50 py-1.5 px-4 rounded-full"
                  initial={{ opacity: 0, x: -20 }}
                  whileHover={{ scale: 1.05 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  {e}
                </motion.li>
              ))}
            </ul>
          )}
          <span
            className="underline text-lg font-medium"
          >
            {more}
          </span>
        </div>
      </motion.div>
    </motion.article>
  );
}
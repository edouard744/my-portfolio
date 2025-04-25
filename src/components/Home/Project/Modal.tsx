import { useEffect, useRef, useState } from "react";
import * as motion from "motion/react-client";
import Image, { StaticImageData } from "next/image";
import { GithubIcon } from "@/components/Icons/github";

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  project: any;
};

export default function ProjectModal({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);

  const content = project[0];
  const trad = project[1];
  const images = project[2];

  const [current, setCurrent] = useState(0);

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.95,
      transition: { duration: 0.3 },
    },
  };

  useEffect(() => {
    // Initialiser le tableau de chargement des images
    if (images && images.length > 0) {
      setImagesLoaded(new Array(images.length).fill(false));
    }
  }, [images]);

  const handleImageLoad = (index: number) => {
    const newLoadedState = [...imagesLoaded];
    newLoadedState[index] = true;
    setImagesLoaded(newLoadedState);
  };

  const next = () => {
    const nextIndex = (current + 1) % images.length;
    setCurrent(nextIndex);
    setHasInteracted(true);
  };

  const prev = () => {
    const prevIndex = (current - 1 + images.length) % images.length;
    setCurrent(prevIndex);
    setHasInteracted(true);
  };

  useEffect(() => {
    if (!isOpen || images.length <= 1 || hasInteracted) return;

    const interval = setInterval(() => {
      next();
    }, 10000);

    return () => clearInterval(interval);
  }, [isOpen, images.length, hasInteracted, current]);

  useEffect(() => {
    if (isOpen) {
      setCurrent(0);
      setHasInteracted(false);
      document.body.style.overflow = "hidden"; // Empêcher le défilement du corps
    } else {
      document.body.style.overflow = ""; // Restaurer le défilement du corps
    }

    return () => {
      document.body.style.overflow = ""; // Assurer que le défilement est restauré lors du démontage
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      variants={backdropVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      exit="exit"
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="bg-white relative shadow-xl max-w-4xl w-full rounded-xl overflow-hidden"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="max-h-[90vh] overflow-y-auto px-10 py-8">
          <div className="flex justify-between items-center mb-6">
            <motion.h2
              className="text-4xl text-blue-950 font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              {content.title}
            </motion.h2>
            <motion.button
              onClick={onClose}
              className="text-blue-700 rounded-full cursor-pointer border-blue-700 hover:text-blue-500 hover:scale-105 focus:scale-105 focus:text-blue-500"
              aria-label={trad.close}
              whileHover={{ scale: 1.1, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m15 9l-6 6m0-6l6 6" />
                </g>
              </svg>
            </motion.button>
          </div>

          <motion.div
            className="relative mb-2 overflow-hidden w-full rounded-md border border-gray-100 shadow aspect-video"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="flex h-full w-full relative">
              {images.map((img: StaticImageData, index: number) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === current ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ zIndex: index === current ? 1 : 0 }}
                >
                  <Image
                    src={img}
                    alt={`${content.title} - image ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={true}
                    onLoadingComplete={() => handleImageLoad(index)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {images.length > 1 && (
            <motion.div
              className="flex items-center justify-center gap-4 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <button
                onClick={prev}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xl px-4 flex items-center justify-center shadow transition-colors"
                aria-label={trad.ariaprev}
              >
                ‹
              </button>

              <div className="flex gap-2 items-center">
                {images.map((_: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrent(index);
                      setHasInteracted(true);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      current === index
                        ? "bg-blue-600 scale-125"
                        : "bg-gray-300 hover:bg-blue-400"
                    }`}
                    aria-label={`${trad.ariaselect} ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xl px-4 flex items-center justify-center shadow transition-colors"
                aria-label={trad.arianext}
              >
                ›
              </button>
            </motion.div>
          )}

          <div className="mb-8">
            {(content?.modal?.github || content?.modal?.figma) && (
              <motion.div
                className="my-4 flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <span className="text-2xl block text-blue-800 font-semibold">
                  {trad.links}
                </span>
                {content?.modal.github && (
                  <motion.a
                    href={content.modal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <GithubIcon size={32} />
                  </motion.a>
                )}
                {content?.modal.figma && (
                  <motion.a
                    href={content.modal.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Figma"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
                      alt="Figma"
                      className="w-8 h-8"
                      width={32}
                      height={32}
                    />
                  </motion.a>
                )}
              </motion.div>
            )}

            {content?.modal?.presentation && (
              <motion.div
                className="my-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <span className="text-2xl block text-blue-800 font-semibold mb-2">
                  {trad.presentation}
                </span>
                <p
                  style={{ whiteSpace: "pre-line" }}
                  className="mb-6 tracking-wide text-lg text-gray-950"
                >
                  {content.modal.presentation}
                </p>
              </motion.div>
            )}

            {content?.modal?.techno && (
              <motion.div
                className="my-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <span className="text-2xl block text-blue-800 font-semibold mb-2">
                  {trad.techno}
                </span>
                <p
                  style={{ whiteSpace: "pre-line" }}
                  className="mb-6 tracking-wide text-lg text-gray-950"
                >
                  {content.modal.techno}
                </p>
              </motion.div>
            )}

            {content?.modal?.learned && (
              <motion.div
                className="my-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <span className="text-2xl block text-blue-800 font-semibold mb-2">
                  {trad.learned}
                </span>
                <p
                  style={{ whiteSpace: "pre-line" }}
                  className="mb-6 text-gray-950 text-lg tracking-wide"
                >
                  {content.modal.learned}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

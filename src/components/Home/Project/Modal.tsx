import { useEffect, useRef, useState } from "react";
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
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  const content = project[0];
  const trad = project[1];
  const images = project[2];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Petit délai pour s'assurer que le DOM est prêt avant de lancer l'animation
      const timer = setTimeout(() => {
        setIsAnimating(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
      // Attendre la fin de l'animation avant de démonter
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300); // Durée de l'animation de sortie
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

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

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white relative shadow-xl mx-2 max-w-4xl w-full rounded-xl overflow-hidden transition-all duration-300 ${
          isAnimating
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-12 scale-95"
        }`}
      >
        <div className="max-h-[90vh] overflow-y-auto px-4 md:px-10 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2
              className={`text-3xl sm:text-4xl text-blue-950 font-bold transition-all duration-400 ${
                isAnimating
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-5"
              }`}
              style={{ transitionDelay: "0.2s" }}
            >
              {content.title}
            </h2>
            <button
              onClick={onClose}
              className="text-blue-700 rounded-full cursor-pointer border-blue-700 hover:text-blue-500 hover:scale-110 focus:scale-110 focus:text-blue-500 hover:rotate-90 focus:rotate-90"
              aria-label={trad.close}
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
            </button>
          </div>

          <div
            className={`relative mb-2 overflow-hidden w-full rounded-md border border-gray-100 shadow aspect-video transition-all duration-500 ${
              isAnimating
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="flex h-full w-full relative">
              {images.map((img: StaticImageData, index: number) => (
                <div
                  key={index}
                  className={`absolute inset-0 w-full duration-400 h-full ${index === current ? "opacity-100" : "opacity-0"}`}
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
                </div>
              ))}
            </div>
          </div>

          {images.length > 1 && (
            <div
              className={`flex items-center justify-center gap-4 mb-6 transition-all duration-300 ${
                isAnimating
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
              style={{ transitionDelay: "0.4s" }}
            >
              <button
                onClick={prev}
                className="bg-blue-600 hover-scale hover:bg-blue-700 cursor-pointer hover:scale-110 focus:scale-110 transition-all duration-150 text-white rounded-lg text-xl px-4 flex items-center justify-center shadow "
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
                    className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${
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
                className="bg-blue-600 hover:bg-blue-700 cursor-pointer hover:scale-105 focus:scale-105 duration-150 text-white rounded-lg text-xl px-4 flex items-center justify-center shadow transition-colors"
                aria-label={trad.arianext}
              >
                ›
              </button>
            </div>
          )}

          <div className="mb-8">
            {(content?.modal?.github || content?.modal?.figma) && (
              <div
                className={`my-4 flex items-center gap-4 transition-all duration-500 ${
                  isAnimating
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: "0.4s" }}
              >
                <span className="text-2xl block text-blue-800 font-semibold">
                  {trad.links}
                </span>
                {content?.modal.github && (
                  <a
                    className="hover:scale-110 hover:rotate-5 focus:scale-110 focus:rotate-5"
                    href={content.modal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <GithubIcon size={32} />
                  </a>
                )}
                {content?.modal.figma && (
                  <a
                    className="hover:scale-110 hover:rotate-5 focus:scale-110 focus:rotate-5"
                    href={content.modal.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Figma"
                  >
                    <Image
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
                      alt="Figma"
                      className="w-8 h-8"
                      width={32}
                      height={32}
                    />
                  </a>
                )}
              </div>
            )}

            {content?.modal?.presentation && (
              <div
                className={`my-6 transition-all duration-500 ${
                  isAnimating
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: "0.5s" }}
              >
                <span
                  className={`text-2xl block text-blue-800 font-semibold mb-2 transition-all duration-500 ${
                    isAnimating
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-4"
                  }`}
                >
                  {trad.presentation}
                </span>
                <p
                  className={`mb-6 tracking-wide text-lg text-gray-950 transition-all duration-500 ${
                    isAnimating
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-4"
                  }`}
                  style={{
                    whiteSpace: "pre-line",
                    transitionDelay: "0.6s",
                  }}
                >
                  {content.modal.presentation}
                </p>
              </div>
            )}

            {content?.modal?.techno && (
              <div
                className={`my-6 transition-all duration-500 ${
                  isAnimating
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: "0.7s" }}
              >
                <span
                  className={`text-2xl block text-blue-800 font-semibold mb-2 transition-all duration-500 ${
                    isAnimating
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-4"
                  }`}
                >
                  {trad.techno}
                </span>
                <p
                  className={`mb-6 tracking-wide text-lg text-gray-950 transition-all duration-500 ${
                    isAnimating
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-4"
                  }`}
                  style={{
                    whiteSpace: "pre-line",
                    transitionDelay: "0.8s",
                  }}
                >
                  {content.modal.techno}
                </p>
              </div>
            )}

            {content?.modal?.learned && (
              <div
                className={`my-6 transition-all duration-500 ${
                  isAnimating
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: "0.9s" }}
              >
                <span
                  className={`text-2xl block text-blue-800 font-semibold mb-2 transition-all duration-500 ${
                    isAnimating
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-4"
                  }`}
                >
                  {trad.learned}
                </span>
                <p
                  className={`mb-6 tracking-wide text-lg text-gray-950 transition-all duration-500 ${
                    isAnimating
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-4"
                  }`}
                  style={{
                    whiteSpace: "pre-line",
                    transitionDelay: "1s",
                  }}
                >
                  {content.modal.learned}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

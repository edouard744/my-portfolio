import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
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
  const modalRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);

  const content = project[0];
  const trad = project[1];
  const images = project[2];

  const [current, setCurrent] = useState(0);

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
    if (!sliderRef.current) return;

    const nextIndex = (current + 1) % images.length;

    gsap.to(sliderRef.current, {
      x: `-${nextIndex * (100 / images.length)}%`,
      duration: 0.3,
      ease: "power2.inOut",
    });

    setCurrent(nextIndex);
    setHasInteracted(true);
  };

  const prev = () => {
    if (!sliderRef.current) return;

    const prevIndex = (current - 1 + images.length) % images.length;

    gsap.to(sliderRef.current, {
      x: `-${prevIndex * (100 / images.length)}%`,
      duration: 0.3,
      ease: "power2.inOut",
    });

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
      setShouldRender(true);
      // Reset position on open
      if (sliderRef.current) {
        gsap.set(sliderRef.current, { x: 0 });
      }
      setCurrent(0);
      setHasInteracted(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (shouldRender && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },
      );
    }
  }, [shouldRender]);

  const handleClose = () => {
    if (!modalRef.current) return;

    gsap.to(modalRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.3,
      ease: "power3.in",
      onComplete: () => {
        setShouldRender(false);
        setHasInteracted(false);
        setCurrent(0);
        onClose();
      },
    });
  };

  if (!shouldRender) return null;

  const handleClickOutside = () => {
    if (isOpen) handleClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleClickOutside}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="bg-white relative shadow-xl max-w-4xl w-full rounded-xl overflow-hidden"
      >
        <div className="max-h-[90vh] overflow-y-auto px-10 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-4xl text-blue-950 font-bold">
              {content.title}
            </h2>
            <button
              onClick={handleClose}
              className="text-blue-700 rounded-full cursor-pointer border-blue-700  hover:text-blue-500 hover:scale-105 focus:scale-105   focus:text-blue-500 "
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

          <div className="relative mb-6 overflow-hidden w-full rounded-md border border-gray-100 shadow aspect-video">
            <div
              ref={sliderRef}
              className="flex h-full transition-transform duration-500"
              style={{ width: `${images.length * 100}%` }}
            >
              {images.map((img: StaticImageData, index: number) => (
                <div
                  key={index}
                  className="relative"
                  style={{ width: `${100 / images.length}%`, height: "100%" }}
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

            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200/90 hover:bg-white text-black rounded-full w-10 h-10 flex items-center text-2xl justify-center shadow"
                  aria-label="Image précédente"
                >
                  ‹
                </button>
                <button
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200/90 hover:bg-white text-black rounded-full w-10 h-10 flex items-center text-2xl justify-center shadow"
                  aria-label="Image suivante"
                >
                  ›
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (!sliderRef.current) return;
                        gsap.to(sliderRef.current, {
                          x: `-${index * (100 / images.length)}%`,
                          duration: 0.5,
                          ease: "power2.inOut",
                        });
                        setCurrent(index);
                        setHasInteracted(true);
                      }}
                      className={`w-3 h-3 rounded-full transition-colors ${current === index ? "bg-white" : "bg-white/50"}`}
                      aria-label={`Aller à l'image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="mb-8">
            {(content?.modal?.github || content?.modal?.figma) && (
              <div className="my-4 flex items-center gap-4">
                <span className="text-2xl block text-blue-800 font-semibold ">
                  {trad.links}
                </span>
                {content?.modal.github && (
                  <a
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
              <div className="my-6">
                <span className="text-2xl block text-blue-800 font-semibold mb-2">
                  {trad.presentation}
                </span>
                <p
                  style={{ whiteSpace: "pre-line" }}
                  className="mb-6 tracking-wide text-lg text-gray-950"
                >
                  {content.modal.presentation}
                </p>
              </div>
            )}

            {content?.modal?.techno && (
              <div className="my-6">
                <span className="text-2xl block text-blue-800 font-semibold mb-2">
                  {trad.techno}
                </span>
                <p
                  style={{ whiteSpace: "pre-line" }}
                  className="mb-6 tracking-wide text-lg text-gray-950"
                >
                  {content.modal.techno}
                </p>
              </div>
            )}

            {content?.modal?.learned && (
              <div className="my-6">
                <span className="text-2xl block text-blue-800 font-semibold mb-2">
                  {trad.learned}
                </span>
                <p
                  style={{ whiteSpace: "pre-line" }}
                  className="mb-6 text-gray-950 text-lg tracking-wide"
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

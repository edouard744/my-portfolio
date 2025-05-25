import Image from "next/image";

export default function ProjectCard({
  className,
  image,
  alt,
  title,
  description,
  techno,
  aria,
  more,
  onClick,
}: {
  className: string;
  image: any;
  alt: string;
  title: string;
  description: string;
  techno: string[];
  aria: string;
  more: string;
  onClick?: () => void;
}) {
  return (
    <article
      role="button"
      aria-label={`${aria} ${title}`}
      onClick={onClick}
      onKeyDown={(e: React.KeyboardEvent) => e.key === "Enter" && onClick?.()}
      tabIndex={0}
      className={`group cursor-pointer relative w-full max-w-2xl overflow-hidden rounded-lg border-2 border-gray-50 outline-none focus:ring-2 focus:ring-blue-500 animate-on-scroll animate-slide-up  hover:-translate-y-2.5 transition-all duration-400 hover:shadow-xl ${className}`}
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
      <div
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
                <li
                  key={i}
                  className="border border-gray-50 py-1.5 px-4 rounded-full animate-on-scroll animate-slide-left duration-300 hover:scale-105 transition-transform"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {e}
                </li>
              ))}
            </ul>
          )}
          <span className="underline text-lg font-medium">{more}</span>
        </div>
      </div>
    </article>
  );
}

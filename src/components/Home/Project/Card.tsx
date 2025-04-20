import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ image,alt,title,description,techno,aria}: { image: any,alt:string, title: string, description: string,techno:string[],aria:string }) {
  return (
    <article role="button"
    aria-label={`${aria} ${title}`} className="group cursor-pointer relative w-full lg:w-1/2 max-w-2xl overflow-hidden rounded-lg border-2 border-gray-100">
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
    backdrop-blur-sm opacity-0 invisible pointer-events-none
    transition-opacity duration-300 ease-out
    group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto
    peer-focus:opacity-100 peer-focus:visible peer-focus:pointer-events-auto"
>
</div>
<div className="absolute text-gray-50 bottom-8 left-6 right-6 z-20 max-w-sm text-justify  font-medium
    transform translate-y-6 opacity-0
    transition-all duration-500 ease-out
    group-hover:translate-y-0 group-hover:opacity-100
    peer-focus:translate-y-0 peer-focus:opacity-100"
>
<h3 className="mb-4 text-xl font-bold"
  >
    {title}
</h3>
<p className="mb-4">{description}</p>

<div className="flex flex-col gap-2 justify-between">
{techno && <ul className="flex mb-4 text-sm gap-2">{
  techno.map((e,i)=> <li key={i} className="border border-gray-50 py-1.5 px-4 rounded-full delay-75">{e}</li>)}</ul> }

<span className="underline text-lg font-medium">En savoir plus</span>
</div>
</div>

    </article>
  );
}

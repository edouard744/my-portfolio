import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import PressionProPic from "@/app/assets/pression-pro.jpg";
import ProjectCard from "./Card";

export default function ProjectsSection({ t }: { t: any }) {
  return (
    <section className="relative bg-white py-32">
      <div className="w-full max-w-7xl lg:mx-auto lg:max-w-5xl px-4">
        <div className="mb-10 flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
          <h2 className="text-center font-bold text-gray-800 text-6xl">
            {t.projects.title}
          </h2>
        </div>
       
        <div className="mb-20 flex flex-col items-center justify-center gap-6 lg:flex-row">
          <ProjectCard image={PressionProPic} title={t.projects.pressionpro.title} description={t.projects.pressionpro.description} alt={t.projects.pressionpro.alt} techno={t.projects.pressionpro.techno} aria={t.projects.aria} />
          <ProjectCard image={PressionProPic} title="PressionPro" description="Création d&apos;un site pour un indépendant en nettoyage haute pression" alt="Projet Pression Pro" techno={["NextJs","TailwindCSS","ReactJs"]} aria="Projet Pression Pro" />
        </div>
      </div> 
    </section>
  );
}

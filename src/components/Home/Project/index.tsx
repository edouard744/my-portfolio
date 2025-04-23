"use client";
import { useState } from "react";
import ProjectModal from "./Modal";
import PressionProPic from "@/app/assets/pression-pro.jpg";
import PressionProOne from "@/app/assets/pression-pro-1.jpg";
import PressionProTwo from "@/app/assets/pression-pro-2.jpg";
import PressionProThree from "@/app/assets/pression-pro-3.jpg";
import LandingPic from "@/app/assets/landing.jpeg";
import LandingOne from "@/app/assets/landing-1.jpeg";
import LandingTwo from "@/app/assets/landing-2.png";
import LandingThree from "@/app/assets/landing-3.png";
import LandingFour from "@/app/assets/landing-4.png";
import ProjectCard from "./Card";
import { StaticImageData } from "next/image";
type ProjectKey = "pressionpro" | "landing";
export default function Projects({ t }: { t: any }) {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const projects: ProjectKey[] = ["pressionpro", "landing"];
  const images: Record<
    ProjectKey,
    { card: StaticImageData; modal: StaticImageData[] }
  > = {
    pressionpro: {
      card: PressionProPic,
      modal: [PressionProOne, PressionProTwo, PressionProThree],
    },
    landing: {
      card: LandingPic,
      modal: [LandingOne, LandingTwo, LandingThree, LandingFour],
    },
  };
  const trad = t.projects.list;

  return (
    <>
      <section className="relative bg-white py-32">
        <div className="w-full max-w-7xl lg:mx-auto lg:max-w-5xl px-4">
          <div className="mb-10 flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
            <h2 className="text-center font-bold text-gray-800 text-6xl">
              {t.projects.title}
            </h2>
          </div>

          <div className="grid grid-cols-1  items-center justify-between gap-6 lg:grid-cols-2">
            {projects.map((project, i) => (
              <ProjectCard
                key={i}
                image={images[project].card}
                title={trad[project].title}
                description={trad[project].description}
                alt={trad[project].alt}
                techno={trad[project].techno}
                aria={trad[project].aria}
                onClick={() =>
                  setSelectedProject([
                    trad[project],
                    t.projects.modal,
                    images[project].modal,
                  ])
                }
              />
            ))}
          </div>
        </div>
      </section>
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

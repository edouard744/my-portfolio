"use client";
import { useState } from "react";
import ProjectModal from "./Modal";
import * as motion from "motion/react-client";
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
      <motion.section 
        id="projects"
        className="relative bg-white py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="w-full max-w-7xl lg:mx-auto lg:max-w-5xl px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="mb-10 flex flex-col items-center gap-6 lg:flex-row lg:justify-between"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2 
              className="text-center font-bold text-gray-800 text-6xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {t.projects.title}
            </motion.h2>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 items-center justify-items-center gap-6 lg:grid-cols-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, staggerChildren: 0.3 }}
          >
            {projects.map((project, i) => (
              <ProjectCard
                key={i}
                image={images[project].card}
                title={trad[project].title}
                description={trad[project].description}
                alt={trad[project].alt}
                techno={trad[project].techno}
                aria={trad[project].aria}
                more={t.projects.more}
                onClick={() =>
                  setSelectedProject([
                    trad[project],
                    t.projects.modal,
                    images[project].modal,
                  ])
                }
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
      
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

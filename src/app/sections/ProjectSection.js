import React from "react";
import Card from "../components/Card";
import { animate, motion } from "framer-motion";
import SectionHeader from "../components/ui/SectionHeader";

import KasaImg from "@/assets/images/kasa.png";
import PetitsPlatsImg from "@/assets/images/petitsplats.png";
import SpaceTourismImg from "@/assets/images/spacetourism.png";
import PortfolioImg from "@/assets/images/porfolio.png";
import FisheyeImg from "@/assets/images/fisheye.png";
import EcommerceImg from "@/assets/images/ecommerce.png";
import SectionFooter from "../components/ui/SectionFooter";

const projects = [
  {
    imageUrl: PortfolioImg,
    title: "Portfolio(frontend mentor)",
    tags: ["Nextjs", "CSS"],
    links: {
      github: "https://github.com/wfarre/fake-portfolio/tree/main",
      live: "https://fake-portfolio-jjpciyrpv-wfarres-projects.vercel.app/",
    },
  },
  {
    imageUrl: FisheyeImg,
    title: "Fisheye(OpenClassrooms' project)",
    tags: ["HTML", "Javascript", "Sass", "Accessibility"],
    links: {
      github: "https://github.com/wfarre/Front-End-Fisheye/tree/mainn",
      live: "https://front-end-fisheye.vercel.app/",
    },
  },
  {
    imageUrl: PetitsPlatsImg,
    title: "Les petits plats(OpenClassrooms' project)",
    tags: ["HTML", "CSS", "Javascript"],
    links: {
      github: "https://github.com/wfarre/LesPetitsPlats-P7/tree/master",
      live: "https://les-petits-plats-p7-qlvjnnn4u-wfarre.vercel.app/",
    },
  },
  {
    imageUrl: KasaImg,
    title: "Kasa(OpenClassrooms' project)",
    tags: ["React", "Sass"],
    links: {
      github: "",
      live: "https://kasa-app-p11.vercel.app/",
    },
  },
  {
    imageUrl: SpaceTourismImg,
    title: "Space Tourism(frontend mentor)",
    tags: ["Nextjs", "Sass", "Typescript"],
    links: {
      github: "https://github.com/wfarre/space-tourism-app/tree/main",
      live: "https://space-tourism-app-iota.vercel.app/technology",
    },
  },
  {
    imageUrl: EcommerceImg,
    title: "Ecommerce(frontend mentor)",
    tags: ["Typescript", "CSS", "HTML"],
    links: {
      github: "https://github.com/wfarre/ecommerce/tree/main",
      live: "https://ecommerce-jokg.vercel.app/",
    },
  },
];

const ProjectSection = () => {
  const projectVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <section
      id="projects"
      className="mx-4 mb-40 mt-32 max-w-5xl sm:px-10 lg:mx-auto"
    >
      <SectionHeader
        headerTitle={"Projects"}
        headerContent={`Here are some examples of different personal projects I made. Some of them are projects I made for my degree at OpenClassrooms or others are design provided by frontendmentor.io.`}
        headerLinks={[
          {
            text: "Please visit my frontendmentor's profile",
            url: "https://www.frontendmentor.io/profile/wfarre",
          },
        ]}
      />
      <motion.ul
        className="flex flex-wrap justify-between gap-4"
        transition={{
          duration: 1.5,
          staggerChildren: 0.2,
          delay: 0.5,
          type: "spring",
        }}
        initial="hidden"
        whileInView={"show"}
      >
        {projects.map((project, index) => {
          return (
            <motion.li
              key={project.title + index}
              className="w-full sm:w-[48%]"
              variants={projectVariant}
            >
              <Card
                github={project.links.github}
                live={project.links.live}
                imageUrl={project.imageUrl}
                title={project.title}
                tags={project.tags}
              />
            </motion.li>
          );
        })}
      </motion.ul>
      <SectionFooter />
    </section>
  );
};

export default ProjectSection;

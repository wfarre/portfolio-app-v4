"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Image from "next/image";
// import { icons } from "@/assets/icons/index";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  svelte,
  liveurl,
} from "../assets/icons";

import english from "@/assets/icons/english.svg";
import japanese from "@/assets/icons/japanese.svg";
import french from "@/assets/icons/french.svg";
import chinese from "@/assets/icons/chinese.svg";

import HtmlIcon from "@/assets/icons/html.svg";
import CssIcon from "@/assets/icons/css.svg";
// import JavascriptIcon from "@/assets/icons/javascript.svg";
// import reactIcon from "@/assets/icons/react.svg";
// import sassIcon from "@/assets/icons/sass.svg";
// import typescriptIcon from "@/assets/icons/typescript.svg";
// // import svleteIcon from "@/assets/icons/svelte.svg";
// import tailwindcssIcon from "@/assets/icons/tailwindcss.svg";
// import nextIcon from "@/assets/icons/nextjs.svg";
// import githubIcon from "@/assets/icons/github.svg";

import KasaImg from "@/assets/images/kasa.png";
import PetitsPlatsImg from "@/assets/images/petitsplats.png";
import SpaceTourismImg from "@/assets/images/spacetourism.png";
import PortfolioImg from "@/assets/images/porfolio.png";
import FisheyeImg from "@/assets/images/fisheye.png";
import EcommerceImg from "@/assets/images/ecommerce.png";
import Card from "./components/Card/Card";

const skills = [
  html,
  css,
  javascript,
  react,
  sass,
  typescript,
  svelte,
  tailwindcss,
  nextjs,
  github,
];

const languages = [french, english, japanese, chinese];

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

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <section className="mt-32">
          <h2 className="font-bold uppercase text-2xl text-center bg-gradient-to-tr from-teal-500 to-teal-200 bg-clip-text text-transparent mb-12">
            Skills
          </h2>
          <ul>
            <li className="mb-12">
              <h3 className="font-bold mb-6">Progamming skills</h3>
              <ul className="flex flex-wrap gap-10 justify-start">
                {skills.map((skill, index) => {
                  return (
                    <motion.li
                      whileHover={{ scale: 1.2 }}
                      className=" flex items-center justify-center w-20 h-20 p-4 rounded-lg shadow-slate-600/20 shadow-2xl sha"
                      key={skill + index}
                    >
                      <Image src={skill} alt={skill}></Image>
                    </motion.li>
                  );
                })}
              </ul>
            </li>
            <li>
              <h3 className="font-bold mb-6">Language skills</h3>
              <ul className="flex flex-wrap gap-10 justify-start">
                {languages.map((skill, index) => {
                  return (
                    <motion.li
                      whileHover={{ scale: 1.2 }}
                      className=" flex items-center justify-center w-20 h-20 p-4 rounded-lg shadow-slate-600/20 shadow-2xl"
                      key={skill + index}
                    >
                      <Image src={skill} alt={skill}></Image>
                    </motion.li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </section>

        <section className="mt-32 mb-40">
          <h2 className="font-bold uppercase text-2xl text-center bg-gradient-to-tr from-teal-500 to-teal-200 bg-clip-text text-transparent mb-12">
            Projects
          </h2>
          <ul className="flex gap-4 flex-wrap justify-between">
            {projects.map((project, index) => {
              return (
                <li key={project.title + index} className="sm:w-[48%] w-full">
                  <Card
                    github={project.links.github}
                    live={project.links.live}
                    imageUrl={project.imageUrl}
                    title={project.title}
                    tags={project.tags}
                  />
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
}

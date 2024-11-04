import Image from "next/image";
import React from "react";
import { animate, motion } from "framer-motion";
import SectionHeader from "../components/ui/SectionHeader/SectionHeader";

import {
  css,
  git,
  github,
  html,
  javascript,
  mui,
  nextjs,
  react,
  sass,
  tailwindcss,
  typescript,
  svelte,
  bootstrap,
} from "../../assets/icons";

import english from "@/assets/icons/english.svg";
import japanese from "@/assets/icons/japanese.svg";
import french from "@/assets/icons/french.svg";
import chinese from "@/assets/icons/chinese.svg";

const skills = [
  {
    image: html,
    title: "html",
  },
  {
    image: css,
    title: "css",
  },
  {
    image: javascript,
    title: "javascript",
  },
  {
    image: react,
    title: "react",
  },
  {
    image: sass,
    title: "sass",
  },
  {
    image: typescript,
    title: "typescript",
  },
  {
    image: svelte,
    title: "svelte",
  },
  {
    image: tailwindcss,
    title: "tailwindcss",
  },
  {
    image: nextjs,
    title: "nextjs",
  },
  {
    image: git,
    title: "git,",
  },
  {
    image: github,
    title: "github",
  },
  {
    image: bootstrap,
    title: "bootstrap",
  },
];

const languages = [
  {
    image: french,
    title: "french",
  },
  {
    image: english,
    title: "english,",
  },
  {
    image: japanese,
    title: "japanese",
  },
  {
    image: chinese,
    title: "chinese",
  },
];

const SkillSection = () => {
  return (
    <section id="skills" className="mx-4 mt-48 max-w-5xl sm:px-10 lg:mx-auto">
      <SectionHeader
        headerTitle={"skills"}
        headerContent={
          "Beside my google searching skills, I have many other skills in Programming. Also, I have lived for several Japan so I can speak Japanese fluently. Please check below to discover my other skills. "
        }
      />

      <ul>
        <li className="mb-12">
          <h3 className="mb-6 font-bold">Progamming skills</h3>
          <ul className="flex flex-wrap justify-start gap-10">
            {skills.map((skill, index) => {
              return (
                <motion.li
                  whileInView={{
                    opacity: [0, 1],
                    scale: [0.1, 1],
                    translateX: ["-50%", "0"],
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                    type: "tween",
                  }}
                  key={skill.title + index}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="flex h-20 w-20 items-center justify-center rounded-lg bg-white p-4 shadow-2xl shadow-slate-600/20"
                  >
                    <Image src={skill.image} alt={skill.title}></Image>
                  </motion.div>
                </motion.li>
              );
            })}
          </ul>
        </li>
        <li>
          <h3 className="mb-6 font-bold">Language skills</h3>
          <ul className="flex flex-wrap justify-start gap-10">
            {languages.map((skill, index) => {
              return (
                <motion.li
                  whileInView={{
                    opacity: [0, 1],
                    scale: [0.1, 1],
                    translateX: ["-50%", "0"],
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                    type: "tween",
                  }}
                  key={skill.title + index}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="flex h-20 w-20 items-center justify-center rounded-lg bg-white p-4 shadow-2xl shadow-slate-600/20"
                  >
                    <Image src={skill.image} alt={skill.title} />
                  </motion.div>
                </motion.li>
              );
            })}
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default SkillSection;

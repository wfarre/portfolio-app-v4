"use client";

import { animate, motion } from "framer-motion";
import Link from "next/link";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Image from "next/image";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
// import { icons } from "@/assets/icons/index";
import ContactImage from "@/assets/images/contact-image.svg";
import dynamic from "next/dynamic";

import {
  css,
  git,
  github,
  html,
  javascript,
  // mui,
  nextjs,
  // nodejs,
  react,
  // redux,
  sass,
  tailwindcss,
  typescript,
  svelte,
  phoneIcon,
  envelopeIcon,
  houseIcon,
} from "../assets/icons";

import english from "@/assets/icons/english.svg";
import japanese from "@/assets/icons/japanese.svg";
import french from "@/assets/icons/french.svg";
import chinese from "@/assets/icons/chinese.svg";

import KasaImg from "@/assets/images/kasa.png";
import PetitsPlatsImg from "@/assets/images/petitsplats.png";
import SpaceTourismImg from "@/assets/images/spacetourism.png";
import PortfolioImg from "@/assets/images/porfolio.png";
import FisheyeImg from "@/assets/images/fisheye.png";
import EcommerceImg from "@/assets/images/ecommerce.png";
import Card from "./components/Card/Card";

import TaskusLogo from "@/assets/images/logo/taskus-logo.jpeg";
import JELogo from "@/assets/images/logo/je-logo.jpeg";
import BanisterLogo from "@/assets/images/logo/banister-logo.jpeg";
import {
  Copyright,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import Button from "./components/Button/Button";
import SectionHeader from "./components/SectionHeader/SectionHeader";
import { useEffect, useState } from "react";
import ContactModal from "./components/Modals/ContactModal";

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
  git,
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

const personalInformation = [
  {
    title: "address",
    icon: houseIcon,
    content: "Kaohsiung, Sanmin District, Taiwan",
  },
  {
    title: "phone number",
    icon: phoneIcon,
    content: "+886 (0)933-730-512",
  },
  {
    title: "email address",
    icon: envelopeIcon,
    content: "william.farre@gmail.com",
  },
];

const workExperiences = [
  {
    company: "Freelance",
    logo: "",
    from: "September, 2023",
    to: "present",
    location: "Remote from Taiwan (Japan)",
    role: "Web Developer (front-end)",
    alt: "",
    activity: [
      "Develop a web application for stock management and client portfolio.",
      "Participate to the meeting reviews with the clients.",
    ],
  },
  {
    company: "TaskUs",
    logo: TaskusLogo,
    from: "April, 2023",
    to: "August, 2023",
    location: "Taipei, Taiwan",
    role: "Teammate",
    alt: "taskus",

    activity: [
      "Assist customers in Japanese by phone.",
      "Introduce the products/services to potential customers.",
    ],
  },
  {
    company: "Hotel Banister Kyoto",
    logo: BanisterLogo,
    from: "July, 2020",
    to: "June, 2021",
    location: "Kyoto, Japan",
    role: "Hotel Front Desk Staff",
    alt: "hotel banister",
    activity: [
      "Take new reservations.",
      "Assisgn the rooms.",
      "Check the room cleaning.",
      "Manage the cleaning staff.",
      "Operate the check-in/check-out.",
      "Assist the staff in café/restaurant.",
    ],
  },
  {
    company: "Japan Experience",
    logo: JELogo,
    from: "February, 2017",
    to: "November, 2019",
    location: "Kyoto, Japan",
    role: "Travel Angel",
    alt: "japan experience",
    activity: [
      "Manage the different accommodations owned or opertated by Japan Experience.",
      "Operate the check-in/check-out.",
      "Assist the travellers during their stay in Kyoto.",
      "Assist customer by phone or email regarding the other services offered by Japan Experience(SIM Card, Japan Rail Pass, car rental...)",
      "Do guiding activities (Gion by night, bycicle along the Kamogawa)",
    ],
  },
  {
    company: "Japan Experience",
    logo: JELogo,
    from: "February, 2016",
    to: "December, 2016",
    location: "Paris, France",
    role: "Sales Assistant",
    alt: "japan experience",
    activity: [
      "Welcome the customers in our boutique in Paris.",
      "Sell different products or services (SIM Card, Japan Rail Pass, car rental...) to travel in Japan.",
      "Assist customer by phone or email regarding the other services offered by Japan Experience.",
    ],
  },
];

const snsLinks = [
  {
    url: "https://www.linkedin.com/in/william-farre-50657391/",
    logo: <LinkedIn fontSize="inherit" />,
    description: "link to my linkedin page",
  },
  {
    url: "https://www.instagram.com/wfarre/",
    logo: <Instagram fontSize="inherit" />,
    description: "link to my instagram account",
  },
  {
    url: "https://www.facebook.com/william.farre/",
    logo: <Facebook fontSize="inherit" />,
    description: "link to my facebook page",
  },
  {
    url: "https://github.com/wfarre",
    logo: <GitHub fontSize="inherit" />,
    description: "link to my github repository",
  },
];

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize(window) {
      // Set window width/height to state
      setWindowSize({
        width: window?.innerWidth,
        height: window?.innerHeight,
      });
    }

    // Add event listener
    if (window !== undefined) {
      window?.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize(window);
      // Remove event listener on cleanup
      return () => window?.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default function Home() {
  // console.log(window.innerWidth);
  const size = useWindowSize();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const projectVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className="relative w-full">
      {isContactModalOpen && (
        <ContactModal handleCloseModal={() => setIsContactModalOpen(false)} />
      )}

      <Navbar windowSize={size} />
      <Header setIsContactModalOpen={() => setIsContactModalOpen(true)} />
      <main>
        <section
          id="skills"
          className="mx-4 mt-48 max-w-5xl sm:px-10 lg:mx-auto"
        >
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
                      key={skill + index}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="flex h-20 w-20 items-center justify-center rounded-lg bg-white p-4 shadow-2xl shadow-slate-600/20"
                      >
                        <Image src={skill} alt={skill}></Image>
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
                      key={skill + index}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="flex h-20 w-20 items-center justify-center rounded-lg bg-white p-4 shadow-2xl shadow-slate-600/20"
                      >
                        <Image src={skill} alt={skill}></Image>
                      </motion.div>
                    </motion.li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </section>

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
        </section>

        <section
          id="experiences"
          className="mx-4 mb-3 max-w-5xl sm:px-10 lg:mx-auto"
        >
          <SectionHeader
            headerTitle={"Experiences"}
            headerContent={
              "Before turning into programming, I worked for 10 years in the customer service industry, including in the hospitality/travel industry where I developped my interpersonal and language skills. Here are my main professional experiences."
            }
            headerLinks={[
              {
                text: "Visit my LinkedIn",
                url: "https://www.linkedin.com/in/william-farre-50657391/",
              },
            ]}
          />

          <Timeline position={size.width > 640 ? "alternate" : "right"}>
            {workExperiences.map((experience, index) => {
              return (
                <TimelineItem key={experience.company + experience.activity}>
                  {size.width > 640 && (
                    <TimelineOppositeContent
                      sx={{ m: "auto 0" }}
                      align="right"
                      variant="body2"
                      color="text.secondary"
                    >
                      <motion.div
                        whileInView={{
                          opacity: [0, 1],
                        }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 1.5 }}
                      >
                        <h3 className="text-xl font-bold uppercase text-teal-500">
                          {experience.company}
                        </h3>
                        <p>
                          {experience.from} - {experience.to}
                        </p>
                      </motion.div>
                    </TimelineOppositeContent>
                  )}
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot
                      color={"inherit"}
                      className="relative h-10 w-10 overflow-hidden bg-teal-500"
                    >
                      {experience.logo && (
                        <Image
                          className="left-0 top-0 object-contain"
                          src={experience.logo}
                          fill
                          alt={"logo"}
                        />
                      )}
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    {size.width < 640 && (
                      <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                      >
                        <motion.div
                          whileInView={{
                            opacity: [0, 1],
                          }}
                          viewport={{ once: true, amount: 0.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <h3 className="text-xl font-bold uppercase text-teal-500">
                            {experience.company}
                          </h3>
                          <p className="text-sm sm:text-base">
                            {experience.from} - {experience.to}
                          </p>
                        </motion.div>
                      </TimelineOppositeContent>
                    )}
                    <motion.div
                      whileInView={{
                        translateX: [
                          `${index % 2 === 0 ? "100%" : "-100%"}`,
                          "0",
                        ],
                        opacity: [0, 1],
                      }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 1.5 }}
                      className="w-[60vw] rounded-lg bg-white px-4 py-3 shadow-sm sm:w-auto"
                    >
                      <h4 className="text-left text-sm font-bold sm:text-base">
                        {experience.role}
                      </h4>
                      <ul className="list-disc pl-4 text-left">
                        {experience.activity.map((act, actIndex) => {
                          return (
                            <li
                              className="text-sm sm:text-base"
                              key={`act${index + actIndex}`}
                            >
                              {act}
                            </li>
                          );
                        })}
                      </ul>
                    </motion.div>
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </Timeline>
        </section>

        <section
          id="contact"
          className="mt-32 flex flex-col items-center justify-center gap-6 bg-slate-950/80 py-8 text-center text-white"
        >
          <header className="text-2xl font-bold uppercase">
            <h2>Any question? Feel free to contact me!</h2>
          </header>
          <Button
            text={"Contact me"}
            handleClick={() => setIsContactModalOpen(true)}
          />
        </section>

        <section
          id="contact-information"
          className="mx-4 mb-32 mt-32 max-w-5xl sm:px-10 lg:mx-auto"
        >
          <SectionHeader headerTitle={"Contact Information"} />

          <ul className="flex w-full flex-col flex-wrap items-center justify-between gap-8 sm:flex-row">
            <li className="relative aspect-[767/810] max-h-96 w-52 sm:w-[40%]">
              <Image src={ContactImage} alt="" fill />
            </li>
            <li className="flex flex-col gap-3">
              {personalInformation.map((info, index) => {
                return (
                  <figure key={info.title + index} className="flex gap-3">
                    <Image
                      src={info.icon}
                      width={20}
                      height={20}
                      alt={info.title}
                    />
                    <figcaption className="sm:text-2xl">
                      {info.content}
                    </figcaption>
                  </figure>
                );
              })}
            </li>
          </ul>
        </section>
      </main>

      <footer className="bg-slate-950/80 pt-4 text-white">
        <ul className="mt-4 flex justify-center gap-4 pb-4">
          {snsLinks.map((link) => {
            return (
              <motion.div key={link.description} whileHover={{ scale: 1.1 }}>
                <Link
                  href={link.url}
                  target="_blank"
                  className="text-2xl text-white transition-all duration-300 hover:text-teal-200 sm:text-4xl"
                >
                  {link.logo}
                </Link>
              </motion.div>
            );
          })}
        </ul>
        <div className="attribution text-center text-sm">
          Designed and coded by William Farre. <Copyright />
          2024
        </div>
      </footer>
    </div>
  );
}

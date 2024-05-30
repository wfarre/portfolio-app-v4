"use client";

import { motion } from "framer-motion";
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
  // Linkedin,
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
  phoneIcon,
  envelopeIcon,
  houseIcon,
  FrontendMentor,
  // Instagram,
  // Facebook,
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

import TaskusLogo from "@/assets/images/logo/taskus-logo.jpeg";
import JELogo from "@/assets/images/logo/je-logo.jpeg";
import BanisterLogo from "@/assets/images/logo/banister-logo.jpeg";
import { Icon } from "@mui/material";
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
import ContactModal from "./components/ContactModal/ContactModal";
// import { Instagram } from "@mui/icons-material";
// import TaskusLogo from "@/assets/images/logo/taskus-logo.jpeg";

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
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default function Home() {
  const size = useWindowSize();

  useEffect(() => {
    console.log(size);
  }, [size]);
  return (
    <>
      <ContactModal />
      <Navbar />
      <Header />
      <main>
        <section className=" mt-48 max-w-5xl lg:mx-auto sm:px-10 mx-4">
          <SectionHeader
            headerTitle={"skills"}
            headerContent={
              "Beside my google searching skills, I have many other skills in Programming. Also, I have lived for several Japan so I can speak Japanese fluently. Please check below to discover my other skills. "
            }
          />

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

        <section className="mt-32 mb-40 max-w-5xl lg:mx-auto sm:px-10 mx-4">
          {/* <h2 className="font-bold uppercase text-2xl text-center bg-gradient-to-tr from-teal-500 to-teal-200 bg-clip-text text-transparent mb-12">
            Projects
          </h2> */}
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

        <section className="mb-3 max-w-5xl lg:mx-auto sm:px-10 mx-4">
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
                      <h3 className="text-teal-500 uppercase text-xl font-bold">
                        {experience.company}
                      </h3>
                      <p>
                        {experience.from} - {experience.to}
                      </p>
                    </TimelineOppositeContent>
                  )}
                  <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot
                      color={"inherit"}
                      className="relative w-10 h-10 overflow-hidden bg-teal-500"
                    >
                      {/* {experience.logo} */}
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
                    {/* <TimelineContent> */}
                    {size.width < 640 && (
                      <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                      >
                        <h3 className="text-teal-500 uppercase text-xl font-bold">
                          {experience.company}
                        </h3>
                        <p>
                          {experience.from} - {experience.to}
                        </p>
                      </TimelineOppositeContent>
                    )}
                    <div className=" bg-white py-3 px-4 shadow-sm rounded-lg w-[60vw] sm:w-auto">
                      <h4 className="font-bold text-left">{experience.role}</h4>
                      <ul className="list-disc text-left pl-4">
                        {experience.activity.map((act, actIndex) => {
                          return <li key={`act${index + actIndex}`}>{act}</li>;
                        })}
                      </ul>
                    </div>
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </Timeline>
        </section>

        <section className="flex justify-center flex-col items-center text-center gap-6  bg-slate-950/80 py-8 text-white mt-32">
          <header className="text-2xl uppercase font-bold">
            <h2>Any question? Feel free to contact me!</h2>
          </header>
          <Button text={"Contact me"} />
        </section>

        <section className=" mt-32 mb-32 max-w-5xl lg:mx-auto sm:px-10 mx-4">
          <SectionHeader headerTitle={"Contact Information"} />

          <ul className="flex  gap-8 items-center w-full justify-between flex-wrap flex-col sm:flex-row ">
            <li className="relative w-52 sm:w-[40%] max-h-96 aspect-[767/810]">
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

      <footer className="bg-slate-950/80 text-white pt-4">
        <ul className="flex gap-4 mt-4 pb-4 justify-center">
          {snsLinks.map((link) => {
            return (
              <motion.div key={link.description} whileHover={{ scale: 1.1 }}>
                <Link
                  href={link.url}
                  target="_blank"
                  className="text-2xl sm:text-4xl text-white hover:text-teal-200 transition-all duration-300"
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
    </>
  );
}

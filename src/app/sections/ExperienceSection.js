import React from "react";
import { animate, motion } from "framer-motion";
import SectionHeader from "../components/ui/SectionHeader/SectionHeader";
import TaskusLogo from "@/assets/images/logo/taskus-logo.jpeg";
import JELogo from "@/assets/images/logo/je-logo.jpeg";
import BanisterLogo from "@/assets/images/logo/banister-logo.jpeg";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Image from "next/image";
import useWindowSize from "../hooks/useWindowSize";

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

const ExperienceSection = () => {
  const size = useWindowSize();

  return (
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
                    translateX: [`${index % 2 === 0 ? "100%" : "-100%"}`, "0"],
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
  );
};

export default ExperienceSection;

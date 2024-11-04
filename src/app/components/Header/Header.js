"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import HeroImage from "@/assets/images/dev-image.svg";
import Button from "../ui/Button/Button";

const Header = ({ setIsContactModalOpen }) => {
  return (
    <header
      id="home"
      className="mx-4 mt-32 max-w-5xl text-center sm:px-10 sm:text-left lg:mx-auto"
    >
      <div className="flex flex-col-reverse items-center gap-4 sm:flex-row">
        <motion.ul
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="flex w-fit max-w-[500px] flex-col gap-3 opacity-0"
        >
          <li>
            <h1 className="text-6xl font-bold text-slate-900">
              Hello, <br /> {"I'm "}
              <span className="bg-gradient-to-tr from-teal-500 to-teal-200 bg-clip-text text-transparent">
                William
              </span>
              .
            </h1>
          </li>
          <li>
            <p className="text-xl font-bold">Front-End Web Developer</p>
          </li>
          <li>
            <p>I am specialised in React and Google searches.</p>
          </li>
          <li className="mt-3">
            <Button
              text={"Contact me"}
              handleClick={() => setIsContactModalOpen(true)}
            />
          </li>
        </motion.ul>
        <motion.div
          animate={{ translateX: ["100%", "0"], opacity: ["0", "100%"] }}
          transition={{ duration: 1.5, type: "spring" }}
          className="opacity-0"
        >
          <Image src={HeroImage} alt="" />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;

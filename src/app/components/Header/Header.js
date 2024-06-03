"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import HeroImage from "@/assets/images/dev-image.svg";
import Button from "../Button/Button";

const Header = ({ setIsContactModalOpen }) => {
  return (
    <header
      id="home"
      className="mx-4 mt-32 max-w-5xl text-center sm:px-10 sm:text-left lg:mx-auto"
    >
      <div className="flex flex-col-reverse items-center gap-4 sm:flex-row">
        <ul className="flex w-fit max-w-[500px] flex-col gap-3">
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
            {/* <motion.button
              whileHover={{ scale: 1.2 }}
              className="bg-gradient-to-tr from-teal-500 to-teal-200 py-2 px-6 rounded-lg text-white font-bold uppercase text-base"
              onClick={() => setIsContactModalOpen(true)}
              type="button"
            >
              Contact
            </motion.button> */}
          </li>
        </ul>
        <div>
          <Image src={HeroImage} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;

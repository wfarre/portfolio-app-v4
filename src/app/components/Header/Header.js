"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import HeroImage from "@/assets/images/dev-image.svg";

const Header = () => {
  return (
    <header className=" mx-40 mt-32 ">
      <div className="flex gap-4 items-center">
        <ul className="flex flex-col gap-3 w-fit max-w-[500px]">
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
            <p className="font-bold text-xl">Front-End Web Developer</p>
          </li>
          <li>
            <p>
              Thankfully, I am a web developer who enjoy building websites and
              web applications. My main stack is Google searches! Besides
              Google, I generally use React or Svelte.
            </p>
          </li>
          <li className="mt-3">
            <motion.button
              whileHover={{ scale: 1.2 }}
              className="bg-gradient-to-tr from-teal-500 to-teal-200 py-2 px-6 rounded-lg text-white font-bold uppercase"
            >
              Contact me
            </motion.button>
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

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import HeroImage from "@/assets/images/dev-image.svg";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className=" mt-32 max-w-5xl lg:mx-auto sm:px-10 mx-4 ">
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
            <p>I am specialised in React and Google searches.</p>
          </li>
          <li className="mt-3">
            <Button text={"Contact me"} />
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

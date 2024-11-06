"use client";

import React from "react";
import Button from "../ui/Button/Button";
import { AuroraBackground } from "../ui/Aurora";
import OrbitCircles from "../ui/OrbitCircles";
import IconCloud from "@/components/magicui/icon-cloud";

const Header = ({ setIsContactModalOpen }) => {
  return (
    <header
      id="home"
      className="relative flex h-[100vh] justify-center sm:px-10 sm:text-left"
    >
      <div className="z-10 flex h-full w-full max-w-[600px] flex-1 flex-col items-center justify-center text-center">
        <h2 className="font-bold text-slate-900 md:text-xl">
          Hello 👋, {"I'm William"}
        </h2>

        <h1 className="bg-gradient-to-tr from-teal-500 to-teal-200 bg-clip-text text-6xl font-bold uppercase text-transparent md:text-8xl">
          Frontend <br /> Developer
        </h1>

        <p className="mb-8 mt-4">
          I am a dedicated frontend developer skilled in creating responsive,
          user-friendly web applications using React, JavaScript, and
          TypeScript.
        </p>

        <Button
          text={"Contact me"}
          handleClick={() => setIsContactModalOpen(true)}
        />
      </div>
      {/* <div className="relative left-[-150px] z-0 w-[700px]"> */}
      {/* <OrbitCircles></OrbitCircles> */}
      {/* <IconCloud /> */}
      {/* </div> */}
    </header>
  );
};

export default Header;

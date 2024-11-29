"use client";

import React from "react";
import Button from "../ui/Button";
import { motion } from "framer-motion";

const Header = ({ setIsContactModalOpen }) => {
  return (
    <header
      id="home"
      className="relative flex h-[100vh] justify-center sm:px-10 sm:text-left"
    >
      <div className="z-10 flex h-full w-full max-w-[600px] flex-1 flex-col items-center justify-center text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-bold md:text-xl"
        >
          Hello 👋, {"I'm William"}
        </motion.h2>
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="bg-gradient-to-tr from-teal-500 to-teal-200 bg-clip-text text-6xl font-bold uppercase text-transparent md:text-8xl"
        >
          Frontend <br /> Developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-8 mt-4"
        >
          I am a dedicated frontend developer skilled in creating responsive,
          user-friendly web applications using React, JavaScript, and
          TypeScript.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <Button
            text={"Contact me"}
            handleClick={() => setIsContactModalOpen(true)}
          />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;

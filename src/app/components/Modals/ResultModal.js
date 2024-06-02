import React from "react";
import { motion } from "framer-motion";
import Button from "../Button/Button";

const ResultModal = ({ handleClick }) => {
  return (
    <>
      <motion.div
        animate={{
          scale: [0, 0.25, 0.5, 1],
          borderRadius: ["50%", "25%", "12.5%", "24px"],
        }}
        transition={{ ease: "linear", delay: 0, duration: 0.4 }}
        className="h-50 w-50 flex flex-col items-center gap-5 rounded-lg bg-white px-4 py-5"
      >
        <p className="text-2xl">Thank you for your message!</p>
        <div>
          <Button text={"OK"} handleClick={handleClick}></Button>
        </div>
      </motion.div>
    </>
  );
};

export default ResultModal;

import React from "react";
import { motion } from "framer-motion";

const Loader = ({ isLoading, onAnimationComplete }) => {
  return (
    <motion.div
      animate={
        isLoading
          ? { scale: [0.01, 0.4, 0.6, 0.8, 1] }
          : { scale: [1, 0.8, 0.6, 0.4, 0.01] }
      }
      transition={{ duration: 1 }}
      className="h-16 w-16"
      onAnimationComplete={onAnimationComplete()}
    >
      <div
        // animate={{ scale: [0.01, 0.5, 1] }}
        // transition={{ duration: 1.5, delay: 0.5 }}
        className="h-full w-full animate-rotation rounded-[50%] border-[8px] border-white border-t-teal-500"
      ></div>
      {/* <div
        animate={{ scale: [0.01, 0.5, 1] }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="h-16 w-16 animate-rotation rounded-[50%] border-[8px] border-white border-t-teal-500"
      ></div> */}
    </motion.div>
  );
};

export default Loader;

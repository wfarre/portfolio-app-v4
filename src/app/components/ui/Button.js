import React from "react";
import { motion } from "framer-motion";

const Button = ({ text, handleClick }) => {
  const handleButtonClick = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    handleClick(e);
  };

  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.2 }}
      className="rounded-lg bg-gradient-to-tr from-teal-500 to-teal-200 px-6 py-2 text-base font-bold uppercase text-white"
      onClick={(e) => handleButtonClick(e)}
      type="button"
    >
      {text}
    </motion.button>
  );
};

export default Button;

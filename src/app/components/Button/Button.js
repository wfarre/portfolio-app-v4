import React from "react";
import { motion } from "framer-motion";

const Button = ({ text }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      className="bg-gradient-to-tr from-teal-500 to-teal-200 py-2 px-6 rounded-lg text-white font-bold uppercase"
    >
      {text}
    </motion.button>
  );
};

export default Button;

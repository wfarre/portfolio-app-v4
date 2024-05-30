"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  {
    text: "About",
    path: "/about",
  },
  {
    text: "Projects",
    path: "/projects",
  },
  {
    text: "Contact",
    path: "/contact",
  },
];
import React from "react";

const Navbar = () => {
  return (
    <nav className="py-10 max-w-5xl lg:mx-auto sm:px-10 mx-4">
      <ul className="flex justify-end gap-4 align-middle">
        <li className="mr-auto">
          <motion.div whileHover={{ scale: 1.2 }}>
            <Link
              className="text-lg font-bold bg-gradient-to-tr from-teal-500 to-teal-200 p-2 text-white rounded-lg"
              href="/"
            >
              WF
            </Link>
          </motion.div>
        </li>

        {links.map((link, index) => {
          return (
            <li
              className="relative after:absolute after:w-full after:bottom-0 after:left-0 after:h-[2px] after:bg-teal-500 after:scale-0 hover:after:scale-100 after:transition-all after:duration-500"
              key={link.text + index}
            >
              <Link
                className="hover:text-teal-500 transition-colors duration-300"
                href={link.path}
              >
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

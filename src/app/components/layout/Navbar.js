"use client";

import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const links = [
  {
    text: "about",
    path: "#experiences",
  },
  {
    text: "Skills",
    path: "#skills",
  },
  {
    text: "Projects",
    path: "#projects",
  },
  {
    text: "Contact",
    path: "#contact-information",
  },
];

const useScrollY = () => {
  const [windowScrollY, setWindowScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setWindowScrollY(window?.scrollY);
    };

    if (typeof window !== undefined)
      window?.addEventListener("scroll", (e) => {
        handleScroll();
      });

    return () => window?.removeEventListener("scroll", handleScroll);
  }, []);
  return windowScrollY;
};

const Navbar = ({ windowSize }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const windowScrollY = useScrollY();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [windowScrollY]);

  return (
    <motion.nav
      animate={{ translateY: ["-100%", "0"] }}
      transition={{ duration: 1 }}
      className={`fixed left-0 top-6 z-30 flex w-full justify-center text-base`}
    >
      <ul className="flex h-full justify-center gap-4 rounded-full px-6 text-slate-700 backdrop-blur-lg">
        {links.map((link, index) => {
          return (
            <li
              className="relative h-full py-4 transition-all duration-500 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-0 after:bg-teal-500 after:transition-all after:duration-500 focus-within:scale-105 focus-within:after:scale-100 hover:scale-105 hover:after:scale-100"
              key={link.text + index}
            >
              <Link
                className="uppercase outline-none transition-colors duration-300 focus-within:text-teal-500 hover:text-teal-500"
                href={link.path}
              >
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
};

export default Navbar;

"use client";

import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const links = [
  {
    text: "About",
    path: "#about",
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

  console.log(windowScrollY);

  console.log(windowSize);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [windowScrollY]);

  const variants = {
    open: {
      width: "320px",
    },

    closed: {
      width: "40px",
    },
  };

  return (
    <motion.nav
      animate={{ translateY: ["-100%", "0"] }}
      transition={{ duration: 1 }}
      className={`fixed left-0 top-0 z-30 w-full bg-white text-base sm:bg-transparent`}
    >
      <ul
        className={`flex max-w-5xl items-center justify-end gap-4 bg-slate-300/20 px-4 py-2 align-middle sm:bg-transparent sm:px-10 sm:py-10 lg:mx-auto`}
      >
        {((windowSize.width > 640 && windowScrollY < 70) ||
          windowSize.width < 640) && (
          <li className="mr-auto">
            <motion.div whileHover={{ scale: 1.2 }}>
              <Link
                className={`rounded-lg bg-gradient-to-tr from-teal-500 to-teal-200 p-2 text-lg font-bold text-white ${isMenuOpen && "opacity-0"} transition-opacity duration-300`}
                href="/"
              >
                WF
              </Link>
            </motion.div>
          </li>
        )}

        {windowSize.width >= 640 && windowScrollY < 70 && (
          <motion.li className="absolute right-0 top-0 h-screen w-[50vw] pl-4 pt-24 sm:relative sm:h-auto sm:w-auto sm:pt-0">
            <ul className="flex w-full flex-col items-center gap-4 sm:flex-row">
              {links.map((link, index) => {
                return (
                  <li
                    className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-0 after:bg-teal-500 after:transition-all after:duration-500 hover:after:scale-100"
                    key={link.text + index}
                  >
                    <Link
                      className="transition-colors duration-300 hover:text-teal-500"
                      href={link.path}
                    >
                      {link.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.li>
        )}

        {(windowSize.width < 640 || windowScrollY > 70) && (
          <motion.li
            whileTap={{ scale: 0.8 }}
            className="rounded-full bg-white"
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              variants={variants}
              className={`relative flex min-h-11 min-w-12 items-center rounded-full border-2 border-solid border-slate-400 bg-slate-300/20 pl-2 ${isMenuOpen && "w-80"} transition-all duration-500 hover:border-teal-500`}
            >
              <button
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
                className="absolute right-0 top-0 z-40 flex h-10 w-11 scale-75 flex-col justify-between px-1 py-1"
              >
                <div
                  className={`h-1 w-full ${isMenuOpen && "translate-y-4 rotate-45"} z-20 bg-slate-500 transition-all duration-500`}
                ></div>
                <div
                  className={`h-1 w-full bg-slate-500 ${isMenuOpen && "opacity-0"} z-20 transition-all duration-300`}
                ></div>
                <div
                  className={`h-1 w-full ${isMenuOpen && "translate-y-[-12px] rotate-[-45deg]"} z-20 bg-slate-500 transition-all duration-500`}
                ></div>
              </button>

              {isMenuOpen && (
                <ul className="flex w-full flex-row gap-4">
                  {links.map((link, index) => {
                    return (
                      <motion.li
                        animate={{ opacity: [0, 1] }}
                        transition={{ delay: 0.5 }}
                        className="relative z-40 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-0 after:bg-teal-500 after:transition-all after:duration-500 hover:after:scale-100"
                        key={link.text + index}
                      >
                        <Link
                          className="transition-colors duration-300 hover:text-teal-500"
                          href={link.path}
                        >
                          {link.text}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              )}
            </motion.div>
          </motion.li>
        )}
      </ul>
    </motion.nav>
  );
};

export default Navbar;

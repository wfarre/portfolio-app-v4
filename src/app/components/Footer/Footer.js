import React from "react";
import Link from "next/link";
import { animate, motion } from "framer-motion";

import {
  Copyright,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";

const snsLinks = [
  {
    url: "https://www.linkedin.com/in/william-farre-50657391/",
    logo: <LinkedIn fontSize="inherit" />,
    description: "link to my linkedin page",
  },
  {
    url: "https://www.instagram.com/wfarre/",
    logo: <Instagram fontSize="inherit" />,
    description: "link to my instagram account",
  },
  {
    url: "https://www.facebook.com/william.farre/",
    logo: <Facebook fontSize="inherit" />,
    description: "link to my facebook page",
  },
  {
    url: "https://github.com/wfarre",
    logo: <GitHub fontSize="inherit" />,
    description: "link to my github repository",
  },
];

const Footer = () => {
  return (
    <footer className="bg-slate-950/80 pt-4 text-white">
      <ul className="mt-4 flex justify-center gap-4 pb-4">
        {snsLinks.map((link) => {
          return (
            <li
              key={link.description}
              className="group relative scale-100 outline-none transition-all duration-300 focus-within:scale-125 hover:scale-125"
            >
              <Link
                href={link.url}
                target="_blank"
                className="text-2xl text-white outline-none transition-all duration-300 focus-within:text-teal-200 group-hover:text-teal-200 sm:text-4xl"
              >
                {link.logo}
                <span className="absolute left-0 top-0 scale-0">
                  {link.description}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="attribution text-center text-xs">
        Designed and coded by William Farre. <Copyright />
        2024
      </div>
    </footer>
  );
};

export default Footer;

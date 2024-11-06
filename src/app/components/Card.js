import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { github, liveurl } from "@/assets/icons";
import { motion } from "framer-motion";
import Loader from "./ui/Loader";

const Card = (props) => {
  return (
    <figure className="w-full">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="group relative aspect-[621/321] w-full overflow-hidden rounded-lg after:absolute after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:bg-teal-500 after:opacity-0 after:transition-all after:duration-300 focus-within:after:opacity-70 hover:after:opacity-70"
      >
        <Image
          className="object-cover"
          src={props.imageUrl}
          placeholder={"blur"}
          loading="lazy"
          alt="ecommerce project"
        />

        <ul className="absolute left-0 top-0 z-20 flex h-full w-full flex-col items-center justify-center gap-4 opacity-0 transition-all duration-500 group-focus-within:opacity-100 group-hover:opacity-100">
          {props.github && (
            <li>
              <Link
                className="relative flex w-fit items-center gap-2 rounded-md px-2 py-1 uppercase text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-0 after:bg-white after:transition-all after:duration-300 hover:after:scale-100"
                href={props.github}
                target="_blank"
              >
                View code
              </Link>
            </li>
          )}
          <li>
            <Link
              className="relative flex w-fit items-center gap-2 px-2 py-1 uppercase text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-0 after:bg-white after:transition-all after:duration-300 hover:after:scale-100"
              href={props.live}
              target="_blank"
            >
              View website
            </Link>
          </li>
        </ul>
      </motion.div>
      <h3 className="pb-2 pt-4 text-base uppercase text-slate-950">
        {props.title}
      </h3>

      <ul className="flex flex-wrap items-center gap-2 pb-4">
        {props.tags.map((tag, index) => {
          return (
            <li
              className="w-fit rounded-xl bg-gradient-to-tr from-teal-500 to-teal-200 px-2 py-1 text-xs uppercase text-white"
              key={tag + index}
            >
              {tag}
            </li>
          );
        })}
        <li className="ml-auto md:hidden">
          <ul className="flex items-center gap-2">
            {props.github && (
              <li>
                <Link href={props.github} target="_blank">
                  <Image
                    width={20}
                    height={20}
                    src={github}
                    alt="link to github repository"
                  />
                </Link>
              </li>
            )}
            <li>
              <Link href={props.live} target="_blank">
                <Image
                  width={20}
                  height={20}
                  src={liveurl}
                  alt="link to live website"
                />
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </figure>
  );
};

export default Card;

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

import { github, liveurl } from "@/assets/icons";

import KasaImg from "@/assets/images/kasa.png";
import PetitsPlatsImg from "@/assets/images/petitsplats.png";
import SpaceTourismImg from "@/assets/images/spacetourism.png";
import PortfolioImg from "@/assets/images/porfolio.png";
import FisheyeImg from "@/assets/images/fisheye.png";
import EcommerceImg from "@/assets/images/ecommerce.png";
// import Card from "./components/Card/Card";
import { motion } from "framer-motion";

const Card = (props) => {
  const ref = useRef();

  return (
    <figure className="w-full">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="group relative w-full aspect-[621/321] rounded-lg overflow-hidden after:absolute after:bg-teal-500 after:top-0 after:left-0 after:z-10 after:h-full after:w-full after:opacity-0 hover:after:opacity-70 after:transition-all after:duration-300 "
      >
        <Image
          className="object-cover"
          src={props.imageUrl}
          fill={true}
          alt="ecommerce project"
        />

        <ul className="group-hover:opacity-100 transition-all duration-500 opacity-0 absolute h-full w-full left-0 top-0 z-20 flex justify-center items-center flex-col gap-4">
          {props.github && (
            <li>
              <Link
                className="flex gap-2 items-center w-fit py-1 px-2 text-white rounded-md uppercase relative after:absolute after:bottom-0 after:left-0 after:origin-left after:scale-0 after:w-full after:h-[2px] after:bg-white hover:after:scale-100 after:transition-all after:duration-300"
                href={props.github}
              >
                View code
              </Link>
            </li>
          )}
          <li>
            <Link
              className="flex gap-2 items-center w-fit py-1 px-2 uppercase text-white relative after:absolute after:bottom-0 after:left-0 after:origin-left after:scale-0 after:w-full after:h-[2px] after:bg-white hover:after:scale-100 after:transition-all after:duration-300"
              href={props.live}
            >
              View website
            </Link>
          </li>
        </ul>
      </motion.div>
      <h3 className="uppercase text-base pt-4 pb-2 text-slate-950">
        {props.title}
      </h3>

      <ul className="flex gap-2 pb-4 items-center flex-wrap">
        {props.tags.map((tag, index) => {
          return (
            <li
              className="w-fit text-xs uppercase bg-gradient-to-tr from-teal-500 to-teal-200 text-white rounded-xl py-1 px-2"
              key={tag + index}
            >
              {tag}
            </li>
          );
        })}
        <li className="ml-auto md:hidden">
          <ul className="flex gap-2 items-center">
            {props.github && (
              <li>
                <Link href={props.github}>
                  <Image
                    width={20}
                    height={20}
                    src={github}
                    target="_blank"
                    alt="link to github repository"
                  />
                </Link>
              </li>
            )}
            <li>
              <Link href={props.live}>
                <Image
                  width={20}
                  height={20}
                  src={liveurl}
                  target="_blank"
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

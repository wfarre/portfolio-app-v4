"use client";

import { animate, motion } from "framer-motion";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Image from "next/image";

import {
  css,
  git,
  github,
  html,
  javascript,
  mui,
  nextjs,
  react,
  sass,
  tailwindcss,
  typescript,
  svelte,
  phoneIcon,
  envelopeIcon,
  houseIcon,
  bootstrap,
} from "../assets/icons";

import english from "@/assets/icons/english.svg";
import japanese from "@/assets/icons/japanese.svg";
import french from "@/assets/icons/french.svg";
import chinese from "@/assets/icons/chinese.svg";

import KasaImg from "@/assets/images/kasa.png";
import PetitsPlatsImg from "@/assets/images/petitsplats.png";
import SpaceTourismImg from "@/assets/images/spacetourism.png";
import PortfolioImg from "@/assets/images/porfolio.png";
import FisheyeImg from "@/assets/images/fisheye.png";
import EcommerceImg from "@/assets/images/ecommerce.png";
import Card from "./components/Card";

import TaskusLogo from "@/assets/images/logo/taskus-logo.jpeg";
import JELogo from "@/assets/images/logo/je-logo.jpeg";
import BanisterLogo from "@/assets/images/logo/banister-logo.jpeg";
import Button from "./components/ui/Button";
import SectionHeader from "./components/ui/SectionHeader";
import { useEffect, useState } from "react";
import ContactModal from "./components/Modals/ContactModal";
import Footer from "./components/Footer";
import ContactInformationSection from "./sections/ContactInformationSection";
import ExperienceSection from "./sections/ExperienceSection";
import useWindowSize from "./hooks/useWindowSize";
import SkillSection from "./sections/SkillSection";
import ProjectSection from "./sections/ProjectSection";

export default function Home() {
  const size = useWindowSize();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="relative w-full">
      {isContactModalOpen && (
        <ContactModal handleCloseModal={() => setIsContactModalOpen(false)} />
      )}
      <Navbar windowSize={size} />
      <Header setIsContactModalOpen={() => setIsContactModalOpen(true)} />
      <main>
        <ExperienceSection />
        <SkillSection />
        <ProjectSection />
        <ContactInformationSection
          setIsContactModalOpen={() => setIsContactModalOpen(true)}
        />
      </main>
      <Footer />
    </div>
  );
}

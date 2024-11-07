"use client";
import Navbar from "./components/layout/Navbar";
import Header from "./components/layout/Header";
import { useState } from "react";
import ContactModal from "./components/ui/ContactModal";
import Footer from "./components/layout/Footer";
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

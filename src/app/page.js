"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
    </>
  );
}

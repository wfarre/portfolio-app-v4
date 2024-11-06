import React from "react";
import SectionHeader from "../components/ui/SectionHeader";
import Image from "next/image";
import Button from "../components/ui/Button";
import ContactImage from "@/assets/images/contact-image.svg";

const personalInformation = [
  {
    title: "address",
    icon: houseIcon,
    content: "Kaohsiung, Sanmin District, Taiwan",
  },
  {
    title: "phone number",
    icon: phoneIcon,
    content: "+886 (0)933-730-512",
  },
  {
    title: "email address",
    icon: envelopeIcon,
    content: "william.farre@gmail.com",
  },
];

import { phoneIcon, envelopeIcon, houseIcon } from "../../assets/icons";
import SectionFooter from "../components/ui/SectionFooter";

const ContactInformationSection = ({ setIsContactModalOpen }) => {
  "";
  return (
    <div id="contact">
      <section className="mt-32 flex flex-col items-center justify-center gap-6 bg-slate-950/80 py-8 text-center text-white">
        <header className="text-2xl font-bold uppercase">
          <h2>Any question? Feel free to contact me!</h2>
        </header>
        <Button
          text={"Contact me"}
          handleClick={() => setIsContactModalOpen(true)}
        />
      </section>
      <section
        id="contact-information"
        className="mx-4 mb-32 mt-32 max-w-5xl sm:px-10 lg:mx-auto"
      >
        <SectionHeader headerTitle={"Contact Information"} />

        <ul className="flex w-full flex-col flex-wrap items-center justify-between gap-8 sm:flex-row">
          <li className="relative aspect-[767/810] max-h-96 w-52 sm:w-[40%]">
            <Image src={ContactImage} alt="" fill />
          </li>
          <li className="flex flex-col gap-3">
            {personalInformation.map((info, index) => {
              return (
                <figure key={info.title + index} className="flex w-auto gap-3">
                  <Image
                    src={info.icon}
                    alt={info.title}
                    className="h-auto w-5"
                  />
                  <figcaption className="sm:text-2xl">
                    {info.content}
                  </figcaption>
                </figure>
              );
            })}
          </li>
        </ul>
        <SectionFooter />
      </section>
    </div>
  );
};

export default ContactInformationSection;

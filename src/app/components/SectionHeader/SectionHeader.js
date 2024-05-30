import Link from "next/link";
import React from "react";

const SectionHeader = ({ headerTitle, headerContent, headerLinks }) => {
  return (
    <header className="flex flex-col gap-3 mb-12">
      <h2 className="font-bold uppercase text-3xl text-center bg-gradient-to-tr from-teal-500 to-teal-200 bg-clip-text text-transparent">
        {headerTitle}
      </h2>
      {headerContent && <p className="">{headerContent}</p>}

      {headerLinks?.map((link, index) => {
        return (
          <Link
            key={link.text + index}
            className="uppercase text-teal-500  hover:opacity-70 self-end"
            href={link.url}
            target="_blank"
          >
            {link.text} <span>→</span>
          </Link>
        );
      })}
    </header>
  );
};

export default SectionHeader;

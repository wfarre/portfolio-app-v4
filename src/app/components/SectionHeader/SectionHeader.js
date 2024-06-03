import Link from "next/link";
import React from "react";

const SectionHeader = ({ headerTitle, headerContent, headerLinks }) => {
  return (
    <header className="mb-12 flex flex-col gap-3 text-center sm:text-left">
      <h2 className="bg-gradient-to-tr from-teal-500 to-teal-200 bg-clip-text text-3xl font-bold uppercase text-transparent">
        {headerTitle}
      </h2>
      {headerContent && <p className="">{headerContent}</p>}

      {headerLinks?.map((link, index) => {
        return (
          <Link
            key={link.text + index}
            className="self-end uppercase text-teal-500 hover:opacity-70"
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

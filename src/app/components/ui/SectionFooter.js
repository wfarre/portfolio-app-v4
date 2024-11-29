import Link from "next/link";
import React from "react";

const SectionFooter = () => {
  return (
    <footer className="mt-6 flex justify-end">
      <Link
        href={"#home"}
        className="z-50 font-semibold uppercase text-teal-500 hover:opacity-70"
        target="_self"
      >
        Go to the top ↑
      </Link>
    </footer>
  );
};

export default SectionFooter;

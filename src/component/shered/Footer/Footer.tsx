import { data } from "browserslist";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 py-5 text-center hidden md:block">
      <p className=" font-bold flex justify-center items-center text-white">&copy; {year} All rights reserved By <p className=" hover:text-red-400">kawsar hasan joy</p>.</p>
    </footer>
  );
};

export default Footer;

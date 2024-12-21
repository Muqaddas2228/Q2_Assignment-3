"use client";
import { FaGithub,FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[blue] text-center h-[40px] text-white">&copy;This page is created by using NEXT-JS
      <div className="flex flex-col items-center justify-between">
        </div>

        <div>
          <br />
        <a 
        href="https://github.com/Muqaddas2228"
        target="_blank"
        rel="noopener noreferror"
        className="h-[60px] transition-transform transform ml-60 "
        style={{ fontSize: "2rem"}}
        >
          <FaGithub />
        </a>
        <br />
        <a
        href="mailto:muqaddas3748@gmail.com"
        target="_blank"
        rel="noopener noreferror"
        className="transition-transform transform"
        style={{ fontSize:"2rem"}}
        >
          <FaEnvelope />
        </a>
        </div>
        </footer>

  );
}
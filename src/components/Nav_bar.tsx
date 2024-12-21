"use client"

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <nav className="bg-[blue] fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center h-16 px-4">
        {/* Logo or Brand */}
        <div className="text-white text-4xl font-bold">MS</div>

   {/* Navigation Links */}
   <ul
          className={`flex flex-col md:flex-row md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-[#0b0b0b] md:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <li className="text-white hover:bg-white font-semibold hover:text-black rounded-full text-center md:inline-block my-2 md:my-0 mx-0 md:mx-4 py-3 px-6">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="text-white hover:bg-white font-semibold hover:text-black rounded-full text-center md:inline-block my-2 md:my-0 mx-0 md:mx-4 py-3 px-6">
            <Link href={"/about"}>About</Link>
            </li>
          <li className="text-white font-semibold hover:bg-white hover:text-black rounded-full text-center md:inline-block my-2 md:my-0 mx-0 md:mx-4 py-3 px-6">
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
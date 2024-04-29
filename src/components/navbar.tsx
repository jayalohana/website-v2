"use client";
import React, { useState, useEffect } from "react";
import { SlHome, SlWrench, SlScreenDesktop } from "react-icons/sl";

const Navbar = () => {
  const [activeNavbar, setActiveNavbar] = useState("#");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileNav = (
    <nav className="fixed left-1/2 transform -translate-x-1/2 bottom-8 p-2 rounded-full flex gap-2 z-50 md:hidden">
      <a
        href="#"
        onClick={() => setActiveNavbar("#")}
        className={`mx-4 p-3 rounded-full font-black flex justify-center items-center text-black text-opacity-900 text-xl ${
          activeNavbar === "#" ? " text-opacity-100" : ""
        }  hover:text-black-300 cursor-pointer transform hover:scale-125 transition duration-150 ease-in-out hover:bg-opacity-800`}
      >
        <SlHome />
      </a>
      <a
        href="#Projects"
        onClick={() => setActiveNavbar("#projects")}
        className={`mx-4 p-3 rounded-full font-black flex justify-center items-center text-black text-opacity-900 text-xl ${
          activeNavbar === "#projects" ? " text-opacity-100" : ""
        }  hover:text-black-300 cursor-pointer transform hover:scale-125 transition duration-150 ease-in-out hover:bg-opacity-800`}
      >
        <SlScreenDesktop />
      </a>
      <a
        href="#Experience"
        onClick={() => setActiveNavbar("#experience")}
        className={`mx-4 p-3 font-black rounded-full flex justify-center items-center text-black text-opacity-900 text-xl ${
          activeNavbar === "#experience" ? " text-opacity-100" : ""
        }  hover:text-black-300 cursor-pointer transform hover:scale-125 transition duration-150 ease-in-out hover:bg-opacity-800`}
      >
        <SlWrench />
      </a>
    </nav>
  );

  const desktopNav = (
    <div className="text-black p-4">
      <ul className="flex justify-center">
        <li className="font-black mx-6 hover:text-black-300 cursor-pointer transform hover:scale-125 transition duration-150 ease-in-out">
          Home
        </li>
        <li className="font-black mx-6 hover:text-black-300 cursor-pointer transform hover:scale-125 transition duration-150 ease-in-out">
          Projects
        </li>
        <li className="mx-6 font-black hover:text-black-300 cursor-pointer transform hover:scale-125 transition duration-150 ease-in-out">
          Experience
        </li>
      </ul>
    </div>
  );

  return isMobile ? mobileNav : desktopNav;
};

export default Navbar;

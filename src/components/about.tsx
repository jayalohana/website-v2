import React from "react";

import { MdOutlineMailOutline } from "react-icons/md";
import { ImLinkedin2 } from "react-icons/im";
import { RiGithubLine } from "react-icons/ri";

const About = () => {
  return (
    <div className="border mt-40 justify-center ">
      <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-9xl text-black font-bold justify-center">
        Jaya Lohana
      </h1>
      <div className="flex space-x-4 mt-4">
        <a
          href="mailto:your.email@example.com"
          className="text-3xl text-black hover:text-gray-700"
        >
          <MdOutlineMailOutline title="Email" />
        </a>
        <a
          href="https://www.linkedin.com/in/your-profile"
          className="text-3xl text-black hover:text-gray-700"
        >
          <ImLinkedin2 title="LinkedIn" />
        </a>
        <a
          href="https://github.com/yourusername"
          className="text-3xl text-black hover:text-gray-700"
        >
          <RiGithubLine title="GitHub" />
        </a>
      </div>
    </div>
  );
};

export default About;

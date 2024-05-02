import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { ImLinkedin2 } from "react-icons/im";
import { RiGithubLine } from "react-icons/ri";
import { Button } from "./ui/button";

const About = () => {
  return (
    <div className="mt-40 flex justify-center items-start">
      <div>
        <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-9xl font-bold text-black text-[80px]">
          Jaya Lohana
        </h1>
        <h2 className="overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-xl font-bold mt-8">
          Computer Science student
        </h2>
        <h3 className="overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-lg font-bold mt-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
          animi
          <br />
          ut at dolores sapiente, rerum facilis distinctio cupiditate sint,
          modi,
          <br />
          quos harum error.
        </h3>
        <div className="flex space-x-4 mt-20">
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
          <Button>Resume</Button>
        </div>
      </div>
      <div className="pl-5">
        <div className="overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 font-bold text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, rem
          <br />
          necessitatibus sed, voluptas ut sint, dolor esse fugiat odit
          repellendus
          <br />
          eaque numquam ea nisi. Repellat ullam earum repellendus consequuntur
          <br />
          eaque numquam ea nisi. Repellat ullam earum repellendus consequuntur
          <br />
          eaque numquam ea nisi. Repellat ullam earum repellendus consequuntur
          <br />
          eaque numquam ea nisi. Repellat ullam earum repellendus consequuntur
          <br />
          eaque numquam ea nisi. Repellat ullam earum repellendus consequuntur
          <br />
          non!
        </div>
        <div className="overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 font-bold text-black mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          <br />
          sollicitudin, nisi a bibendum dictum, turpis lorem tempus enim,
          <br />
          eaque numquam ea nisi. Repellat ullam earum repellendus consequuntur
          <br />
          eaque numquam ea nisi. Repellat ullam earum repellendus consequuntur
          <br />
          eaque numquam ea nisi. Repellat ullam earum repellendus consequuntur
          <br />
          eaque numquam ea nisi. Repellat ullam earum repellendus consequuntur
          <br />
          euismod tristique dolor felis vitae ante.
        </div>
        <div className="overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 font-bold text-black mt-4">
          Aliquam erat volutpat. Duis et felis metus. Fusce consequat nisi
          <br />
          in augue mattis, non consequat felis venenatis.
        </div>
      </div>
    </div>
  );
};

export default About;

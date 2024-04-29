import React from "react";

const Navbar = () => {
  return (
    <div className=" text-black p-4">
      <ul className="flex justify-center">
        <li className="mx-6 hover:text-gray-300 cursor-pointer transform hover:scale-125 transition duration-150 ease-in-out">
          Home
        </li>
        <li className="mx-6 hover:text-gray-300 cursor-pointer transform hover:scale-125 transition duration-150 ease-in-out">
          Projects
        </li>
        <li className="mx-6 hover:text-gray-300 cursor-pointer transform hover:scale-125 transition duration-150 ease-in-out">
          Experience
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

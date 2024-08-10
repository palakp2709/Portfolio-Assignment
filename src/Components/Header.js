import React, { useState } from "react";

export const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="h-24 px-14 lg:px-24 flex justify-between items-center mx-auto sticky top-0 bg-[#0a192f] shadow-lg shadow-gray-600">
      <a href="#/">
        <i className="fa-solid fa-user-tie text-5xl text-pink-600 "></i>
      </a>
      <ul className="hidden md:flex  text-xs text-[#d3d9ec] uppercase">
        <a href={"#project"}>
          <li className="   hover:border-b-2 hover:border-pink-600">
            Projects
          </li>
        </a>
        <a href="#skill">
          <li className=" ml-6 hover:border-b-2 hover:border-pink-600">
            Skills
          </li>
        </a>
        <a href={"#about"}>
          <li className="  ml-6 hover:border-b-2 hover:border-pink-600">
            AboutMe
          </li>
        </a>
        <a href={"#contact"}>
          <li className=" ml-6 hover:border-b-2 hover:border-pink-600">
            ContactMe
          </li>
        </a>
      </ul>
      <div onClick={handleClick} className="md:hidden">
        {!nav ? (
          <i className="fa-solid fa-bars text-xl"></i>
        ) : (
          <i className="fa-solid fa-xmark text-xl"></i>
        )}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 p-12 bg-[#0a192f]  w-[44%]  duration-300 ease-in-out h-full md:hidden shadow-lg shadow-gray-400"
            : "fixed left-[-100%]"
        }
      >
        <a href={"/"}>
          <i className="fa-solid fa-user-tie  text-5xl text-pink-600"></i>
        </a>
        <ul className=" text-[0.7rem] uppercase py-6">
          <a href={"/project"}>
            <li className="py-4 duration-500 hover:scale-110 text-[#d3d9ec]">
              Projects
            </li>
          </a>
          <a href={"/skill"}>
            <li className=" py-4 duration-500 hover:scale-110 text-[#d3d9ec]">
              Skills
            </li>
          </a>
          <a href={"/about"}>
            <li className="py-4 duration-500 hover:scale-110 text-[#d3d9ec]">
              {" "}
              AboutMe{" "}
            </li>
          </a>
          <a href={"/contact"}>
            <li className="py-4 duration-500 hover:scale-110 text-[#d3d9ec]">
              ContactMe{" "}
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

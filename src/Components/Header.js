import React, { useState } from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="h-24 px-14 lg:px-24 flex justify-between items-center mx-auto sticky top-0 bg-black shadow-lg shadow-gray-600">
      <Link to={"/"}>
        <i className="fa-solid fa-user-tie text-4xl "></i>
      </Link>
      <ul className="hidden md:flex text-[0.7rem]  uppercase">
        <Link to={"/project"}>
          <li className="px-4 lg:pl-6 duration-100 hover:scale-110  ">
            Projects
          </li>
        </Link>
        <Link to={"/about"}>
          <li className="px-4 lg:px-6 duration-100 hover:scale-110  ">
            About{" "}
          </li>
        </Link>
        <Link to={"/contact"}>
          <li className="px-4 lg:px-6 duration-100 hover:scale-110  ">
            Contact{" "}
          </li>
        </Link>
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
            ? "fixed left-0 top-0 p-12 bg-black w-[44%] sm:w-[40%] duration-300 ease-in-out h-full md:hidden shadow-lg shadow-gray-400"
            : "fixed left-[-100%]"
        }
      >
        <Link to={"/"}>
          <i className="fa-solid fa-user-tie text-4xl "></i>
        </Link>
        <ul className=" text-[0.7rem] uppercase py-2">
          <Link to={"/project"}>
            <li className="py-4 duration-100 hover:scale-110 ">Projects</li>
          </Link>
          <Link to={"/about"}>
            <li className="py-4 duration-100 hover:scale-110 ">About </li>
          </Link>
          <Link to={"/contact"}>
            <li className="py-4 duration-100 hover:scale-110 ">Contact </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

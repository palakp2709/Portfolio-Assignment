import React, { useState } from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="h-24 px-14 lg:px-24 flex justify-between items-center mx-auto sticky top-0 bg-[#22596e] ">
      <Link to={"/"}>
        <img
          src="https://logos.textgiraffe.com/logos/logo-name/Palak-designstyle-friday-m.png"
          alt="logo"
          className="h-10 md:h-12 "
        />
      </Link>
      <ul className="hidden md:flex text-xs lg:text-[0.8rem] uppercase">
        <Link to={"/about"}>
          <li className="px-4 lg:px-6 duration-100 hover:scale-110  ">
            About{" "}
          </li>
        </Link>
        <Link to={"/contact"}>
          <li className="px-4 lg:px-6 duration-100 hover:scale-110  ">Contact </li>
        </Link>
        <Link to={"/project"}>
          <li className="px-4 lg:pl-6 duration-100 hover:scale-110  ">Projects</li>
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
            ? "fixed left-0 top-0 p-8 bg-[#193541] w-[40%] duration-300 ease-in-out h-full md:hidden"
            : "fixed left-[-100%]"
        }
      >
        <Link to={"/"}>
          <img
            src="https://logos.textgiraffe.com/logos/logo-name/Palak-designstyle-friday-m.png"
            alt="logo"
            className="h-12 md:h-14"
          />
        </Link>
        <ul className="p-4  text-[0.8rem] uppercase">
          <Link to={"/about"}>
            <li className="py-4 duration-100 hover:scale-110 ">About </li>
          </Link>
          <Link to={"/contact"}>
            <li className="py-4 duration-100 hover:scale-110 ">Contact </li>
          </Link>
          <Link to={"/project"}>
            <li className="py-4 duration-100 hover:scale-110 ">Projects</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

import React from "react";
import { ReactTyped } from "react-typed";
import img1 from "./images/my-image.jpeg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className=" grid sm:grid-cols-4 md:grid-cols-6 gap-2  mx-auto  ">
      <div className=" sm:col-span-2 ml-8 md:col-span-4  mt-16 sm:mt-[20vh] shadow-md  sm:pl-0 md:pl-4 lg:pl-14">
        <h1 className="   text-[#7ED7C1] font-mono font-bold  text-md  md:text-xl lg:text-2xl w-full sm:w-64 md:w-80 lg:w-full ">
          Front-End {""}
          <ReactTyped
            strings={["React Developer!"]}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
        </h1>
        <h2 className="py-4     text-[#fdd3df] font-medium font-mono text-[0.84rem] sm:text-[0.8rem]  md:text-base lg:text-xl">
          Hi, I'm Palak Patel {""}
          <span className="font-sans">✈</span>
        </h2>
        <p className=" py-2 text-gray-300 text-[0.66rem] sm:text-[0.62rem] md:text-[0.65rem] w-56 sm:w-64 md:w-72 lg:w-80 lg:text-[0.72rem]">
          A passionate frontend developer. I love building cool stuff for the
          web using React.
        </p>
        <div className="py-9 lg:py-10 ">
          <Link
            to={
              "https://drive.google.com/file/d/1AD4sDOBmRrcLj9okhEnfkmTST3UlxAY5/view?usp=drivesdk"
            }
          >
            <button className="  border rounded-lg p-2  px-2 text-xs  md:text-md uppercase">
              Download CV
            </button>
          </Link>
        </div>
      </div>

      <div className=" sm:col-span-2  md:col-span-2  sm:mt-[20vh] lg:pl-6">
        <img
          src={img1}
          alt="logo"
          className="mx-auto md:mx-0   h-40 w-36  rounded-full hover:scale-105 shadow-xl shadow-neutral-400
        "
        />
      </div>
    </div>
  );
};

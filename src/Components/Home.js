import React from "react";
import { ReactTyped } from "react-typed";
import img1 from "./images/my-image.jpeg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="grid sm:grid-cols-4 md:grid-cols-6 gap-2  mx-auto  ">
      <div className=" sm:col-span-2  md:col-span-3 m-4 p-4 mt-[15vh] shadow-md  duration-75 hover:scale-110">
        <h1 className="  md:pl-16  text-[#7ED7C1] font-mono font-bold text-[0.62rem] sm:text-xs md:text-md lg:text-lg">
          Front-End {""}
          <ReactTyped
            strings={["React Developer!"]}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
        </h1>
        <h2 className="py-2 pt-4 md:pl-16   lg:pl-20  text-[#fdd3df] font-medium font-mono text-[0.54rem] sm:text-[0.58rem]  md:text-[0.62rem] lg:text-lg">
          Hi, I'm Palak Patel {""}
          <span className="font-sans">✈</span>
        </h2>
        <p className="md:pl-16  lg:pl-20  text-gray-300 text-[0.5rem] sm:text-[0.52rem] md:text-[0.5rem] w-56 sm:w-64 md:w-72 lg:w-80 lg:text-[0.6rem]">
          A passionate frontend developer. I love building cool stuff for the
          web using React.
        </p>
        <div className="md:pl-16  lg:pl-20 py-6">
          <Link
            to={
              "https://drive.google.com/file/d/16wuD7nDSnvOaljDCZrvAxuLipTFODZZ9/view?usp=drivesdk"
            }
          >
            <button className=" border rounded-lg h-5 md:h-6 px-2 text-[0.58rem] sm:text-[0.5rem] md:text-[0.54rem] lg:text-[0.6rem]">
              Download CV
            </button>
          </Link>
        </div>
      </div>

      <div className=" sm:col-span-2  md:col-span-3  sm:mt-[15vh]">
        <img
          src={img1}
          alt="logo"
          className="mx-auto h-46 w-44 lg:h-52 lg:w-48 rounded-full hover:scale-105 shadow-xl shadow-neutral-400
        "
        />
      </div>
    </div>
  );
};

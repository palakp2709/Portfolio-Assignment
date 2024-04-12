import React from "react";
import { ReactTyped } from "react-typed";
// import img1 from "./images/my-image.jpeg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="w-full  h-screen bg-[#0a192f]">
      <div className="max-w-[1000px]  mx-auto flex flex-col  justify-center h-full px-8">
        <p className="text-pink-600">Hi, My name is </p>
        <h2 className="text-3xl md:text-4xl  text-[#ccd6f6] font-bold">
        Palak Patel 🛫
         
        </h2>
        <h1 className=" text-xl sm:text-3xl md:text-4xl  text-[#8892b0] font-bold">
          Front-End {""}
          <ReactTyped
            strings={["React Developer!"]}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
        </h1>

        <p className=" text-[#8892b0]  max-w-[600px] py-5">
          A passionate frontend developer. I love building cool stuff for the
          web using React.
        </p>
        <div className="py-3">
          <Link
            to={
              "https://drive.google.com/file/d/1AD4sDOBmRrcLj9okhEnfkmTST3UlxAY5/view?usp=drivesdk"
            }
          >
            <button className="  border py-2 sm:py-3 px-6  flex items-center hover:bg-pink-600 hover:border-pink-600">
              Download CV
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
};

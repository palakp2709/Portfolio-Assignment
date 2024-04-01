import React from "react";
import img1 from "./images/my-image.jpeg";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="min-w-[640px]  lg:flex lg:justify-evenly mt-10 p-8">
      <div className="pl-5 lg:p-8">
        <h1 className="font-bold text-3xl  animate-bounce text-sky-100 font-mono">
          Front-End React Developer!
        </h1>
        <h2 className="pt-6 font-semibold text-red-200 text-xl">
          Hi, I'm Palak Patel
        </h2>
        <p className="w-96 pt-2 text-slate-300 ">
          A passionate frontend developer. I love building cool stuff for the
          web using React.
        </p>
        <div>
          <Link
            to={
              "https://drive.google.com/file/d/16wuD7nDSnvOaljDCZrvAxuLipTFODZZ9/view?usp=drivesdk"
            }
          >
            <button className="border border-white rounded-md p-2 mt-8">
              Download CV
            </button>
          </Link>
        </div>
      </div>

      <div>
        <img
          src={img1}
          alt="logo"
          className="mt-12 ml-28 md:ml-32 rounded-2xl hover:border border-gray-400 h-80 lg:mt-0 lg:ml-0 "
        />
      </div>
    </div>
  );
};

export default Body;

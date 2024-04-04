import React from "react";

const About = () => {
  return (
    <div className="grid md:grid-cols-6 m-2 p-2 mt-10 md:mt-24">
      <div className="duration-75 hover:scale-110 md:col-span-3 shadow-lg shadow-gray-400 mx-auto p-4 rounded-md">
        <div className=" py-2 md:py-4">
          <p className="text-center text-xs md:text-sm text-[#f4fcffcb] font-mono font-bold">
            Certification
          </p>
          <p className="py-2  text-[0.5rem] sm:text-[0.55rem]  md:text-[0.6rem]  text-[#d3d5d6cb] text-center">
             <span className="text-[#faf4dccb]">Front-End Development with React </span> By Apna
            College(Delta)
          </p>
        </div>

        <div className="py-2">
          <p className=" text-center  text-xs md:text-sm text-[#f4fcffcb] font-mono font-bold">
            Education
          </p>
          <p className=" text-[0.5rem] sm:text-[0.55rem]  md:text-[0.6rem] text-[#d3d5d6cb] text-center">
            Bsc (Computer Science){" "}
          </p>
          <p className="text-[0.5rem] sm:text-[0.55rem]  md:text-[0.6rem] text-[#d3d5d6cb] text-center ">
            Swami Vivekanand Govt. PG College
          </p>
        </div>
      </div>

      <div className="mt-10 md:mt-0 md:col-span-3 shadow-lg shadow-gray-400 mx-auto p-4 rounded-md duration-75 hover:scale-110">
        <h2 className="text-center  text-xs md:text-sm text-[#f4fcffcb] font-mono font-bold">Skills :</h2>

        <ul className="py-2 flex-wrap flex md:justify-center  w-[14.3rem] text-[0.52rem] sm:text-[0.56rem]  md:text-[0.61rem] text-[#ebeef0cb]  ">
          <li className="">HTML,</li>
          <li className="ml-2">CSS,</li>
          <li className="ml-2">JAVASCRIPT,</li>
          <li className="ml-2">REACT-JS,</li>
          <li className="ml-2">REDUX,</li>
          <li >TAILWIND CSS,</li>
          <li className="ml-2">BOOTSTRAP,</li>
          <li className="ml-2">GIT,</li>
          <li className="ml-2">GITHUB </li>
        </ul>

        <p className="py-2 md: w-[14.3rem] text-[0.52rem] sm:text-[0.56rem]  md:text-[0.61rem] text-[#d3d5d6cb]">
          I'm a certified Front-End React Developer. I am highly interested in
          Reactjs. I built couple of projects, initially I started building
          small projects like todo-list, clone projects and then I built high
          scalable Apps like youtube, swiggy ✈.
        </p>
      </div>
    </div>
  );
};

export default About;

import React from "react";

const About = () => {
  return (
    <div className="h-screen w-full bg-[#0a192f] ">
      <div className="flex flex-col justify-center  items-center w-full h-full">
        <div className="max-w-[1000px]  w-full  ">
          <div className=" md:text-center py-4 px-4">
            <p className=" text-3xl inline border-b-4 border-pink-600 text-[#ccd6f6] font-bold">
              About Me
            </p>
          </div>
        </div>

        <div className="max-w-[1000px] w-full grid md:grid-cols-2 gap-8  mt-4 ">
          <div className="md:text-center px-4">
            <div>
              <p className="text-[#ccd6f6] text-xl font-bold ">Certification</p>
              <p className="text-[#8892b0] ">
                Front-End Development with React By Apna College(Delta)
              </p>
            </div>

            <div className="mt-4 ">
              <p className=" text-[#ccd6f6] text-xl font-bold ">Education</p>
              <p className="text-[#8892b0]   ">Bsc (Computer Science) </p>
              <p className="text-[#8892b0]  text-sm">Swami Vivekanand Govt. PG College</p>
            </div>
          </div>

          <div >
            <p className="text-[#8892b0] px-4 py-2  ">
              I'm a certified Front-End React Developer. I am highly interested
              in Reactjs. I built couple of projects, initially I started
              building small projects like todo-list, clone projects and then I
              built high scalable Apps like youtube, swiggy ✈.
            </p>
          </div>
        </div>

        {/* <div className=" ">
          <p className="">
            Certification
          </p>
          <p className="">
            <span className="">
              Front-End Development with React{" "}
            </span>{" "}
            By Apna College(Delta)
          </p>
        </div>

        <div className=""> 
          <p className=" ">
            Education
          </p>
          <p className=" ">
            Bsc (Computer Science){" "}
          </p>
          <p className=" ">
            Swami Vivekanand Govt. PG College
          </p>
        </div> */}

        {/* <div className="h-44 mt-10 w-[18rem] md:w-[19rem] md:mt-0 md:col-span-2 lg:col-span-3 bg-gray-700 mx-auto p-1 rounded-md duration-75 hover:scale-105">
        <h2 className="text-center  text-sm md:text-md   font-mono font-bold">
          Skills :
        </h2>

        <ul className="py-2 flex-wrap flex md:justify-center  text-[0.66rem] md:text-[0.7rem]   text-[#ebeef0cb]  ">
          <li className="ml-2">HTML,</li>
          <li className="ml-2">CSS,</li>
          <li className="ml-2">JAVASCRIPT,</li>
          <li className="ml-2">REACT-JS,</li>
          <li className="ml-2">REDUX,</li>
          <li className="ml-2">TAILWIND CSS,</li>
          <li className="ml-2">BOOTSTRAP,</li>
          <li className="ml-2">GIT,</li>
          <li className="ml-2">GITHUB </li>
        </ul>

        <p className="py-2 px-2  text-[0.66rem] md:text-[0.7rem]    text-[#d3d5d6cb]">
          I'm a certified Front-End React Developer. I am highly interested in
          Reactjs. I built couple of projects, initially I started building
          small projects like todo-list, clone projects and then I built high
          scalable Apps like youtube, swiggy ✈.
        </p>
      </div> */}
      </div>
    </div>
  );
};

export default About;

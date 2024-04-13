import React from "react";

const About = () => {
  return (
    <div className="h-screen w-full bg-[#0a192f] ">
      <div className="flex flex-col justify-center  items-center w-full h-full">
        <div className="max-w-[1000px]  w-full  ">
          <div className=" md:text-center py-4 px-4">
            <p className=" text-4xl inline border-b-4 border-pink-600 text-[#ccd6f6] font-bold">
              About Me 🛫
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
              <p className="text-[#8892b0]  text-sm">
                Swami Vivekanand Govt. PG College
              </p>
            </div>
          </div>

          <div>
            <p className="text-[#8892b0] px-4 py-2  ">
              I'm a certified Front-End React Developer. I am highly interested
              in Reactjs. I built couple of projects, initially I started
              building small projects like todo-list, clone projects and then I
              built high scalable Apps like youtube, swiggy ✈.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

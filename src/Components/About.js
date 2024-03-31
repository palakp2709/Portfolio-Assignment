import React from "react";

const About = () => {
  return (
    <div className="h-screen  mt-20 flex justify-center ">

      <div>
        <div className="flex ">
          <div className="h-28 w-56 border border-white rounded-xl p-2">
            <i class="fa-solid fa-user-graduate text-slate-300 ml-24"></i>
            <p className="font-semibold ml-16">Education</p>
            <p className="text-xs text-slate-300 ml-8 mt-1">
              Bsc (Computer Science){" "}
            </p>
            <p className="text-xs text-slate-300 p-1">
              Swami Vivekanand Govt. PG College
            </p>
          </div>

          <div className="h-28 w-56 border border-white rounded-xl ml-10 p-2">
            <i class="fa-solid fa-certificate text-slate-300 ml-24 "></i>
            <p className="font-semibold ml-14">Certification</p>
            <p className="text-xs text-slate-300 mt-1">
              Front-End Development with{" "}
              <span className="font-semibold">React </span> By Apna
              College(Delta)
            </p>
          </div>
        </div>

        <div className="w-[32rem] ">
          <p className="text-sm mt-4 p-2 ">
            I'm a certified Front-End React Developer. I am highly interested in
            Reactjs. I built couple of projects, initially I started building
            small projects like todo-list, clone projects and then I built high
            scalable Apps like youtube, swiggy ✈.
          </p>
          <h2 className="text-sm font-semibold text-red-200 font-mono p-1">
            Skills :
          </h2>
          <ul className="flex text-sm p-1">
            <li>Html,</li>
            <li className="ml-2">Css,</li>
            <li className="ml-2">JavaScript,</li>
            <li className="ml-2">Reactjs,</li>
            <li className="ml-2">Redux,</li>
            <li className="ml-2">Tailwindcss,</li>
            <li className="ml-2">BootStrap,</li>
            <li className="ml-2">Git,</li>
            <li className="ml-2">GitHub </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

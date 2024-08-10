import React from "react";

const Skill = () => {
  return (
    
    <div className="w-full  h-screen bg-[#0a192f]" id="skill">
      <div className="max-w-[1000px] w-full h-full mx-auto flex flex-col justify-center">
        <div className="pl-4">
          <h1 className="text-4xl  text-[#ccd6f6] font-bold border-b-4 border-pink-600 inline">
            Skills 🛫
          </h1>
          <p className="text-[#8892b0] py-2 ">
            These are the technologies I've worked with!
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 text-center py-4">
          <div className="py-4 hover:scale-110 duration-500">
            <i className="fa-brands fa-html5 text-4xl text-orange-500"></i>
            <p className="text-[#8892b0] text-sm">HTML</p>
          </div>

          <div className="py-4 hover:scale-110 duration-500">
          <i className="fa-brands fa-css3-alt text-4xl text-sky-500"></i>
            <p className="text-[#8892b0] text-sm">CSS</p>
          </div>

          <div className="py-4 hover:scale-110 duration-500">
          <i className="fa-brands fa-js text-4xl text-yellow-300"></i>
            <p className="text-[#8892b0] text-sm">JAVASCRIPT</p>
          </div>

          <div className="py-4 hover:scale-110 duration-500">
          <i className="fa-brands fa-react text-4xl text-sky-600"></i>
            <p className="text-[#8892b0] text-sm">REACT JS</p>
          </div>

          <div className="py-4 hover:scale-110 duration-500">
          <i className="fa-solid fa-recycle text-4xl text-purple-500"></i>
            <p className="text-[#8892b0] text-sm">REDUX</p>
          </div>

          <div className="py-4 hover:scale-110 duration-500">
          <i className="fa-solid fa-water text-4xl text-sky-300"></i>
            <p className="text-[#8892b0] text-sm">TAILWIND CSS</p>
          </div>

          <div className="py-4 hover:scale-110 duration-500">
          <i className="fa-brands fa-bootstrap text-4xl text-purple-400"></i>
            <p className="text-[#8892b0] text-sm">BOOTSTRAP</p>
          </div>

          <div className="py-4 hover:scale-110 duration-500">
          <i className="fa-brands fa-github text-4xl "></i>
            <p className="text-[#8892b0] text-sm">GITHUB</p>
          </div>
          
        </div>
      </div>
    </div>
   
  );
};

export default Skill;

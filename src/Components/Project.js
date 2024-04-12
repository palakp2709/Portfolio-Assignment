import React from "react";
import { Link } from "react-router-dom";
import project1 from "./images/project1.jpeg";
import swiggy from "./images/swiggy.jpeg";
import youtube from "./images/youtube.jpeg";
import weather from "./images/weather.jpeg";
import amazon from "./images/amazon.jpeg";
import spotify from "./images/spotify.jpeg";
const Project = () => {
  return (
    <div className="h-fit w-full bg-[#0a192f] p-2">
      <div className="max-w-[1000px] flex flex-col justify-center  w-full  mx-auto ">
        <div className="pl-2">
          <h1 className="  text-2xl sm:text-3xl text-[#ccd6f6] font-bold border-b-4 border-pink-600 inline">
            Latest Projects 
          </h1>
          <p className="text-[#8892b0] text-xs sm:text-sm max-w-[600px] py-2">
            Just click on the project image, it will take you to the working
            demo link !
          </p>
        </div>

        <div className=" mt-6 grid  sm:grid-cols-2 md:grid-cols-3 gap-10 h-full ">
          <div className=" p-2 ">
            <Link to={"https://youtube-react-application.netlify.app"}>
              <img src={youtube} className="rounded-md " alt="logo" />
            </Link>
            <div className="text-xs py-2   ">
              <h1 className="text-[#ccd6f6] font-bold">
                Youtube-React-Application
              </h1>
              <ul className="text-[#8892b0]">
                <li>
                  Built a high scalable application that loads within 200ms
                  using Reactjs.
                </li>
                <li>Applied Shimmer Effect.</li>
                <li>Applied debouncing, caching using redux.</li>
                <Link
                  to={"https://github.com/palakp2709/YouTube-React-Application"}
                >
                  <li>
                    GitHub Link :{" "}
                    <i className="fa-brands fa-square-github text-lg"></i>
                  </li>
                </Link>
              </ul>
            </div>
          </div>

          <div className=" p-2">
            <Link to={"https://food-app-react-9927d.netlify.app"}>
              <img src={swiggy} className=" rounded-md" alt="logo" />
            </Link>
            <div className="text-xs py-2">
              <h1 className="text-[#ccd6f6] font-bold">Food-App-React</h1>
              <ul className="text-[#8892b0] ">
                <li>Built a high scalable large application using Reactjs.</li>
                <li>Applied Shimmer Effect.</li>
                <li>
                  Used redux to add items in the cart. Built top rated
                  restaurants like features.
                </li>
                <Link to={"https://github.com/palakp2709/Food-React-App"}>
                  <li className="">
                    GitHub Link :{" "}
                    <i class="fa-brands fa-square-github text-xl ml-2"></i>
                  </li>
                </Link>
              </ul>
            </div>
          </div>

          <div className="p-2">
            <Link to={"https://wanderlust-fronted.onrender.com"}>
              <img src={project1} className="rounded-md" alt="logo" />
            </Link>
            <div className="text-xs py-2 ">
              <h1 className="text-[#ccd6f6] font-bold">
                WanderLust-Full-Stack
              </h1>
              <ul className="text-[#8892b0] ">
                <li></li>
                <li>Applied crud oparations.</li>
                <li>Built Authentication and Authorization feature.</li>
                <li>Built Dynamic routing using react-router-dom </li>
                <Link
                  to={"https://github.com/palakp2709/Wanderlust-Mern-Project"}
                >
                  <li className="">
                    GitHub Link :{" "}
                    <i class="fa-brands fa-square-github text-xl ml-2"></i>
                  </li>
                </Link>
              </ul>
            </div>
          </div>

          <div className="p-2 ">
            <Link to={"https://weatherwitz-react-app.netlify.app"}>
              <img
                src={weather}
                className="rounded-md h-36 sm:h-28 md:h-24 w-full"
                alt="logo"
              />
            </Link>
            <div className="text-xs py-2">
              <h1 className="text-[#ccd6f6] font-bold">
                Weatherwitz-Apllication
              </h1>
              <ul className="text-[#8892b0] ">
                <li>Built Weather application using React.</li>
                <li>
                  Used third-party api to get the information about weather as
                  per location.
                </li>
                <li>Applied debouncing, caching using redux.</li>
                <Link to={"https://github.com/palakp2709/WeatherWiz-React"}>
                  <li className="">
                    GitHub Link :{" "}
                    <i class="fa-brands fa-square-github text-xl ml-2"></i>
                  </li>
                </Link>
              </ul>
            </div>
          </div>

          <div className="p-2 ">
            <Link to={"https://amazon-clone-2dd.netlify.app"}>
              <img
                src={amazon}
                className=" rounded-md "
                alt="logo"
              />
            </Link>
            <div className="text-xs py-2 ">
              <h1 className="text-[#ccd6f6] font-bold">
                Amazon-Clone
              </h1>
              <ul className="text-[#8892b0]">
                <li>
                  Developed Amazon Website Clone using Html and Vanilla Css.
                </li>
                <Link to={"https://github.com/palakp2709/Amazon-Clone"}>
                  <li>
                    GitHub Link :{" "}
                    <i class="fa-brands fa-square-github text-xl ml-2"></i>
                  </li>
                </Link>
              </ul>
            </div>
          </div>

          <div className="p-2 ">
            <Link to={"https://spotify-clone-1dd.netlify.app"}>
              <img
                src={spotify}
                className="rounded-md "
                alt="logo"
              />
            </Link>
            <div className="text-xs py-2 ">
              <h1 className="text-[#ccd6f6] font-bold">
                Spotify-Clone
              </h1>
              <ul className="text-[#8892b0]">
                <li></li>
                <li>Developed Spotify Clone using Html and Vanilla Css.</li>
                <Link
                  to={"https://github.com/palakp2709/Spotify-Fronted-Clone"}
                >
                  <li >
                    GitHub Link :{" "}
                    <i class="fa-brands fa-square-github text-xl ml-2"></i>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* project started */}
      {/* <div className=" grid md:grid-cols-6 mt-10 ">
        <div className=" p-2 mx-auto md:col-span-3 duration-75 hover:scale-105 w-64 lg:w-96    lg:pl-8">
          <Link to={"https://youtube-react-application.netlify.app"}>
            <img
              src={youtube}
              className=" mt-2 rounded-md  md:w-60 lg:w-80"
              alt="logo"
            />
          </Link>
          <div className="pt-5 ">
            <h1 className="text-sm md:text-xs lg:text-md  font-mono font-bold">
              Youtube-React-Application
            </h1>
            <ul className="text-[0.62rem] md:text-[0.58rem] py-2  text-[#c4c7c9cb]  lg:w-80">
              <li>
                Built a high scalable application that loads within 200ms using
                Reactjs.
              </li>
              <li>Applied Shimmer Effect.</li>
              <li>Applied debouncing, caching using redux.</li>
              <Link
                to={"https://github.com/palakp2709/YouTube-React-Application"}
              >
                <li className="text-white text-[0.68rem]  mt-2">
                  GitHub Link :{" "}
                  <i class="fa-brands fa-square-github text-xl ml-2"></i>
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className=" p-2 mt-6 md:mt-0 mx-auto md:col-span-3 duration-75 hover:scale-105 w-64 lg:w-96    lg:pl-8">
          <Link to={"https://food-app-react-9927d.netlify.app"}>
            <img
              src={swiggy}
              className="  mt-2 rounded-md  md:w-60 lg:w-80"
              alt="logo"
            />
          </Link>
          <div className="pt-5">
            <h1 className="text-sm md:text-xs lg:text-md  font-mono font-bold">
              Food-App-React
            </h1>
            <ul className="text-[0.62rem] md:text-[0.58rem] py-2  text-[#c4c7c9cb]  lg:w-80">
              <li>Built a high scalable large application using Reactjs.</li>
              <li>Applied Shimmer Effect.</li>
              <li>
                Used redux to add items in the cart. Built top rated restaurants
                like features.
              </li>
              <Link to={"https://github.com/palakp2709/Food-React-App"}>
                <li className="text-white text-[0.68rem]  mt-2">
                  GitHub Link :{" "}
                  <i class="fa-brands fa-square-github text-xl ml-2"></i>
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className=" p-2 mt-6 mx-auto md:col-span-3 duration-75 hover:scale-105 w-64 lg:w-96  lg:pl-8">
          <Link to={"https://wanderlust-fronted.onrender.com"}>
            <img
              src={project1}
              className=" mt-2 md:mt-6 rounded-md w-96 md:w-60 lg:w-80"
              alt="logo"
            />
          </Link>
          <div className="pt-5 ">
            <h1 className="text-sm md:text-xs lg:text-md  font-mono font-bold">
              WanderLust-Full-Stack
            </h1>
            <ul className="text-[0.62rem] md:text-[0.58rem] py-2 text-[#c4c7c9cb]  lg:w-80">
              <li></li>
              <li>Applied crud oparations.</li>
              <li>Built Authentication and Authorization feature.</li>
              <li>Built Dynamic routing using react-router-dom </li>
              <Link
                to={"https://github.com/palakp2709/Wanderlust-Mern-Project"}
              >
                <li className="text-white text-[0.68rem]  mt-2">
                  GitHub Link :{" "}
                  <i class="fa-brands fa-square-github text-xl ml-2"></i>
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="p-2 mt-6 mx-auto md:col-span-3 duration-75 hover:scale-105 w-64 lg:w-96    lg:pl-8">
          <Link to={"https://weatherwitz-react-app.netlify.app"}>
            <img
              src={weather}
              className="h-32 md:h-[7rem] lg:h-36   mt-2 rounded-md w-96 md:w-60 lg:w-80"
              alt="logo"
            />
          </Link>
          <div className="pt-5">
            <h1 className="text-sm md:text-xs lg:text-md font-mono font-bold">
              Weatherwitz-Apllication
            </h1>
            <ul className="text-[0.62rem] md:text-[0.58rem] py-2  text-[#c4c7c9cb]  lg:w-80">
              <li>Built Weather application using React.</li>
              <li>
                Used third-party api to get the information about weather as per
                location.
              </li>
              <li>Applied debouncing, caching using redux.</li>
              <Link to={"https://github.com/palakp2709/WeatherWiz-React"}>
                <li className="text-white text-[0.68rem]  mt-2">
                  GitHub Link :{" "}
                  <i class="fa-brands fa-square-github text-xl ml-2"></i>
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="p-2 mt-6 mx-auto md:col-span-3 duration-75 hover:scale-105 w-64 lg:w-96   lg:pl-8">
          <Link to={"https://amazon-clone-2dd.netlify.app"}>
            <img
              src={amazon}
              className="  mt-2 rounded-md w-96 md:w-60 lg:w-80"
              alt="logo"
            />
          </Link>
          <div className="pt-5 ">
            <h1 className="text-sm md:text-xs lg:text-md  font-mono font-bold">
              Amazon-Clone
            </h1>
            <ul className="text-[0.62rem] md:text-[0.58rem] py-2  text-[#c4c7c9cb]  lg:w-80">
              <li></li>
              <li>
                Developed Amazon Website Clone using Html and Vanilla Css.
              </li>
              <Link to={"https://github.com/palakp2709/Amazon-Clone"}>
                <li className="text-white text-[0.68rem]  mt-2">
                  GitHub Link :{" "}
                  <i class="fa-brands fa-square-github text-xl ml-2"></i>
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="p-2 mt-6 mx-auto md:col-span-3 duration-75 hover:scale-105 w-64 lg:w-96    lg:pl-8">
          <Link to={"https://spotify-clone-1dd.netlify.app"}>
            <img
              src={spotify}
              className="  mt-2 rounded-md w-96 md:w-60 lg:w-80"
              alt="logo"
            />
          </Link>
          <div className="pt-5 ">
            <h1 className="text-sm md:text-xs lg:text-md  font-mono font-bold">
              Spotify-Clone
            </h1>
            <ul className="text-[0.62rem] md:text-[0.58rem] py-2  text-[#c4c7c9cb]  lg:w-80">
              <li></li>
              <li>Developed Spotify Clone using Html and Vanilla Css.</li>
              <Link to={"https://github.com/palakp2709/Spotify-Fronted-Clone"}>
                <li className="text-white text-[0.68rem]  mt-2">
                  GitHub Link :{" "}
                  <i class="fa-brands fa-square-github text-xl ml-2"></i>
                </li>
              </Link>
            </ul>
          </div> 
       </div> 
      {/* </div> */}
    </div>
  );
};

export default Project;

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
    <div className="m-2 p-2">
      <h1 className="py-2 text-center  text-xs md:text-sm text-[#b6eb3bcb] font-mono font-bold">
        Latest Projects <span className="font-sans">✈</span>
      </h1>
      <p className="text-center text-[0.52rem] sm:text-[0.6rem]  md:text-[0.64rem] text-[#f89090cb] ">
        Note : Just click on the project image, it will take you to the working
        demo link of the project !
      </p>

      {/* project started */}
      <div className="grid md:grid-cols-6  md:gap-4">
        <div className=" p-2 m-4 mx-auto md:col-span-2 duration-75 hover:scale-110">
          <Link to={"https://youtube-react-application.netlify.app"}>
            <img src={youtube} className=" mt-2 rounded-md w-72 " alt="logo" />
          </Link>
          <div className="pt-5 ">
            <h1 className="text-[0.68rem] text-[#f4fcffcb] font-mono font-bold">
              Youtube-React-Application
            </h1>
            <ul className="text-[0.52rem] text-[#c4c7c9cb] ">
              <li>
                Built a high scalable application that loads within 200ms using
                Reactjs.
              </li>
              <li>Applied Shimmer Effect.</li>
              <li>Applied debouncing, caching using redux.</li>
              <Link
                to={"https://github.com/palakp2709/YouTube-React-Application"}
              >
                <li className="text-white">
                  GitHub Link :{" "}
                  <i class="fa-brands fa-square-github text-xl ml-2"></i>
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className=" p-2  m-4 mx-auto md:col-span-2 duration-75 hover:scale-110">
          <Link to={"https://food-app-react-9927d.netlify.app"}>
            <img src={swiggy} className="mt-2 rounded-md w-72 " alt="logo" />
          </Link>
          <div className="pt-5">
            <h1 className="text-[0.68rem] text-[#f4fcffcb] font-mono font-bold ">
              Food-App-React
            </h1>
            <ul className="text-[0.52rem] text-[#c4c7c9cb]">
              <li>Built a high scalable large application using Reactjs.</li>
              <li>Applied Shimmer Effect.</li>
              <li>
                Used redux to add items in the cart. Built top rated restaurants
                like features.
              </li>
              <Link to={"https://github.com/palakp2709/Food-React-App"}>
                <li className="text-white">
                  GitHub Link :{" "}
                  <i class="fa-brands fa-square-github text-xl ml-2"></i>
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className=" p-2  m-4 mx-auto md:col-span-2 duration-75 hover:scale-110">
          <Link to={"https://wanderlust-fronted.onrender.com"}>
            <img src={project1} className="mt-2 rounded-md w-72 " alt="logo" />
          </Link>
          <div className="pt-5 ">
            <h1 className="text-[0.68rem] text-[#f4fcffcb] font-mono font-bold">
              WanderLust-Full-Stack-Application
            </h1>
            <ul className="text-[0.52rem] text-[#c4c7c9cb]">
              <li></li>
              <li>Applied crud oparations.</li>
              <li>Built Authentication and Authorization feature.</li>
              <li>Built Dynamic routing using react-router-dom </li>
              <Link
                to={"https://github.com/palakp2709/Wanderlust-Mern-Project"}
              >
                <li className="text-white">
                  GitHub Link :{" "}
                  <i class="fa-brands fa-square-github text-xl ml-2"></i>
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className=" p-2  m-4 mx-auto md:col-span-2 duration-75 hover:scale-110">
          <Link to={"https://weatherwitz-react-app.netlify.app"}>
            <img
              src={weather}
              className="mt-2 rounded-md w-72 h-32 md:h-[7rem] lg:h-32 "
              alt="logo"
            />
          </Link>
          <div className="pt-5">
            <h1 className="text-[0.68rem] text-[#f4fcffcb] font-mono font-bold">
              Weatherwitz-Apllication
            </h1>
            <ul className="text-[0.52rem] text-[#c4c7c9cb]">
              <li>Built Weather application using React.</li>
              <li>
                Used third-party api to get the information about weather as per
                location.
              </li>
              <li>Applied debouncing, caching using redux.</li>
              <Link to={"https://github.com/palakp2709/WeatherWiz-React"}>
                <li className="text-white">
                  GitHub Link :{" "}
                  <i class="fa-brands fa-square-github text-xl ml-2"></i>
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className=" p-2  m-4 mx-auto  md:col-span-2 duration-75 hover:scale-110">
          <Link to={"https://amazon-clone-2dd.netlify.app"}>
            <img src={amazon} className="mt-2  rounded-md  w-72" alt="logo" />
          </Link>
          <div className="pt-5 ">
            <h1 className="text-[0.68rem] text-[#f4fcffcb] font-mono font-bold">
              Amazon-Clone
            </h1>
            <ul className="text-[0.52rem] text-[#c4c7c9cb]">
              <li></li>
              <li>
                Developed Amazon Website Clone using Html and Vanilla Css.
              </li>
              <Link to={"https://github.com/palakp2709/Amazon-Clone"}>
                <li className="text-white">
                  GitHub Link :{" "}
                  <i class="fa-brands fa-square-github text-xl ml-2"></i>
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className=" p-2  m-4 mx-auto md:col-span-2 duration-75 hover:scale-110">
          <Link to={"https://spotify-clone-1dd.netlify.app"}>
            <img src={spotify} className="mt-2  rounded-md w-72 " alt="logo" />
          </Link>
          <div className="pt-5 ">
            <h1 className="text-[0.68rem] text-[#f4fcffcb] font-mono font-bold">
              Spotify-Clone
            </h1>
            <ul className="text-[0.52rem] text-[#c4c7c9cb]">
              <li></li>
              <li>Developed Spotify Clone using Html and Vanilla Css.</li>
              <Link to={"https://github.com/palakp2709/Spotify-Fronted-Clone"}>
                <li className="text-white">
                  GitHub Link :{" "}
                  <i class="fa-brands fa-square-github text-xl ml-2"></i>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

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
    <div className="min-w-[640px]">
      <h1 className="text-center mt-5 text-xl font-bold text-teal-400">
        Latest Projects ✈
      </h1>
      <p className="text-xs text-center text-red-200 p-2">
        Note : Just click on the project, it will take you to the working demo
        link of the project
      </p>

      <div className=" mx-36 lg:mx-0 lg:flex lg:justify-evenly mt-5">
        <Link to={"https://youtube-react-application.netlify.app"}>
          <div className="w-72 mt-8 md:mt-0 md:w-60  md:rounded-xl md:p-2 md:duration-100 md:hover:scale-105">
            <img
              src={youtube}
              className="lg:h-full lg:rounded-xl "
              alt="logo"
            />
            <div>
              <h1 className="text-sm font-semibold py-2">
                Youtube-React-Application
              </h1>
              <ul className="text-xs">
                <li>
                  Built a high scalable application that loads within 200ms
                  using Reactjs.
                </li>
                <li>Applied Shimmer Effect.</li>
                <li>Applied debouncing, caching using redux.</li>
                <Link
                  to={"https://github.com/palakp2709/YouTube-React-Application"}
                >
                  <li className="text-red-200">
                    GitHub Link :{" "}
                    <i class="fa-brands fa-square-github text-xl ml-2"></i>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </Link>

        <Link to={"https://food-app-react-9927d.netlify.app"}>
          <div className="w-72 mt-8 md:mt-0 md:w-60  md:rounded-xl md:p-2 md:duration-100 md:hover:scale-105">
            <img src={swiggy} className="h-full rounded-lg " alt="logo" />
            <div>
              <h1 className="text-sm font-semibold py-2 ">Food-App-React</h1>
              <ul className="text-xs">
                <li>Built a high scalable large application using Reactjs.</li>
                <li>Applied Shimmer Effect.</li>
                <li>
                  Used redux to add items in the cart. Built top rated
                  restaurants like features.
                </li>
                <Link to={"https://github.com/palakp2709/Food-React-App"}>
                  <li className="text-red-200">
                    GitHub Link :{" "}
                    <i class="fa-brands fa-square-github text-xl ml-2"></i>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </Link>

        <Link to={"https://weatherwitz-react-app.netlify.app"}>
          <div className="w-72 mt-8 md:mt-0 md:w-60  md:rounded-xl md:p-2 md:duration-100 md:hover:scale-105">
            <img src={weather} className="h-28 w-full rounded-lg " alt="logo" />
            <div>
              <h1 className="text-sm font-semibold py-2">
                Weatherwitz-Apllication
              </h1>
              <ul className="text-xs">
                <li>Built Weather application using React.</li>
                <li>
                  Used third-party api to get the information about weather as
                  per location.
                </li>
                <li>Applied debouncing, caching using redux.</li>
                <Link to={"https://github.com/palakp2709/WeatherWiz-React"}>
                  <li className="text-red-200">
                    GitHub Link :{" "}
                    <i class="fa-brands fa-square-github text-xl ml-2"></i>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </Link>
      </div>

      <div className=" mx-36 lg:mx-0 lg:flex lg:justify-evenly mt-5">
        <Link to={"https://wanderlust-fronted.onrender.com"}>
          <div className="w-72 mt-8 md:mt-0 md:w-60  md:rounded-xl md:p-2 md:duration-100 md:hover:scale-105">
            <img src={project1} className="h-full rounded-lg " alt="logo" />
            <div>
              <h1 className="text-sm font-semibold py-2">
                WanderLust-Full-Stack-Application
              </h1>
              <ul className="text-xs">
                <li></li>
                <li>Applied crud oparations.</li>
                <li>Built Authentication and Authorization feature.</li>
                <li>Built Dynamic routing using react-router-dom </li>
                <Link
                  to={"https://github.com/palakp2709/Wanderlust-Mern-Project"}
                >
                  <li className="text-red-200">
                    GitHub Link :{" "}
                    <i class="fa-brands fa-square-github text-xl ml-2"></i>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </Link>

        <Link to={"https://amazon-clone-2dd.netlify.app"}>
          <div className="w-72 mt-8 md:mt-0 md:w-60  md:rounded-xl md:p-2 md:duration-100 md:hover:scale-105">
            <img src={amazon} className="h-full rounded-lg " alt="logo" />
            <div>
              <h1 className="text-sm font-semibold py-2">Amazon-Clone</h1>
              <ul className="text-xs">
                <li></li>
                <li>
                  Developed Amazon Website Clone using Html and Vanilla Css.
                </li>
                <Link to={"https://github.com/palakp2709/Amazon-Clone"}>
                  <li className="text-red-200">
                    GitHub Link :{" "}
                    <i class="fa-brands fa-square-github text-xl ml-2"></i>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </Link>

        <Link to={"https://spotify-clone-1dd.netlify.app"}>
          <div className="w-72 mt-8 md:mt-0 md:w-60  md:rounded-xl md:p-2 md:duration-100 md:hover:scale-105">
            <img src={spotify} className="h-full rounded-lg " alt="logo" />
            <div>
              <h1 className="text-sm font-semibold py-2">Spotify-Clone</h1>
              <ul className="text-xs">
                <li></li>
                <li>Developed Spotify Clone using Html and Vanilla Css.</li>
                <Link
                  to={"https://github.com/palakp2709/Spotify-Fronted-Clone"}
                >
                  <li className="text-red-200">
                    GitHub Link :{" "}
                    <i class="fa-brands fa-square-github text-xl ml-2"></i>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Project;

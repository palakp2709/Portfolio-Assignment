import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="w-full h-14 flex justify-between p-4 sticky top-0 bg-black">
      <div className="flex pl-10 pt-2 ">
        <Link to={"/"}>
          <i className="fa-solid fa-user-tie  text-5xl text-gray-200"> </i>
        </Link>
      </div>

      <div>
        <ul className="flex p-4 mr-5   font-semibold">
          <Link to={"/about"}>
            <li className="mr-10 rounded-md p-1 px-2 bg-gradient-to-r from-teal-300 to-teal-800 ">
              About{" "}
            </li>
          </Link>
          <Link to={"/contact"}>
            <li className="mr-10 rounded-md p-1 px-2 bg-gradient-to-r from-teal-300 to-teal-800 ">
              Contact{" "}
            </li>
          </Link>
          <Link to={"/project"}>
            <li className="mr-10 rounded-md p-1 px-2 bg-gradient-to-r from-teal-300 to-teal-800 ">
              Projects
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

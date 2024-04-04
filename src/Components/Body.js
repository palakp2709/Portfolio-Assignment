import React from "react";
import {Outlet} from "react-router-dom";
import { Home } from "./Home";

const Body = () => {
  return (
     <div>
       <Home/>
       <Outlet/>
     </div>
  )
};

export default Body;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { createHashRouter, RouterProvider } from "react-router-dom";
// import Body from "./Components/Body";
// import About from "./Components/About";
// import Contact from "./Components/Contact";
// import Project from "./Components/Project";
// import Skill from "./Components/Skill";

// const Routes = createHashRouter([
//   {
//     path: "/Portfolio-Assignment",
//     element: <App />,
//     children: [
//       { 
//         path: "/Portfolio-Assignment", 
//         element: <Body /> 
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/project",
//         element: <Project />,
//       },
//       {
//         path: "/skill",
//         element: <Skill/>,
//       },
     
//     ],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={Routes} baseName="/Portfolio-Assignment"></RouterProvider> */}
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Header } from "./Components/Header";
import Project from "./Components/Project";
import Skill from "./Components/Skill";
import { Home } from "./Components/Home";

//import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className= "text-white">
      <Header />
      {/* <Outlet /> */}
      <Home/>
       <Skill/>
       <Project/>
       <About/>
       <Contact/>
    </div>
  );
}

export default App;

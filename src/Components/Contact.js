import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="   rounded-md h-screen pt-28  border-t-2 border-gray-800 ">
      <h1 className="text-center text-xl text-pink-200 font-bold font-mono">
        Contact Me
      </h1>
      <div className="py-1 pt-3 text-[0.74rem] text-center text-[#d3d5d6cb]">
        <p>Email : palakp2709@gmail.com</p>
      </div>
      <div className="text-center py-4  ">
        <Link to={"https://www.linkedin.com/in/palakp2709"}>
          <i className="fa-brands fa-linkedin  text-2xl"></i>
        </Link>
        <Link to={"https://github.com/palakp2709"}>
          <i className="fa-brands fa-square-github text-2xl ml-4"></i>
        </Link>
      </div>

      <form action="https://api.web3forms.com/submit" method="POST" className="text-center">
        <input
          type="hidden"
          name="access_key"
          value="35969467-7084-470f-ab29-ebdefdbbb413"
        />
        <div className="text-sm flex justify-center"> 
        <div>
        <div className="py-2">
            <input
              placeholder="Name"
              type="text"
              className="text-center  text-[0.7rem] bg-gray-500 py-1 rounded-sm "
              required
              name="name"
            />
          </div>

          <div className="py-2 px-2">
            <input
              placeholder="Email"
              name="email"
              type="email"
              className="text-center  text-[0.7rem] bg-gray-500 py-1 rounded-sm"
              required
            />
          </div>
        </div>
         
         <div>
         <div className="py-2">
            <input
              placeholder="Mobile Number"
              name="mobile number"
              className="text-center  text-[0.7rem] bg-gray-500 py-1 rounded-sm"
              required
            />
          </div>
          <div className="py-2">
            <textarea
              placeholder="Write Message"
              name="message"
              className="text-center   text-[0.7rem] bg-gray-500 py-1 rounded-sm"
              required
            ></textarea>
          </div>
         </div>
        </div>

        <button
            className=" border rounded-md mt-4  p-1  px-4 text-[0.8rem] "
            type="submit"
          >
            Submit
          </button>
      </form>
    </div>
  );
};

export default Contact;

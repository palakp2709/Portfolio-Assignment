import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="shadow-lg shadow-slate-300 max-w-60 m-auto rounded-md mt-12 p-4">
      <h1 className="text-center text-sm sm:text-md text-pink-200 font-bold font-mono">
        Contact Me
      </h1>
      <div className="py-1 text-[0.7rem] text-center text-[#d3d5d6cb]">
        <p>Email : palakp2709@gmail.com</p>
      </div>
      <div className="text-center py-2  ">
        <Link to={"https://www.linkedin.com/in/palakp2709"}>
          <i className="fa-brands fa-linkedin  text-xl"></i>
        </Link>
        <Link to={"https://github.com/palakp2709"}>
          <i className="fa-brands fa-square-github text-xl ml-4"></i>
        </Link>
      </div>

      <form action="https://api.web3forms.com/submit" method="POST">
        <input
          type="hidden"
          name="access_key"
          value="35969467-7084-470f-ab29-ebdefdbbb413"
        />
        <div className="text-sm text-center ">
          <div className="py-2">
            <input
              placeholder="Name"
              type="text"
              className="text-center bg-neutral-700 shadow-sm  shadow-slate-400 text-[0.6rem] py-1 rounded-sm "
              required
              name="name"
            />
          </div>

          <div className="py-2">
            <input
              placeholder="Email"
              name="email"
              type="email"
              className="text-center bg-neutral-700 shadow-sm shadow-slate-400 text-[0.6rem] py-1 rounded-sm"
              required
            />
          </div>

          <div className="py-2">
            <input
              placeholder="Mobile Number"
              name="mobile number"
              className="text-center bg-neutral-700 shadow-sm shadow-slate-400 text-[0.6rem] py-1 rounded-sm"
              required
            />
          </div>
          <div className="py-2">
            <textarea
              placeholder="Write Message"
              name="message"
              className="text-center bg-neutral-700 shadow-sm shadow-slate-400 text-[0.6rem] py-1 rounded-sm"
              required
            ></textarea>
          </div>

          <button
          className=" border rounded-sm h-5  px-2 text-[0.68rem] md:text-[0.54rem] lg:text-[0.6rem]"
          type="submit"
           >
          Submit
        </button>
        </div>
       
      </form>
    </div>
  );
};

export default Contact;

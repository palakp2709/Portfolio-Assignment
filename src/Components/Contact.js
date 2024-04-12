import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="h-screen w-full bg-[#0a192f] ">
      <div className="max-w-[800px] flex flex-col  h-full justify-center mx-auto p-2">
        <div>
          <h1 className="text-4xl font-bold border-b-4 border-pink-600 inline  text-[#ccd6f6]">Contact Me</h1>
          <p className="text-[#8892b0] py-2">Email : palakp2709@gmail.com</p>
        </div>

        <div className=" flex justify-center py-2">
          <Link to={"https://www.linkedin.com/in/palakp2709"}>
            <i className="fa-brands fa-linkedin  text-2xl text-sky-600"></i>
          </Link>

          <Link to={"https://github.com/palakp2709"}>
          <i className="fa-brands fa-github text-2xl ml-6"></i>
          </Link>
        </div>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="flex flex-col  "
        >
          <input
            type="hidden"
            name="access_key"
            value="35969467-7084-470f-ab29-ebdefdbbb413"
          />

          <input
            placeholder="Name"
            type="text"
            className="m-2 bg-[#424d6e] py-1 px-4"
            required
            name="name"
          />

          <input
            placeholder="Email"
            name="email"
            type="email"
            className="m-2 bg-[#424d6e] py-1 px-4"
            required
          />

          <input
            placeholder="Mobile Number"
            name="mobile number"
            type="number"
            className="m-2 bg-[#424d6e] py- px-4"
            required
          />

          <textarea
            placeholder="Write Message"
            name="message"
            type="type"
            className="m-2 bg-[#424d6e] py-1 px-4"
          
            required
          ></textarea>

          <button className=" border mt-4 mx-auto py-2 sm:py-3 px-6  hover:bg-pink-600 hover:border-pink-600 w-28 " type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

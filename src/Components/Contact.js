import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-w-[768px]  text-center mt-16">
      <h1 className="font-semibold text-red-400 text-2xl p-2 font-mono">
        Contact Me
      </h1>
      <div>
        <p>Email : palakp2709@gmail.com</p>
      </div>
      <div className="flex justify-center items-center p-2 ">
        <Link to={"https://www.linkedin.com/in/palakp2709"}>
          <i className="fa-brands fa-linkedin  text-2xl"></i>
        </Link>
        <Link to={"https://github.com/palakp2709"}>
          <i className="fa-brands fa-square-github text-2xl ml-4"></i>
        </Link>
      </div>

      <form action="https://api.web3forms.com/submit" method="POST">
        <input
          type="hidden"
          name="access_key"
          value="35969467-7084-470f-ab29-ebdefdbbb413"
        />
        <div className="flex items-center justify-center">
          <div className="p-2">
            <input
              placeholder="Name"
              type="text"
              className="bg-gray-500 rounded-md p-1"
              required
              name="name"
            />
          </div>

          <div className="p-2">
            <input
              placeholder="Email"
              name="email"
              type="email"
              className="bg-gray-500 rounded-md p-1"
              required
            />
          </div>
        </div>

        <div className="p-2">
          <input
            placeholder="Mobile Number"
            name="mobile number"
            className="bg-gray-500 rounded-md p-1"
            required
          />
        </div>
        <div className="p-2">
          <textarea
            placeholder="Write Message"
            name="message"
            className="bg-gray-500 rounded-md p-1 "
            required
          ></textarea>
        </div>

        <button className="border border-white rounded-lg p-2 " type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

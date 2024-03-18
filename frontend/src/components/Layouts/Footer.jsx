import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="bg-[#000] text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#342ac8] py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-[#56d879]">Subscribe</span> us for news <br />{" "}
          events and offers
        </h1>
        |
        <div>
          <input
            type="text"
            required
            placeholder="Enter your email"
            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />

          <button className="bg-[#56d879] hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md text-white">
            Submit
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img
            src="https://shopo.quomodothemes.website/assets/images/logo.svg"
            style={{ filter: "brightness(0) invert(1)" }}
          />

          <p>The home and elements needed to create beautiful products.</p>

          <div className="flex items-center mt-[12px]">
            <AiFillFacebook size={25} className="cursor-pointer" />
            <AiFillInstagram
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillYoutube
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
             />
          </div>
        </ul>

        <ul className="text-center sm:text-start">
         <h1 className="mb-1 font-semibold">Company</h1>
        </ul>
      </div>
    </div>
  );
}

export default Footer

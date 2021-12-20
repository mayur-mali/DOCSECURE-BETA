import React from "react";
import Slider from "./Slider";

export default function Testimonial() {
  return (
    <div className="min-h-screen h-auto w-full justify-center md:p-8 p-4 bg-gray-100 flex items-center">
      <div>
        <div className="sm:p-24 py-20 h-auto bg-gradient-to-t from-blue-600 to-blue-300 mx-auto rounded-3xl w-full md:max-w-7xl">
          <h1 className="text-center text-white font-bold md:text-5xl text-3xl">
            What our customer are saying
          </h1>
          <div className="w-full flex my-5 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              className="rounded-full text-white text-center font-bold"
              viewBox="0 0 332 12"
            >
              <line y1="4" x2="332" y2="4" stroke="#FFF" strokeWidth="20" />
            </svg>
          </div>
          <Slider />
        </div>
      </div>
    </div>
  );
}

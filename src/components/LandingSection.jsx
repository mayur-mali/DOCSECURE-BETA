import React from "react";
import heroImage from "../assets/heroimage.png";
export default function LandingSection() {
  return (
    <div className="mx-auto md:h-screen h-full flex items-center max-w-7xl">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        <div className="md:px-20 px-4 py-20 sm:px-6 lg:px-8  space-y-10 ">
          <h1 className="md:text-5xl text-4xl text-black text-left font-bold">
            Lorem ipsum dolor sit amet
          </h1>
          <div>
            <p className="text-gray-400 text-lg md:text-left text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>

          <div className="md:text-left text-center">
            <button className="px-6 py-3 w-56 bg-indigo-600 text-white font-semibold rounded-full">
              Learn more
            </button>
          </div>
        </div>
        <div className="p-4 md:block hidden">
          <img src={heroImage} alt="heroImage" />
        </div>
      </div>
    </div>
  );
}

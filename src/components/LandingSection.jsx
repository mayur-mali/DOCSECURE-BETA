import React from "react";
import heroImage from "../assets/heroimage.png";
export default function LandingSection() {
  return (
    <div className="mx-auto md:h-screen h-full flex items-center max-w-7xl">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        <div className="px-20 py-20  space-y-10 ">
          <h1 className="text-5xl text-black text-left font-bold">
            Lorem ipsum dolor sit amet
          </h1>
          <div>
            <p className="text-gray-400 text-lg text-left">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <p className="text-gray-400 text-lg text-left">
              adipiscing elit, sed do eiusmod
            </p>
            <p className="text-gray-400 text-lg text-left">
              tempor incididunt ut labore
            </p>
          </div>

          <div className="text-left">
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

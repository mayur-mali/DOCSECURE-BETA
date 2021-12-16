import React from "react";
import heroImage from "../assets/heroimage.png";
export default function Info2() {
  return (
    <div className="w-full flex items-center min-h-screen h-auto">
      <div className="mx-auto max-w-8xl">
        <div className="grid md:grid-cols-2 gap-10 grid-cols-1">
          <div className="col-span-1 order-last md:order-first flex flex-col justify-start items-start p-8">
            <h1 className="text-5xl leading-normal font-medium text-black text-left">
              Lorem ipsum dolor sit amet, consectetur
            </h1>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20  text-3xl"
                viewBox="0 0 1024 1024"
              >
                <path d="M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"></path>
              </svg>
            </p>
            <p className="leading-normal text-gray-500 text-left text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
            <button className="rounded-full flex justify-evenly items-center my-10 capitalize md:w-56 w-48 border-2 border-blue-500 text-blue-500 px-6 py-4 font-bold text-xl">
              download
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 17l-4 4m0 0l-4-4m4 4V3"
                />
              </svg>
            </button>
          </div>
          <div className="col-span-1 order-first md:order-last flex justify-center items-center">
            <img src={heroImage} alt="heroIamge" />
          </div>
        </div>
      </div>
    </div>
  );
}

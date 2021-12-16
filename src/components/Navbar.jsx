import React, { useState } from "react";

export default function Navbar() {
  const [nav, setNabar] = useState(false);
  return (
    <div className="h-24 bg-gray-100 w-full">
      <div className="mx-auto max-w-7xl flex justify-between h-full p-4 items-center">
        <div>
          <a href="/logo" className="font-bold text-black">
            DOCSECURE
          </a>
        </div>
        <span className="md:hidden block cursor-pointer text-gray-600 text-3xl hover:text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => setNabar(!nav)}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </span>
        <div className="md:flex space-x-16 hidden">
          <div className="space-x-10 ">
            <a
              href="/home"
              className="text-gray-600 capitalize font-semibold hover:text-black"
            >
              Home
            </a>
            <a
              href="/career"
              className="text-gray-600 capitalize font-semibold hover:text-black"
            >
              Career
            </a>
            <a
              href="/aboutus"
              className="text-gray-600 capitalize font-semibold hover:text-black"
            >
              About us
            </a>
          </div>
          <button className="text-gray-600 font-semibold hover:text-black">
            Login
          </button>
        </div>
      </div>
      {nav ? (
        <div className="absolute w-full md:hidden block p-8">
          <div className="flex flex-col justify-center items-center capitalize bg-gray-300 space-y-4 py-4 rounded-lg">
            <a href="/home" className="text-gray-900 font-semibold">
              Home
            </a>
            <a href="/career" className="text-gray-900 font-semibold">
              career
            </a>
            <a href="/aboutus" className="text-gray-900 font-semibold">
              about us
            </a>
            <button className="text-gray-900 font-semibold">Login</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

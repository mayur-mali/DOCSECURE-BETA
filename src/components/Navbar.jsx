import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </span>
        <div className="md:flex space-x-16 hidden">
          <div className="space-x-10 ">
            <NavLink
              to="/"
              className="text-gray-600 capitalize font-semibold hover:text-black"
            >
              Home
            </NavLink>
            <NavLink
              to="/career"
              className="text-gray-600 capitalize font-semibold hover:text-black"
            >
              Career
            </NavLink>
            <NavLink
              to="/about"
              className="text-gray-600 capitalize font-semibold hover:text-black"
            >
              About us
            </NavLink>
          </div>
          <NavLink
            to="/login"
            className="text-gray-600 font-semibold hover:text-black"
          >
            Login
          </NavLink>
        </div>
      </div>
      {nav ? (
        <div className="absolute w-full md:hidden block p-8">
          <div className="flex flex-col justify-center items-center capitalize bg-gray-300 space-y-4 py-4 rounded-lg">
            <NavLink
              to="/"
              href="/home"
              className="text-gray-900 font-semibold"
            >
              Home
            </NavLink>
            <NavLink
              to="/career"
              href="/career"
              className="text-gray-900 font-semibold"
            >
              career
            </NavLink>
            <NavLink
              to="/about"
              href="/aboutus"
              className="text-gray-900 font-semibold"
            >
              about us
            </NavLink>
            <NavLink to="/login" className="text-gray-900 font-semibold">
              Login
            </NavLink>
          </div>
        </div>
      ) : null}
    </div>
  );
}

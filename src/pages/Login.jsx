import React from "react";
import { NavLink } from "react-router-dom";
import "./pages.css";
export default function Login() {
  return (
    <div className="wrapper_div  min-h-screen h-auto flex flex-col justify-center items-center">
      <div className="py-5 px-10 z-20 w-full flex justify-between items-center top-0 fixed">
        <h1 className="text-left font-bold text-2xl">DOCSECURE</h1>
        <NavLink to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </NavLink>
      </div>

      <svg
        width="109"
        height="109"
        className="absolute right-10 top-40"
        viewBox="0 0 109 109"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="4.5" cy="4.5" r="4.5" fill="#C0D3FC" fillOpacity="0.42" />
        <circle cx="29.5" cy="4.5" r="4.5" fill="#C0D3FC" fillOpacity="0.42" />
        <circle cx="54.5" cy="4.5" r="4.5" fill="#C0D3FC" fillOpacity="0.42" />
        <circle cx="79.5" cy="4.5" r="4.5" fill="#C0D3FC" fillOpacity="0.42" />
        <circle cx="104.5" cy="4.5" r="4.5" fill="#C0D3FC" fillOpacity="0.42" />
        <circle cx="4.5" cy="29.5" r="4.5" fill="#C0D3FC" fillOpacity="0.42" />
        <circle cx="29.5" cy="29.5" r="4.5" fill="#C0D3FC" fillOpacity="0.42" />
        <circle cx="54.5" cy="29.5" r="4.5" fill="#C0D3FC" fillOpacity="0.42" />
        <circle cx="79.5" cy="29.5" r="4.5" fill="#C0D3FC" fillOpacity="0.42" />
        <circle
          cx="104.5"
          cy="29.5"
          r="4.5"
          fill="#C0D3FC"
          fillOpacity="0.42"
        />
        <circle cx="4.5" cy="54.5" r="4.5" fill="#C0D3FC" fillOpacity="0.42" />
        <circle cx="29.5" cy="54.5" r="4.5" fill="#C0D3FC" fillOpacity="0.42" />
        <circle cx="54.5" cy="54.5" r="4.5" fill="#C0D3FC" fillOpacity="0.42" />
        <circle cx="79.5" cy="54.5" r="4.5" fill="#C0D3FC" fillOpacity="0.42" />
        <circle
          cx="104.5"
          cy="54.5"
          r="4.5"
          fill="#C0D3FC"
          fillOpacity="0.42"
        />
        <circle cx="4.5" cy="79.5" r="4.5" fill="#C0D3FC" fillOpacity="0.42" />
        <circle cx="29.5" cy="79.5" r="4.5" fill="#C0D3FC" fillOpacity="0.42" />
        <circle cx="54.5" cy="79.5" r="4.5" fill="#C0D3FC" fillOpacity="0.42" />
        <circle cx="79.5" cy="79.5" r="4.5" fill="#C0D3FC" fillOpacity="0.42" />
        <circle
          cx="104.5"
          cy="79.5"
          r="4.5"
          fill="#C0D3FC"
          fillOpacity="0.42"
        />
        <circle cx="4.5" cy="104.5" r="4.5" fill="#C0D3FC" fillOpacity="0.42" />
        <circle
          cx="29.5"
          cy="104.5"
          r="4.5"
          fill="#C0D3FC"
          fillOpacity="0.42"
        />
        <circle
          cx="54.5"
          cy="104.5"
          r="4.5"
          fill="#C0D3FC"
          fillOpacity="0.42"
        />
        <circle
          cx="79.5"
          cy="104.5"
          r="4.5"
          fill="#C0D3FC"
          fillOpacity="0.42"
        />
        <circle
          cx="104.5"
          cy="104.5"
          r="4.5"
          fill="#C0D3FC"
          fillOpacity="0.42"
        />
      </svg>

      <svg
        id="visual"
        viewBox="0 0 900 600"
        className="absolute z-0 md:block hidden"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        height="100%"
        width="100%"
      >
        <g transform="translate(-2.552440973359751 643.3461979380392)">
          <path
            d="M463.6 -272.7C542.1 -131.7 506.6 70.2 410.4 193.9C314.1 317.7 157 363.3 -29.7 380.5C-216.5 397.7 -433 386.3 -487.1 286.9C-541.3 187.5 -433 0 -324.8 -158.2C-216.5 -316.3 -108.3 -445.2 42.1 -469.5C192.5 -493.8 385.1 -413.7 463.6 -272.7"
            fill="#91B3FA"
          ></path>
        </g>
      </svg>
      <div className="max-w-xl z-10 rounded-3xl w-full mx-auto md:p-20 p-8 h-full bg-white sm:shadow-2xl">
        <h2 className="text-4xl font-bold capitalize">login</h2>
        <p className="text-md my-4 font-bold">
          Please enter you Username and your Password
        </p>
        <div className="py-10">
          <form className="space-y-6">
            <input
              type="text"
              className="py-4 px-5 rounded-lg border border-gray-400 outline-none w-full"
              placeholder="username"
            />
            <input
              type="password"
              className="py-4 px-5 rounded-lg border border-gray-400 outline-none w-full"
              placeholder="password"
            />
            <p className="text-right font-medium">forget password ?</p>
            <button
              type="submit"
              className="w-full px-5 py-4 submit_btn rounded-lg"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

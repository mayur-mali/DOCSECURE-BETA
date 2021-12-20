import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./OurServices.css";
export default function Slider() {
  return (
    <Carousel
      showArrows={false}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={false}
      interval={2100}
      renderIndicator={false}
    >
      <div>
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-10 p-3">
          <div className="p-6 space-x-3 flex md:flex-row flex-col items-center justify-center">
            <img
              src="https://randomuser.me/api/portraits/women/49.jpg"
              alt="id"
              className="rounded-full border-4 border-white"
            />
            <div className="md:space-y-0 mt-2">
              <h2 className="text-white tracking-wider font-bold sm:text-2xl text-xl">
                Tammy Caldwell
              </h2>
              <h3 className="text-white tracking-wider md:text-left text-center">
                Founder Circle
              </h3>
            </div>
          </div>
          <div className="flex justify-center relative text-justify items-center p-6">
            <svg
              className="absolute top-20 md:-left-6 left-5 transform -translate-x-8 -translate-y-24 h-16 w-16	 text-indigo-200 opacity-50"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 144 144"
              aria-hidden="true"
            >
              <path
                strokeWidth="2"
                d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
              ></path>
            </svg>
            <svg
              className="absolute -bottom-28 transform rotate-180 md:left-36 right-10 transform -translate-x-8 -translate-y-24 h-16 w-16	 text-indigo-200 opacity-50"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 144 144"
              aria-hidden="true"
            >
              <path
                strokeWidth="2"
                d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
              ></path>
            </svg>
            <p className="text-white font-semibold text-xl md:my-0 my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-10 p-3">
          <div className="p-6 space-x-3 flex md:flex-row flex-col items-center justify-center">
            <img
              src="https://randomuser.me/api/portraits/women/49.jpg"
              alt="id"
              className="rounded-full border-4 border-white"
            />
            <div className="md:space-y-0 mt-2">
              <h2 className="text-white tracking-wider font-bold sm:text-2xl text-xl">
                Tammy Caldwell
              </h2>
              <h3 className="text-white tracking-wider md:text-left text-center">
                Founder Circle
              </h3>
            </div>
          </div>
          <div className="flex justify-center relative text-justify items-center p-6">
            <svg
              className="absolute top-20 md:-left-6 left-5 transform -translate-x-8 -translate-y-24 h-16 w-16	 text-indigo-200 opacity-50"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 144 144"
              aria-hidden="true"
            >
              <path
                strokeWidth="2"
                d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
              ></path>
            </svg>
            <svg
              className="absolute -bottom-28 transform rotate-180 md:left-36 right-10 transform -translate-x-8 -translate-y-24 h-16 w-16	 text-indigo-200 opacity-50"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 144 144"
              aria-hidden="true"
            >
              <path
                strokeWidth="2"
                d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
              ></path>
            </svg>
            <p className="text-white font-semibold text-xl md:my-0 my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

import React from "react";

export default function TotalStatistics() {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-8">
      <div className="col-span-1 bg-white border-t-4 cursor-pointer group border-green-500  hover:shadow-2xl shadow-md rounded-b-xl p-3 h-32 flex justify-center items-center">
        <div className="flex flex-col space-y-1 items-center">
          <span className="text-gray-500 font-medium group-hover:text-blue-700 text-2xl">
            Approved
          </span>
          <span className="text-black group-hover:text-blue-700 text-5xl capitalize font-bold">
            60
          </span>
        </div>
      </div>
      <div className="col-span-1 bg-white border-t-4 cursor-pointer group border-yellow-500  hover:shadow-2xl shadow-md rounded-b-xl p-3 h-32 flex justify-center items-center">
        <div className="flex flex-col space-y-1 items-center">
          <span className="text-gray-500 font-medium group-hover:text-blue-700 text-2xl">
            Process
          </span>
          <span className="text-black group-hover:text-blue-700 text-5xl capitalize font-bold">
            16
          </span>
        </div>
      </div>
      <div className="col-span-1 bg-white border-t-4 cursor-pointer group border-red-500  hover:shadow-2xl shadow-md rounded-b-xl p-3 h-32 flex justify-center items-center">
        <div className="flex flex-col space-y-1 items-center">
          <span className="text-gray-500 font-medium group-hover:text-blue-700 text-2xl">
            Query
          </span>
          <span className="text-black group-hover:text-blue-700 text-5xl capitalize font-bold">
            43
          </span>
        </div>
      </div>
      <div className="col-span-1 bg-white border-t-4 cursor-pointer group border-red-500  hover:shadow-2xl shadow-md rounded-b-xl p-3 h-32 flex justify-center items-center">
        <div className="flex flex-col space-y-1 items-center">
          <span className="text-gray-500 font-medium group-hover:text-blue-700 text-2xl">
            Rejected
          </span>
          <span className="text-black group-hover:text-blue-700 text-5xl capitalize font-bold">
            64
          </span>
        </div>
      </div>
    </div>
  );
}

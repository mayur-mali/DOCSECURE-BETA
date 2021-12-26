import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function AllCostomerList() {
  const [getmovie, setgetMovie] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      axios
        .get("https://615d679b12571a00172075c8.mockapi.io/api/movies")
        .then((res) => {
          setgetMovie(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return (mounted = false);
  }, [setgetMovie]);
  return (
    <div>
      <section className="font-mono  shadow-lg overflow-x-auto">
        <div className="w-full">
          <div className="w-full">
            <table className="w-full border">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-white uppercase border-b border-gray-600">
                  <th className="px-4 text-center py-3">ID</th>
                  <th className="px-4 py-3">Costmer Name</th>
                  <th className="px-4 py-3">Mobile No.</th>
                  <th className="px-4 py-3">Document</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3 w-20">Status</th>
                  <th className="px-4 py-3 w-20"></th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {getmovie.map((movie, index) => {
                  return (
                    <tr className="text-gray-700" key={index}>
                      <td className="text-center">{movie.id}</td>
                      <td className="px-4 py-3 ">
                        <div className="flex items-center text-sm">
                          <div className="relative w-10 h-10 flex-shrink-0 mr-3 rounded-full md:block">
                            <img
                              className="object-cover w-full h-full rounded-full"
                              src={movie.image}
                              alt=""
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div className="text-left">
                            <p className="font-semibold text-xl text-black">
                              {movie.title}
                            </p>
                            <span className="text-xs ">
                              {movie.documenttime}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-xs  text-black text-left">
                        <span className="px-2 py-1 font-semibold leading-tight ">
                          {movie.mobile}
                        </span>
                      </td>
                      <td className="px-4 flex flex-col py-3 text-md text-left font-semibold ">
                        {movie.document}
                        <span className="text-xs">{movie.documenttime}</span>
                      </td>
                      <td className="px-4 py-3 text-sm ">{movie.createdAt}</td>
                      <td className="px-4 py-3 text-sm text-black text-left">
                        {movie.status}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center space-x-5">
                          <BsThreeDotsVertical
                            className="text-2xl cursor-pointer"
                            onClick={() => console.log("edit")}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

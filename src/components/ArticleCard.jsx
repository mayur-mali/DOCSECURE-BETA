import React from "react";

export default function ArticleCard() {
  return (
    <div className="min-h-screen flex-col h-auto md:p-10 p-4 flex items-center">
      <h1 className="text-5xl text-black font-bold">
        Check out our latest article
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
      <div className="grid w-full max-w-8xl grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white overflow-hidden h-auto col-span-1 rounded-xl shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
            alt="test"
            className="h-56 w-full"
          />
          <div className="text-left space-y-5 p-12 my-2">
            <h2 className="text-2xl text-black font-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </h2>
            <p className="text-gray-400 text-xl text-left leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              minus, autem eveniet at impedit delectus.
            </p>
            <a
              href="/test"
              className="text-blue-400 font-bold flex items-center text-2xl "
            >
              Read more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-5 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="bg-white overflow-hidden h-auto col-span-1 rounded-xl shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
            alt="test"
            className="h-56 w-full"
          />
          <div className="text-left space-y-5 p-12 my-2">
            <h2 className="text-2xl text-black font-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </h2>
            <p className="text-gray-400 text-xl text-left leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              minus, autem eveniet at impedit delectus.
            </p>
            <a
              href="/test"
              className="text-blue-400 font-bold flex items-center text-2xl "
            >
              Read more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-5 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="bg-white overflow-hidden h-auto col-span-1 rounded-xl shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
            alt="test"
            className="h-56 w-full"
          />
          <div className="text-left space-y-5 p-12 my-2">
            <h2 className="text-2xl text-black font-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </h2>
            <p className="text-gray-400 text-xl text-left leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              minus, autem eveniet at impedit delectus.
            </p>
            <a
              href="/test"
              className="text-blue-400 font-bold flex items-center text-2xl "
            >
              Read more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-5 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <button className="rounded-full  md:w-56 w-48 border-2 border-blue-500 text-blue-500 px-6 py-4 font-bold text-xl">
          View all
        </button>
      </div>
    </div>
  );
}

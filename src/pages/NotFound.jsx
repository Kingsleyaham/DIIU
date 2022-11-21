import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div class="container mx-auto">
      <div class="text-gray-50 text-center mt-24 mb-32">
        <div class="relative ">
          <h1 class="relative text-9xl tracking-tighter-less text-shadow font-sans font-bold">
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
          <span class="absolute  top-0   -ml-12  text-gray-300 font-semibold">
            Oops!
          </span>
        </div>
        <h5 class="text-gray-300 font-semibold -mr-10 -mt-3">Page not found</h5>
        <p class="text-gray-100 mt-2 mb-6">
          we are sorry, but the page you requested was not found
        </p>
        <Link
          to="/"
          class="bg-green-500  px-5 py-3 text-sm shadow-sm font-medium text-gray-50 rounded-full hover:shadow-lg hover:bg-transparent hover:border-green-400 hover:border-2"
        >
          Got to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

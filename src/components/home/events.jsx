import React from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import { events } from "../../data/events";
import parse from "html-react-parser";
import { slideArrows } from "../layout/sliderProps";
import { titleCase } from "../../utils/titleCase";

function Events() {
  const indicators = (index) => <div className="indicator">.</div>;

  return (
    <div className="h-auto text-gray-800 bg-gray-50 py-5 pb-20 pt-10">
      <div className="min-h-[6vh] grid place-content-center">
        <h1 className="flex text-center md:text-3xl font-bold underline px-8 text-2xl">
          Events
        </h1>
      </div>
      <div className="mx-auto my-6 text-gray-50 max-[700px]:w-full w-[70%] p-2 pt-10 rounded-lg px-8">
        <Slide transitionDuration={800} {...slideArrows}>
          {events.map((evt, index) => (
            <div
              className="bg-white border border-gray-200 rounded-lg shadow-lg shadow-slate-200 m-5"
              key={index}
            >
              <Link to={`/events/${evt.type}/${evt.id}`}>
                <img className="rounded-t-lg" src={evt.image} alt="" />
              </Link>
              <div className="p-5">
                <div className="flex md:justify-between justify-start md:items-baseline flex-col md:flex-row mb-2 ">
                  <Link to={`/events/${evt.type}/${evt.id}`}>
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 m">
                      {evt.title}
                    </h5>
                  </Link>

                  <div className="block bg-white rounded-full order-first md:order-last pb-2 md:pb-0">
                    <h5
                      className={`text-lg font-bold leading-tight ${
                        evt.type === "past" ? "text-red-500" : "text-green-500"
                      } `}
                    >
                      {titleCase(evt.type)}
                    </h5>
                  </div>
                </div>

                <div className="mb-3 font-normal text-gray-700 py-2">
                  {parse(evt.summary)}
                </div>
                <Link
                  to={`/events/${evt.type}/${evt.id}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Learn more
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
}

export default Events;

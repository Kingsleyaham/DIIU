import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { events } from "../../data/events";
import { slideArrows, responsiveSettings } from "../layout/sliderProps";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";

const pastEvents = events.filter((event) => event.type === "past");

function PastEvents() {
  return (
    <div className="h-auto p-6 mt-10">
      <div className="container">
        <h1 className="flex text-center md:text-2xl font-bold underline px-8">
          Past Events
          <span>
            <BsCheck2Circle color="green" />
          </span>
        </h1>
      </div>

      <div className="my-10 mx-auto md:w-[70%]">
        <Slide
          duration={8000}
          responsive={responsiveSettings}
          transitionDuration={800}
          {...slideArrows}
        >
          {pastEvents.map((evt, index) => (
            <div
              className="bg-white border border-gray-200 rounded-lg shadow-xl shadow-slate-200 m-5"
              key={index}
            >
              <Link to={`/events/${evt.type}/${evt.id}`}>
                <img className="rounded-t-lg" src={evt.image} alt="" />
              </Link>
              <div className="p-5">
                <Link to={`/events/${evt.type}/${evt.id}`}>
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                    {evt.title}
                  </h5>
                </Link>
                <div className="mb-3 font-normal text-gray-700 py-2">
                  {evt.summary}
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

export default PastEvents;

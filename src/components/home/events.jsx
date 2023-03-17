import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import { events } from "../../data/events";
import properties from "../layout/sliderArrow";

function Events() {
  const indicators = (index) => <div className="indicator">.</div>;

  return (
    <div className="h-auto text-white">
      <div className="min-h-[10vh] md:min-h-[10vh] bg-eventsBanner bg-no-repeat bg-cover grid place-content-center relative">
        <h1 className="text-center text-white text-2xl md:text-5xl font-bold md:leading-snug container max-w-[784px]">
          Events
        </h1>
      </div>
      <div className="mx-auto my-10 text-gray-50 max-[700px]:w-full w-[80%] p-2 pt-28 rounded-lg">
        <Slide transitionDuration={800} {...properties} indicators={indicators}>
          {events.map((evt, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `linear-gradient(rgba(81, 83, 87, 0.1), rgba(81, 83, 87, 0.7)), url(${evt.image})`,
              }}
              className=" rounded-lg bg-[#000] bg-no-repeat bg-[length:100%_100%] bg-cover grid place-content-center max-[700px]:h-[60vh] w-full h-[80vh]"
            >
              <div className="p-5">
                <h3 className="max-[400px]:text-2xl text-4xl font-bold mb-7 underline">
                  - {evt.type.charAt(0).toUpperCase() + evt.type.slice(1)} -
                </h3>
                <i className="max-[400px]:text-lg text-3xl font-bold text-white">
                  {" "}
                  {evt.title}
                </i>
                <p>{evt.date}</p>
                <Link to="/events">
                  <h3 className="cursor-pointer flex items-center gap-3 justify-center max-[400px]:text-sm text-2xl font-medium bg-contactCard hover:bg-black rounded-md transition duration-500 cursor mt-5">
                    See more events {<FaArrowRight />}
                  </h3>
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

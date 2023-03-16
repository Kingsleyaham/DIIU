import React from "react";
import { Slide } from "react-slideshow-image";
import { BsCheck2Circle } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { events } from "../../data/events";
import properties from "../layout/sliderArrow";
import { Link } from 'react-router-dom';

const pastEvents = events.filter((event) => event.type === "past");

function PastEvents() {
  return (
    <div className="h-auto text-white p-6">
      <h1 className="text-2xl flex text-center md:text-3xl font-bold underline">
        Past Events{" "}
        <span>
          <BsCheck2Circle color="green" />
        </span>
      </h1>
      <div className="mx-auto text-gray-50 max-[700px]:w-full w-[80%] pt-7">
        <Slide {...properties}>
          {pastEvents.map((evt, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `linear-gradient(rgba(81, 83, 87, 0.1), rgba(81, 83, 87, 0.7)), url(${evt.image}`,
                borderRadius: ".5rem",
              }}
              className="bg-[#000] bg-no-repeat bg-[length:100%_100%] bg-cover grid place-content-center  w-full max-[700px]:h-[60vh] h-[80vh]"
            >
              <div className="p-5">
                <i className="max-[400px]:text-lg text-3xl font-bold text-white">
                  {" "}
                  {evt.title}
                </i>
                <p>{evt.date}</p>
                <Link to={`/events/${evt.type}/${evt.id}`}>
                  <h3 className="cursor-pointer flex items-center gap-3 justify-center max-[400px]:text-sm text-2xl font-medium bg-contactCard hover:bg-black rounded-md transition duration-500 cursor mt-5">
                    See details {<FaArrowRight />}
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

export default PastEvents;

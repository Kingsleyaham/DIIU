import React from "react";
import { Helmet } from "react-helmet";
import "react-slideshow-image/dist/styles.css";
import { pastEvents, upcomingEvents } from "./../data/events";
import { Slide } from "react-slideshow-image";
import { FaArrowRight } from "react-icons/fa";
import properties from "../components/layout/sliderArrow";

const Events = () => {
  return (
    <>
      <Helmet>
        <title>I.I. Umeh | Events</title>
        <meta name="description" content="Event Page" />
      </Helmet>
      <div className="mt-16 text-white">
        <div className="min-h-[10vh] md:min-h-[40vh] bg-eventsBanner bg-no-repeat bg-cover grid place-content-center relative">
          <h1 className="text-center text-2xl md:text-7xl font-bold ">
            Events
          </h1>
        </div>
        <div className="h-auto text-white p-6">
          <h1 className="text-2xl md:text-3xl font-bold underline">
            Past Events
          </h1>
          <div className="mx-auto text-gray-50 w-full pt-7">
            <Slide {...properties}>
              {pastEvents.map((evt, index) => (
                <div
                  key={index}
                  style={{
                    backgroundImage: `linear-gradient(rgba(81, 83, 87, 0.1), rgba(81, 83, 87, 0.7)), ${evt.imageUrl}`,
                  }}
                  className="bg-[#000] bg-no-repeat bg-[length:100%_100%] bg-cover grid place-content-center w-full h-[80vh]"
                >
                  <i className="text-3xl font-bold text-white"> {evt.title}</i>
                  <p>{evt.date}</p>
                  <h3 className="cursor-pointer flex items-center gap-3 justify-center text-2xl font-medium bg-contactCard hover:bg-black rounded-md transition duration-500 cursor mt-5">
                    See details {<FaArrowRight />}
                  </h3>
                </div>
              ))}
            </Slide>
          </div>
        </div>
        <div className="h-auto text-white p-6">
          <h1 className="text-2xl md:text-3xl font-bold underline">
            Upcoming Events
          </h1>
          {!upcomingEvents.length ? (
            <div className="bg-[#3F3F41] shadow-2xl rounded-lg mx-auto text-center py-12 mt-6">
              {/* <div className="rounded-xl w-3/6 mx-auto h-3/6 mt-6 bg-black text-center"> */}
              <h1 className="text-3xl font-bold text-white sm:text-4xl">
                No Upcoming Events
              </h1>
            </div>
          ) : (
            <div className="mx-auto text-gray-50 w-full pt-7">
              <Slide {...properties}>
                {pastEvents.map((evt, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundImage: `linear-gradient(rgba(81, 83, 87, 0.1), rgba(81, 83, 87, 0.7)), ${evt.imageUrl}`,
                    }}
                    className="bg-[#000] bg-no-repeat bg-[length:100%_100%] bg-cover grid place-content-center w-full h-[80vh]"
                  >
                    <i className="text-3xl font-bold text-white">
                      {" "}
                      {evt.title}
                    </i>
                    <p>{evt.date}</p>
                    <h3 className="cursor-pointer flex items-center gap-3 justify-center text-2xl font-medium bg-contactCard hover:bg-black rounded-md transition duration-500 cursor mt-5">
                      See details {<FaArrowRight />}
                    </h3>
                  </div>
                ))}
              </Slide>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Events;

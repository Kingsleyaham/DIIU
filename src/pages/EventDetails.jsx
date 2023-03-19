import React, { useEffect, useState, Suspense } from "react";
import { BiCalendar } from "react-icons/bi";
import { GiAlarmClock } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";
import { events } from "../data/events";
import parse from "html-react-parser";
import { FaArrowLeft } from "react-icons/fa";

const EventDetails = () => {
  const { eventType, eventId } = useParams();
  const [event, setEvent] = useState(() =>
    events?.filter(
      (event) =>
        event.type.toLowerCase() === eventType.toLowerCase() &&
        event.id === parseInt(eventId)
    )
  );

  return (
    <div>
      {event?.length ? (
        event?.map((evt, index) => (
          <div key={index}>
            <div className="flex justify-center mt-32">
              {evt.type === "past" ? (
                <div className="block max-w-lg bg-white p-3 shadow-lg lg:w-1/4 sm:w-2/4 rounded-full w-3/4">
                  <h4 className="text-lg font-bold leading-tight text-center text-red-600">
                    This event is closed.
                  </h4>
                </div>
              ) : (
                <div className="block max-w-lg bg-white p-3 shadow-lg lg:w-1/4 sm:w-2/4 rounded-full w-3/4">
                  <h4 className="text-lg font-bold leading-tight text-center text-green-500">
                    Upcoming Event
                  </h4>
                </div>
              )}
            </div>
            <div className="mx-auto bg-gray-100 m-3 shadow-md text-gray-700 mt-12 p-5">
              <Link to="/events">
                <div
                  className="block max-w-lg bg-white transition duration-300 cursor-pointer
                hover:bg-[#2f3445] text-black hover:text-white p-3 shadow-lg lg:w-[10%] md:w-[20%] sm:w-[30%] rounded-full w-[40%] max-[300px]:w-[70%]"
                >
                  <h4 className="text-lg font-bold leading-tight text-center flex items-center justify-center gap-3">
                    <FaArrowLeft className="max-[175px]:hidden" />
                    <span>Back</span>
                  </h4>
                </div>
              </Link>
              <div className="container mx-auto lg:w-3/6 md:w-4/6 sm:w-5/6 w-full pt-16 pb-28">
                <div className="pb-5 pt-2">
                  <h1 className="text-xl font-extrabold md:text-2xl">
                    {evt.title}
                  </h1>
                </div>

                <div className="font-medium">{parse(evt.description)}</div>

                {evt.type === "upcoming" && (
                  <div className="pt-6">
                    <p className="text-gray-700 text-md flex justify-start items-start pb-4">
                      <BiCalendar className="text-2xl" />
                      <span className="inline-block px-5 font-semibold">
                        {evt.date}
                      </span>
                    </p>
                    <p className="text-gray-700 text-md flex justify-start items-start pb-4">
                      <GiAlarmClock className="text-2xl" />
                      <span className="inline-block px-5 font-semibold ">
                        {evt.time}
                      </span>
                    </p>
                    <p className="text-gray-700 text-md flex justify-start items-start pb-4">
                      <HiOutlineLocationMarker className="text-2xl" />
                      <span className="inline-block px-5 font-semibold ">
                        {evt.venue}
                      </span>
                    </p>
                  </div>
                )}

                <div className="px-2">
                  {evt.speakers.length > 0 && (
                    <div className="speakers pt-12">
                      <h2 className="text-xl font-extrabold md:text-xl pb-3">
                        Guest Speakers
                      </h2>
                      <div className="sm:grid md:grid-cols-4 gap-8 sm:gap-6 sm:grid-cols-2 grid-cols-1">
                        {evt.speakers.map((speaker, index) => (
                          <div className="pt-8 sm:w-full w-[60%] mx-auto">
                            <figure>
                              <img src={speaker.img} alt="host image" />
                              <figcaption className="mt-2 text-sm text-center text-gray-600 font-semibold">
                                <span className="block">{speaker.name}</span>
                                <span className="block">{speaker.about}</span>
                              </figcaption>
                            </figure>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="host pt-16 px-2">
                    <h2 className="text-xl font-extrabold md:text-xl pb-5">
                      Host
                    </h2>
                    <div className="pt-5">
                      <figure className="md:w-[30%] w-3/6 sm:w-2/6">
                        <img
                          src={evt.host.img}
                          alt="host image"
                          className="rounded-3xl"
                        />
                        <figcaption className="mt-2 text-sm text-center text-gray-600 font-semibold">
                          {evt.host.name}
                          <br />
                          {evt.host.about}
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="h-96 mt-40 mb-5">
          <div className="flex justify-center">
            <div className="py-2 block max-w-lg bg-white p-3 shadow-lg lg:w-1/4 sm:w-2/4 rounded-full w-3/4">
              <h1 className="font-bold md:text-xl text-center text-red-600">
                Event not found
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetails;

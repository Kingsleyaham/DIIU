import React, { useEffect, useState, Suspense } from "react";
import { BiCalendar } from "react-icons/bi";
import { GiAlarmClock } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { events } from "../data/events";
import parse from "html-react-parser";

const EventDetails = () => {
  const { eventType, eventIndex } = useParams();
  const [event, setEvent] = useState(() =>
    events?.filter(
      (event, index) =>
        event.type.toLowerCase() === eventType.toLowerCase() &&
        index === parseInt(eventIndex) - 1
    )
  );

  useEffect(() => {
    console.log(eventType, eventIndex);
  }, []);
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

                <div>
                  <div className="host pt-6">
                    <h2 className="text-xl font-extrabold md:text-xl pb-5">
                      Host
                    </h2>
                    <div className="pt-5">
                      <figure className="sm:w-2/6 w-3/6">
                        <img src={evt.host.img} alt="host image" />
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

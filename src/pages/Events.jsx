import React from "react";
import { Helmet } from "react-helmet";
import "react-slideshow-image/dist/styles.css";
import UpcomingEvents from "../components/events/upcomingEvents";
import PastEvents from "../components/events/PastEvents";

const Events = () => {
  return (
    <>
      <Helmet>
        <title>I.I. Umeh | Events</title>
        <meta name="description" content="Event Page" />
      </Helmet>
      <div className="mt-16 text-white">
        <div
          className="contactMe min-h-[30vh] md:min-h-[40vh] bg-eventsBanner bg-no-repeat 
                        bg-cover grid place-content-center relative"
        >
          <h1 className="text-center text-5xl md:text-7xl font-bold ">
            Events
          </h1>
        </div>
        <PastEvents />
        <UpcomingEvents />
      </div>
    </>
  );
};

export default Events;

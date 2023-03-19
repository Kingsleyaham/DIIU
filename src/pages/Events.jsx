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
      <div className="mt-16 pt-12 bg-gray-50 text-gray-800">
        <div className="contactMe relative">
          <h1 className="font-extrabold text-3xl underline underline-offset-8 text-center">
            Events
          </h1>
        </div>
        <UpcomingEvents />
        <PastEvents />
      </div>
    </>
  );
};

export default Events;

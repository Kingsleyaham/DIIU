import React from "react";
import stories from "../data/stories";
import { Fade } from "react-slideshow-image";
import { Helmet } from "react-helmet";
import "react-slideshow-image/dist/styles.css";

const properties = {
  prevArrow: (
    <div
      title="previous"
      className="py-2 px-4 rounded-full bg-slate-600 m-3 cursor-pointer w-fit h-fit"
    >
      <i className="fa-solid fa-angle-left"></i>
    </div>
  ),
  nextArrow: (
    <div
      title="next"
      className="py-2 px-4 rounded-full bg-slate-600 m-3 cursor-pointer w-fit h-fit"
    >
      <i className="fa-solid fa-angle-right"></i>
    </div>
  ),
};

const Stories = () => {
  return (
    <>
      <Helmet>
        <title>Dr I.I. Umeh | Stories</title>
        <meta name="description" content="These are the students' voices" />
        <meta name="keywords" content="about, studentstories, students, stories, lecturer, aboutme, unizik" />
      </Helmet>

      <div className="container mx-auto my-10 text-gray-50 sm:w-4/6 p-2 pt-28">
        <div className="header text-center pb-5">
          <h1 className="text-3xl font-medium">Students Stories</h1>
        </div>

        <Fade onChange={function noRefCheck() {}} {...properties}>
          {stories.map((story, index) => (
            <div
              className="md:flex md:justify-between md:items-center md:mx-10 my-12"
              key={index}
            >
              <div className="md:w-3/6">
                <div className="flex justify-center">
                  <img
                    src={story.img}
                    alt={story.name}
                    className="md:w-3/6 stories_img"
                  />
                </div>
                <p className="text-center pt-3 px-3 font-medium text-xl">
                  {story.name}
                </p>
                <p className="text-sm font-medium italic text-center p-2">
                  Department: {story.dept}
                </p>
              </div>
              <div className="md:w-3/6">
                <p className="md:text-lg md:border-l-4 md:border-white md:p-12 p-6 italic flex justify-center">
                  "{story.story}"
                </p>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </>
  );
};

export default Stories;

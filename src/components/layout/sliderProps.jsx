import {
  FaAngleLeft,
  FaAngleRight,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
} from "react-icons/fa";

// responsive settings for react-slideshow-image

export const responsiveSettings = [
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
];

export const slideArrows = {
  prevArrow: (
    <div
      title="previous"
      className="p-4 max-[600px]:hidden rounded-full bg-transparent shadow-sm cursor-pointer w-fit h-fit md:-m-14 -m-8"
    >
      {/* <i className="fa-solid fa-angle-left"></i> */}
      <FaArrowAltCircleLeft className="text-2xl shadow-lg shadow-gray-200 text-slate-700" />
      {/* <ImArrowLeft className="text-2xl shadow-lg shadow-gray-200 text-slate-700" /> */}
    </div>
  ),
  nextArrow: (
    <div
      title="next"
      className="p-4 max-[600px]:hidden rounded-full shadow-sm bg-transparent cursor-pointer w-fit h-fit md:-m-14 -m-8"
    >
      {/* <i className="fa-solid fa-angle-right"></i> */}
      <FaArrowAltCircleRight className="text-2xl shadow-lg shadow-gray-200 text-slate-700" />
    </div>
  ),
};

export const storiesArrows = {
  prevArrow: (
    <div
      title="previous"
      className="p-4 max-[400px]:hidden max-[1111px]:bottom-20 max-[900px]:bottom-10  max-[700px]:bottom-0 rounded-full bg-slate-600 md:m-3 -my-4 cursor-pointer w-fit h-fit"
    >
      {/* <i className="fa-solid fa-angle-left"></i> */}
      <FaAngleLeft />
    </div>
  ),
  nextArrow: (
    <div
      title="next"
      className="p-4 max-[400px]:hidden max-[1111px]:bottom-20 max-[900px]:bottom-10 max-[700px]:bottom-0 rounded-full bg-slate-600 md:m-3 -my-4 cursor-pointer w-fit h-fit"
    >
      {/* <i className="fa-solid fa-angle-right"></i> */}
      <FaAngleRight />
    </div>
  ),
};

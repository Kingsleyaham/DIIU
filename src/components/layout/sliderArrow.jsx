import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const properties = {
  prevArrow: (
    <div
      title="previous"
      className="p-4 rounded-full bg-slate-600 m-3 cursor-pointer w-fit h-fit"
    >
      {/* <i className="fa-solid fa-angle-left"></i> */}
      <FaAngleLeft />
    </div>
  ),
  nextArrow: (
    <div
      title="next"
      className="p-4 rounded-full bg-slate-600 m-3 cursor-pointer w-fit h-fit"
    >
      {/* <i className="fa-solid fa-angle-right"></i> */}
      <FaAngleRight />
    </div>
  ),
};

export default properties;

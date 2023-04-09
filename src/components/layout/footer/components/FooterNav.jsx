import { Link } from "react-router-dom";

const FooterNav = () => {
  return (
    <ul className="flex flex-wrap items-center text-sm text-gray-500 mt-3 dark:text-gray-400 justify-center">
      <li>
        <Link to="/" className="mr-4 hover:underline px-3 ">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="mr-4 hover:underline px-3 ">
          About
        </Link>
      </li>
      <li>
        <Link to="/stories" className="hover:underline px-3">
          Stories
        </Link>
      </li>{" "}
      <li>
        <Link to="/events" className="hover:underline px-3">
          Events
        </Link>
      </li>{" "}
      <li>
        <Link to="/events/gallery" className="hover:underline px-3">
          Gallery
        </Link>
      </li>
      <li>
        <Link to="/contact" className="hover:underline px-3">
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default FooterNav;

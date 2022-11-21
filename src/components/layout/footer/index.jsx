import { BsFacebook, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaResearchgate } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="p-3 shadow md:px-6 md:py-6 w-full">
      <hr className="my-2 border-gray-600 sm:mx-auto  lg:my-3" />
      <div className="md:flex md:items-center md:justify-between pt-1 text-center">
        <div className="my-2">
          <Link to="/" className="mb-4 sm:mb-2 px-2">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              PA-CENT
            </span>
          </Link>
        </div>

        <ul className="flex flex-wrap items-center justify-center">
          <li className="px-2">
            <a href="#" className="text-gray-100" target="_blank">
              <BsFacebook className="hover:text-blue-400 text-xl" />
            </a>
          </li>
          <li className="px-2">
            <a
              href="https://wa.me/2348035906416"
              className="text-gray-100"
              target="_blank"
            >
              <BsWhatsapp className="hover:text-blue-400 text-xl" />
            </a>
          </li>

          <li className="px-2">
            <a href="#" className="text-gray-100" target="_blank">
              <BsLinkedin className="hover:text-blue-400 text-xl" />
            </a>
          </li>
          <li className="px-2">
            <a href="#" className="text-gray-100" target="_blank">
              <SiGooglescholar className="hover:text-blue-400 text-xl" />
            </a>
          </li>
          <li className="px-2">
            <a
              href="https://www.researchgate.net/profile/Umeh-Ikechukwu-2"
              className="text-gray-100"
            >
              <FaResearchgate className="hover:text-blue-400 text-xl" />
            </a>
          </li>
        </ul>
        <ul className="flex flex-wrap items-center text-sm text-gray-500 mt-3 dark:text-gray-400 justify-center">
          <li>
            <Link to="/about" className="mr-4 hover:underline px-3 ">
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:underline px-3">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/stories" className="hover:underline px-3">
              Stories
            </Link>
          </li>
          <li>
            <Link to="#" className="mr-4 hover:underline px-3">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

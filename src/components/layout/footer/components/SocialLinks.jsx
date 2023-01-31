import { BsFacebook, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FaResearchgate } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
const SocialLinks = () => {
  return (
    <ul className="flex flex-wrap items-center justify-center">
      <li title="facebook" className="px-2">
        <a
          href="https://www.facebook.com/messages/t/100000241076056/"
          className="text-gray-100"
          target="_blank"
        >
          <BsFacebook className="hover:text-blue-400 text-xl" />
        </a>
      </li>
      <li title="whatsapp" className="px-2">
        <a
          href="https://wa.me/2348035906416"
          className="text-gray-100"
          target="_blank"
        >
          <BsWhatsapp className="hover:text-blue-400 text-xl" />
        </a>
      </li>

      {/* <li className="px-2">
        <a href="#" className="text-gray-100" target="_blank">
          <BsLinkedin className="hover:text-blue-400 text-xl" />
        </a>
      </li> */}
      
      <li title="Google-Scholar" className="px-2">
        <a
          href="https://scholar.google.com/citations?user=IdPN-6oAAAAJ&hl=en"
          className="text-gray-100"
          target="_blank"
        >
          <SiGooglescholar className="hover:text-blue-400 text-xl" />
        </a>
      </li>
      <li title="Research-Gate" className="px-2">
        <a
          href="https://www.researchgate.net/profile/Umeh-Ikechukwu-2"
          className="text-gray-100"
          target="_blank"
        >
          <FaResearchgate className="hover:text-blue-400 text-xl" />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;

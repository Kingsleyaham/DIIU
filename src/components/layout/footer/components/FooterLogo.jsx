import { Link } from "react-router-dom";

const FooterLogo = () => {
  return (
    <div className="my-2">
      {/* <Link to="/" className="mb-4 sm:mb-2 px-2"> */}
        <span className="self-center text-xl font-medium whitespace-nowrap dark:text-white underline">
          Socials
        </span>
      {/* </Link> */}
    </div>
  );
};

export default FooterLogo;

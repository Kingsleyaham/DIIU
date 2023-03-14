import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsXLg } from "react-icons/bs";

const Navbar = ({ checkActive }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 645px)" });

  const showNavbar = () => {
    setShowMobileNav(!showMobileNav);
  };

  const closeFromRouteClick = () => {
    setShowMobileNav(false);
  };

  return (
    <div className="nav">
      <h3 className="brand-name">
        <Link to="/">I.I. Umeh</Link>
      </h3>
      <ul className={isMobile && showMobileNav ? "mobile" : ""}>
        <li
          onClick={closeFromRouteClick}
          className={checkActive() === "homePage" ? "active" : ""}
        >
          <Link to="/" className="link">
            HOME
          </Link>
        </li>
        <li
          onClick={closeFromRouteClick}
          className={checkActive() === "about" ? "active" : ""}
        >
          <Link to="/about">ABOUT ME</Link>
        </li>
        <li
          onClick={closeFromRouteClick}
          className={checkActive() === "events" ? "active" : ""}
        >
          <Link to="/events">EVENTS</Link>
        </li>
        <li
          onClick={closeFromRouteClick}
          className={checkActive() === "stories" ? "active" : ""}
        >
          <Link to="/stories">STORIES</Link>
        </li>
        <li
          onClick={closeFromRouteClick}
          className={checkActive() === "contactPage" ? "active" : ""}
        >
          <Link to="/contact">CONTACT</Link>
        </li>
        {showMobileNav && isMobile && (
          <BsXLg color="white" onClick={showNavbar} />
        )}
      </ul>
      {!showMobileNav && isMobile && (
        <GiHamburgerMenu fontSize={25} color="white" onClick={showNavbar} />
      )}
    </div>
  );
};

export default Navbar;

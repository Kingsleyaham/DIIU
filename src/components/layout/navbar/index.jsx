import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Navbar = ({ checkActive }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  const showNavbar = () => {
    setShowMobileNav(!showMobileNav);
  };

  const closeFromRouteClick = () => {
    setShowMobileNav(false);
  };

  return (
    <div className="nav">
      <h3 className="brand-name">
        <Link to="/">PA-CENT</Link>
      </h3>
      <ul className={isMobile && showMobileNav ? 'mobile' : ''}>
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
          <i className="fa-solid fa-x " onClick={showNavbar}></i>
        )}
      </ul>
      {!showMobileNav && isMobile && (
        <i className="fa-solid fa-bars" onClick={showNavbar}></i>
      )}
    </div>
  );
};

export default Navbar;

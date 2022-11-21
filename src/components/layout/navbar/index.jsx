import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ checkActive }) => {
  // const [stickyClass, setStickyClass] = useState({ top: "-50" });
  const [stickyClass, setStickyClass] = useState(false);

  const handleScroll = () => {
    // console.log(window.pageYOffset);
    let windowHeight = window.pageYOffset;
    if (windowHeight > 20) {
      // setStickyClass({ top: 0 });
      setStickyClass(true);
    } else {
      // setStickyClass({ top: -50 });
      setStickyClass(false);
    }
  };

  useEffect(() => {
    window.removeEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="nav">
      <h3>Pacent</h3>
      <ul className={stickyClass ? "sticky" : ""}>
        <Link to="/">
          <li className={checkActive() === "homePage" ? "active" : ""}>HOME</li>
        </Link>
        <li>
          <div className="dropdown">
            ABOUT {/* <span className="dropdown"> */}
            <i className="fa-solid fa-caret-down"></i>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
            {/* </span> */}
          </div>
        </li>
        <Link to="/stories">
          <li className={checkActive() === "stories" ? "active" : ""}>
            STORIES
          </li>
        </Link>
        <Link to="/contact">
          <li className={checkActive() === "contactPage" ? "active" : ""}>
            CONTACT
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;

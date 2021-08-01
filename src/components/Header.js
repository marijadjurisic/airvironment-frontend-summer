import "../assets/styles/components/Header.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [pathname, setPathname] = useState(window.location.pathname);

  return (
    <div className="header">
      <div className="internship-name" onClick={() => setPathname("")}>
        <Link to="/">
          <span className="capital">AIR</span>vironment
        </Link>
      </div>
      <div className="navigation">
        <span
          className={pathname === "/averages" ? "" : "not-active"}
          onClick={() => setPathname("/averages")}
        >
          <Link to="/averages">Averages</Link>
        </span>
      </div>
    </div>
  );
};

export default Header;

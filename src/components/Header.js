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
        <span
          className={pathname === "/all-data" ? "" : "not-active"}
          onClick={() => setPathname("/all-data")}
        >
          <Link to="/all-data">All data</Link>
        </span>
      </div>
    </div>
  );
};

export default Header;

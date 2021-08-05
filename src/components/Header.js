import "../assets/styles/components/Header.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { OpenFilter } from "../assets/icons";
import { Filters } from "./index";

const Header = () => {
  const [pathname, setPathname] = useState(window.location.pathname);
  const [filters, setFilters] = useState(false);

  return (
    <>
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
        {pathname === "/averages" && (
          <OpenFilter
            className={`open-filters ${filters && "rotate"}`}
            onClick={() => setFilters(!filters)}
          />
        )}
      </div>
      {filters && <Filters setFilters={setFilters} />}
    </>
  );
};

export default Header;

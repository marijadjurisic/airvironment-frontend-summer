import "../assets/styles/components/Header.scss";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="internship-name">
        <Link to="/">
          <span className="capital">AIR</span>vironment
        </Link>
      </div>
      <div className="navigation"></div>
    </div>
  );
};

export default Header;

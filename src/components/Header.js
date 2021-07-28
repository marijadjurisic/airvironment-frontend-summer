import "../assets/styles/components/Header.scss";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="internship-name">
        <span className="capital">AIR</span>vironment
      </div>
      <div className="navigation">
        <span>All data</span>
        <span>Averages</span>
      </div>
    </div>
  );
};

export default Header;

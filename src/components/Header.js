import React from "react";
import "../style/Header.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__text">Portfolio</h1>
      <div className="header__links">
        <li className="header__links_link">
          <Link to="/">
           Profile
          </Link>
        </li>
        <li className="header__links_link">
          <Link to="/projects">
            Projects
          </Link>
        </li>
        <li className="header__links_link">
          <Link to="/skills">
            Skills
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Header;

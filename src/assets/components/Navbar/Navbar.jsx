import React from "react";

import "./Navbar.css";
import Fire from "../../../assets/fire.png";
import Star from "../../../assets/glowing-star.png";
import Party from "../../../assets/partying-face.png";
import DarkMode from "../../DarkMode/DarkMode";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h1>MovieManiac</h1>
      <div className="navbar_links">
        <DarkMode />
        {/* <a href="#popular">
          Popular
          <img src={Fire} alt="fire emoji" className="navbar_emoji" />
        </a> */}
        <NavLink to="/">
          Popular
          <img src={Fire} alt="fire emoji" className="navbar_emoji" />
        </NavLink>

        {/* <a href="#top_rated">
          Star
          <img src={Star} alt="star emoji" className="navbar_emoji" />
        </a> */}
        <NavLink to="/top_rated">
          Star
          <img src={Star} alt="star emoji" className="navbar_emoji" />
        </NavLink>

        {/* <a href="#upcoming">
          Party
          <img src={Party} alt="party emoji" className="navbar_emoji" />
        </a> */}
        <NavLink to="/upcoming">
          Party
          <img src={Party} alt="party emoji" className="navbar_emoji" />
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;

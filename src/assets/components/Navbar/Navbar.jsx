import React from "react";

import "./Navbar.css";
import Fire from "../../../assets/fire.png";
import Star from "../../../assets/glowing-star.png";
import Party from "../../../assets/partying-face.png";
import DarkMode from "../../DarkMode/DarkMode";

function Navbar() {
  return (
    <div className="navbar">
      <h1>MovieManiac</h1>
      <div className="navbar_links">
        <DarkMode />
        <a href="">
          Popular
          <img src={Fire} alt="fire emoji" className="navbar_emoji" />
        </a>

        <a href="">
          Star
          <img src={Star} alt="star emoji" className="navbar_emoji" />
        </a>

        <a href="">
          Party
          <img src={Party} alt="party emoji" className="navbar_emoji" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;

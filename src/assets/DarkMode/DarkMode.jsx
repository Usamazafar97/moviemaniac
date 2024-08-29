import React from "react";

import "./DarkMode.css";
import Sun from "../../assets/sun.svg?react";
import Moon from "../../assets/Moon.svg?react";

const DarkMode = () => {
  const setDarkTHeme = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightTHeme = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "light");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "light") {
    setLightTHeme();
  } else {
    setDarkTHeme();
  }

  const toggleTHeme = (e) => {
    if (e.target.checked) {
      setDarkTHeme();
    } else {
      setLightTHeme();
    }
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTHeme}
        defaultChecked={selectedTheme !== "light"}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;

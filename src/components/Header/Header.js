import React, { useContext } from "react";
import ThemeBtn from "../ThemeBtn/ThemeBtn";
import { ThemeContext } from "../../context/ThemeContext";

import { FaRegMoon, FaMoon } from "react-icons/fa";

import "./Header.scss";
const Header = () => {
  const context = useContext(ThemeContext);

  return (
    <header
      className={`Header Header--${context.theme === "dark" ? "dark" : ""}`}
    >
      <nav className="Header__nav">
        <h1
          className={`Header__title Header__title--${
            context.theme === "dark" ? "dark" : ""
          }`}
        >
          Where in the world?
        </h1>
        <ThemeBtn onClick={context.toggleTheme}>
          {context.theme === "dark" ? <FaMoon /> : <FaRegMoon />}
          Dark Mode
        </ThemeBtn>
      </nav>
    </header>
  );
};

export default Header;

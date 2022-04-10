import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import "./ThemeBtn.scss";

const ThemeBtn = ({ onClick, children }) => {
  const context = useContext(ThemeContext);

  return (
    <button className={`ThemeBtn ThemeBtn--${context.theme}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default ThemeBtn;

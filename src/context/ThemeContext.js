import React, { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    if (theme === "") {
      setTheme("dark");
    } else {
      setTheme("");
    }
  };

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };

import React, { useContext } from "react";
import Header from "./components/Header/Header";
import { ThemeContext } from "./context/ThemeContext";

import "./App.scss";

function App() {
  const context = useContext(ThemeContext);

  return (
    <div className={`App App--${context.theme === "dark" ? "dark" : ""}`}>
      <Header />
    </div>
  );
}

export default App;

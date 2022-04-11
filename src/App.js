import React, { useContext } from "react";
import Header from "./components/Header/Header";
import MainContainer from "./components/MainContainer/MainContainer";
import { ThemeContext } from "./context/ThemeContext";

import "./App.scss";

function App() {
  const context = useContext(ThemeContext);

  return (
    <div className={`App App--${context.theme === "dark" ? "dark" : ""}`}>
      <Header />
      <MainContainer>
        <h1>I am child of Main Container. Hello</h1>
      </MainContainer>
    </div>
  );
}

export default App;

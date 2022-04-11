import React, { useContext } from "react";
import Header from "./components/Header/Header";
import MainContainer from "./components/MainContainer/MainContainer";
import MainForms from "./components/MainForms/MainForms";
import { ThemeContext } from "./context/ThemeContext";

import "./App.scss";

function App() {
  const context = useContext(ThemeContext);

  return (
    <div className={`App App--${context.theme === "dark" ? "dark" : ""}`}>
      <Header />
      <MainContainer>
        <MainForms />
      </MainContainer>
    </div>
  );
}

export default App;

import React, { useContext, useState, useEffect } from "react";
import Header from "./components/Header/Header";
import MainContainer from "./components/MainContainer/MainContainer";
import MainForms from "./components/MainForms/MainForms";
import MainContent from "./components/MainContent/MainContent";
import { ThemeContext } from "./context/ThemeContext";

import "./App.scss";

function App() {
  const [countries, setCountries] = useState([]);
  const context = useContext(ThemeContext);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      // data.filter(country => console.log(country))
      setCountries(data)
    }
    fetchData();
  }, []);

  return (
    <div className={`App App--${context.theme === "dark" ? "dark" : ""}`}>
      <Header />
      <MainContainer>
        <MainForms />
        <MainContent countries={countries} />
      </MainContainer>
    </div>
  );
}

export default App;

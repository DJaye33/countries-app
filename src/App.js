import React, { useContext, useState, useEffect } from "react";
import Header from "./components/Header/Header";
import MainContainer from "./components/MainContainer/MainContainer";
import MainForms from "./components/MainForms/MainForms";
import MainContent from "./components/MainContent/MainContent";
import { ThemeContext } from "./context/ThemeContext";

import "./App.scss";

function App() {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");
  const context = useContext(ThemeContext);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      console.log(data[77]);
      setCountries(data);
    }
    fetchData();
  }, []);

  /* useEffect(() => {
    console.log(search, region);
  }, [search, region]); */

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    setSearch("");
  };

  const handleFormSearch = (evt) => {
    evt.preventDefault();
    setRegion("");
    setSearch(evt.target.value);
  };

  const handleRegionSelect = (evt) => {
    setSearch("");
    setRegion(evt.target.value);
  };

  return (
    <div className={`App App--${context.theme === "dark" ? "dark" : ""}`}>
      <Header />
      {
        <MainContainer>
          <MainForms
            search={search}
            onFormSubmit={handleFormSubmit}
            onFormSearch={handleFormSearch}
            onRegionSelect={handleRegionSelect}
          />
          <MainContent region={region} search={search} countries={countries} />
        </MainContainer>
      }
    </div>
  );
}

export default App;

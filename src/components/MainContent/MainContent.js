import React from "react";
import ContentCard from "../ContentCard/ContentCard";

import "./MainContent.scss";

const MainContent = ({ countries }) => {
  return (
    <section className="MainContent">
      {/* <ContentCard countries={countries}/> */}
      {countries.map((country) => (
        <ContentCard key={country.name?.common} country={country} />
      ))}
    </section>
  );
};

export default MainContent;

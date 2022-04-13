import React from "react";
import ContentCard from "../ContentCard/ContentCard";

import "./MainContent.scss";

const MainContent = ({ search, countries }) => {
  return (
    <section className="MainContent">
      {search === ""
        ? countries.map((country) => (
            <ContentCard key={country.name?.common} country={country} />
          ))
        : countries
            .filter(
              (country) =>
                country.name?.common.toUpperCase().includes(search.toUpperCase().trim())
            )
            .map((country) => (
              <ContentCard key={country.name?.common} country={country} />
            ))}
    </section>
  );
};

export default MainContent;

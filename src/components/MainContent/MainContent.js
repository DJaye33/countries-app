import React from "react";
import ContentCard from "../ContentCard/ContentCard";

import "./MainContent.scss";

const MainContent = ({ region, search, countries }) => {
  return (
    <section className="MainContent">
      {search === "" && region === ""
        ? countries.map((country) => (
            <ContentCard key={country.name?.common} country={country} />
          ))
        : region
        ? countries
            .filter((country) =>
              country.region
                ?.toUpperCase()
                .includes(region.toUpperCase().trim())
            )
            .map((country) => (
              <ContentCard key={country.name?.common} country={country} />
            ))
        : countries
            .filter((country) =>
              country.name?.common
                .toUpperCase()
                .includes(search.toUpperCase().trim())
            )
            .map((country) => (
              <ContentCard key={country.name?.common} country={country} />
            ))}
    </section>
  );
};

export default MainContent;

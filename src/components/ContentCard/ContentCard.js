import React from "react";

import "./ContentCard.scss";

function ContentCard({ countries }) {
  return (
    <>
      {countries.map((country) => (
        <a href="/" className="ContentCard">
          <img
            src={country.flags?.png}
            className="ContentCard__img"
            alt={`flag of ${country.name?.common}`}
          />
          <div className="ContentCard__content">
            <h2 className="ContentCard__name">
              {country.name?.common}
            </h2>
            <p className="ContentCard__info ContentCard__population">
              <span>Population:</span>{" "}
              {country.population?.toLocaleString("en-US")}
            </p>
            <p className="ContentCard__info ContentCard__region">
              <span>Region:</span> {country.region}
            </p>
            <p className="ContentCard__info ContentCard__capital">
              <span>Capital:</span> {country.capital?.[0]}
            </p>
          </div>
        </a>
      ))}
    </>
  );
}

export default ContentCard;

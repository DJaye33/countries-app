import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { removeAccents } from "../../helpers/helpers";

import "./ContentCard.scss";

function ContentCard({ country }) {
  const context = useContext(ThemeContext);
  return (
    <Link
      to={`/${removeAccents(country.name?.common)}`}
      className={`ContentCard ContentCard--${
        context.theme === "dark" ? "dark" : ""
      }`}
    >
      <div className="ContentCard__img-wrap">
        <img
          src={country.flags?.png}
          className="ContentCard__img"
          alt={`flag of ${removeAccents(country.name?.common)}`}
        />
      </div>
      <div className="ContentCard__content">
        <h2 className="ContentCard__name">
          {removeAccents(country.name?.common)}
        </h2>
        <p className="ContentCard__info ContentCard__population">
          <span>Population:</span> {country.population?.toLocaleString("en-US")}
        </p>
        <p className="ContentCard__info ContentCard__region">
          <span>Region:</span> {country.region}
        </p>
        <p className="ContentCard__info ContentCard__capital">
          <span>Capital:</span> {country.capital?.[0]}
        </p>
      </div>
    </Link>
  );
}

export default ContentCard;

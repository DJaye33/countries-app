import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import { FaSearch, FaChevronDown } from "react-icons/fa";
import "./MainForms.scss";

const MainForms = ({ onRegionSelect, onFormSubmit, onFormSearch, search }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const context = useContext(ThemeContext);

  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const toggleMenu = () => {
    if (isMenuActive) {
      setIsMenuActive(false);
    } else {
      setIsMenuActive(true);
    }
  };

  return (
    <section className="MainForms">
      <form
        onSubmit={onFormSubmit}
        className={`MainForms__country MainForms__country--${
          context.theme === "dark" ? "dark" : ""
        }`}
      >
        <FaSearch
          className={`MainForms__icon MainForms__icon--${
            context.theme === "dark" ? "dark" : ""
          }`}
        />
        <label className="MainForms__label">
          <input
            value={search}
            onChange={onFormSearch}
            className={`MainForms__input MainForms__input--${
              context.theme === "dark" ? "dark" : ""
            }`}
            type="text"
            name="country"
            placeholder="Search for a country..."
          />
        </label>
      </form>
      <div className="MainForms__region">
        <button
          onClick={toggleMenu}
          className={`MainForms__btn MainForms__btn--${
            context.theme === "dark" ? "dark" : ""
          }`}
        >
          Filter by Region{" "}
          <FaChevronDown
            className={`MainForms__chev MainForms__chev--${
              context.theme === "dark" ? "dark" : ""
            }`}
          />
        </button>
        <div
          className={`MainForms__links MainForms__links--${
            isMenuActive ? "active" : ""
          } MainForms__links--${context.theme === "dark" ? "dark" : ""}`}
        >
          {regions.map((region) => (
            <button
              onClick={onRegionSelect}
              value={region}
              href={`/${region}`}
              key={region}
              className={`MainForms__link MainForms__link--${
                context.theme === "dark" ? "dark" : ""
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainForms;

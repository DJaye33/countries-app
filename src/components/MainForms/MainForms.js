import React from "react";

import { FaSearch, FaChevronUp, FaChevronDown } from "react-icons/fa";
import "./MainForms.scss";

const MainForms = () => {
  return (
    <section className="MainForms">
      <form className="MainForms__country">
        <FaSearch className="MainForms__icon" />
        <label>
          <input
            className="MainForms__input"
            type="text"
            name="country"
            placeholder="Search for a country..."
          />
        </label>
      </form>
      <div className="MainForms__region">
        <button className="MainForms__btn">
          Filter by Region <FaChevronDown />
        </button>
        <div className="MainForms__links">
          {/* TODO: Convert a tag to react router Links */}
          <a href="#about" className="MainForms__link">
            Africa
          </a>
          <a href="#base" className="MainForms__link">
            America
          </a>
          <a href="#blog" className="MainForms__link">
            Asia
          </a>
          <a href="#contact" className="MainForms__link">
            Europe
          </a>
          <a href="#custom" className="MainForms__link">
            Oceania
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainForms;

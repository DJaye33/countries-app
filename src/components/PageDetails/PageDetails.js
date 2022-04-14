import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";

import "./PageDetails.scss";

const PageDetails = () => {
  const context = useContext(ThemeContext);
  return (
    <Link to="/" className="PageDetails">
      <button
        className={`PageDetails__btn PageDetails__btn--${
          context.theme === "dark" ? "dark" : ""
        }`}
      >
        <FaArrowLeft /> Back
      </button>
    </Link>
  );
};

export default PageDetails;

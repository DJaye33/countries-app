import React from "react";
import ContentCard from "../ContentCard/ContentCard";

import "./MainContent.scss";

const MainContent = ({ countries }) => {
  return (
    <section className="MainContent">
      <ContentCard countries={countries}/>
    </section>
  );
};

export default MainContent;

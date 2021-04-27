import React from "react";
import "./index.css";
import Section from "../Section";

import data from "./data.json";

const Sections = () => {
  return (
    <div>
      {data.map((elem) => {
        return <Section category={elem.category} images={elem.images} />;
      })}
    </div>
  );
};

export default Sections;

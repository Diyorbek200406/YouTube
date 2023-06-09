import React from "react";
// style
import "./right.css";
import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";
import Section3 from "./section3/Section3";
import Left from "../left/Left";

const Right = () => {
  return (
    <>
      <Left />
      <div className="right">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </>
  );
};

export default Right;

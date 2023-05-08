import "./section2.css";
import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
const Section2 = () => {
  return (
    <div className="section2">
      <div className="title ">
        <div className="scr">
          <h4>Recommended</h4>
        </div>
        <div className="scroll">
          <BiChevronLeft className="icon border " />
          <BiChevronRight className="icon border" />
        </div>
      </div>
      <div className="gif">
        <div className="cover7">
          <div className="img">
            <img src="./src/assets/Cover7.png" alt="subscription" />
          </div>
          <p className="ptop">A Brief History Of Creation</p>
          <div className="d-flex justify-content-between">
            <span className="pbot">80k views · 3 days ago</span>
            <span className="pbot">Dollie Blair</span>
          </div>
        </div>
        <div className="cover8">
          <div className="img">
            <img src="./src/assets/Cover8.png" alt="subscription" />
          </div>
          <p className="ptop">A Brief History Of Creation</p>
          <div className="d-flex justify-content-between">
            <span className="pbot">80k views · 3 days ago</span>
            <span className="pbot">Dollie Blair</span>
          </div>
        </div>
        <div className="cover9">
          <div className="img">
            <img src="./src/assets/Cover9.png" alt="subscription" />
          </div>
          <p className="ptop">A Brief History Of Creation</p>
          <div className="d-flex justify-content-between">
            <span className="pbot">80k views · 3 days ago</span>
            <span className="pbot">Dollie Blair</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;

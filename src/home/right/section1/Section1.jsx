import "./section1.css";
import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";

const Section1 = () => {
  return (
    <div className="section1">
      <div className="title ">
        <div className="scr">
          <img src="./src/assets/subs1.png" alt="subscription" />
          <h4>Dollie Blair</h4>
        </div>
        <div className="scroll">
          <BiChevronLeft className="icon border" />
          <BiChevronRight className="icon border" />
        </div>
      </div>
      <div className="gif">
        <div className="cover1">
          <div className="img">
            <img src="./src/assets/Cover1.png" alt="subscription" />
          </div>
          <p className="ptop">A Brief History Of Creation</p>
          <div className="d-flex justify-content-between">
            <span className="pbot">80k views · 3 days ago</span>
            <span className="pbot">Dollie Blair</span>
          </div>
        </div>
        <div className="cover2">
          <div className="img">
            <img src="./src/assets/Cover2.png" alt="subscription" />
          </div>
          <p className="ptop">A Brief History Of Creation</p>
          <div className="d-flex justify-content-between">
            <span className="pbot">80k views · 3 days ago</span>
            <span className="pbot">Dollie Blair</span>
          </div>
        </div>
        <div className="cover3">
          <div className="img">
            <img src="./src/assets/Cover3.png" alt="subscription" />
          </div>
          <p className="ptop">A Brief History Of Creation</p>
          <div className="d-flex justify-content-between">
            <span className="pbot">80k views · 3 days ago</span>
            <span className="pbot">Dollie Blair</span>
          </div>
        </div>
        <div className="cover4">
          <div className="img">
            <img src="./src/assets/Cover4.png" alt="subscription" />
          </div>
          <p className="ptop">A Brief History Of Creation</p>
          <div className="d-flex justify-content-between">
            <span className="pbot">80k views · 3 days ago</span>
            <span className="pbot">Dollie Blair</span>
          </div>
        </div>
        <div className="cover5">
          <div className="img">
            <img src="./src/assets/Cover5.png" alt="subscription" />
          </div>
          <p className="ptop">A Brief History Of Creation</p>
          <div className="d-flex justify-content-between">
            <span className="pbot">80k views · 3 days ago</span>
            <span className="pbot">Dollie Blair</span>
          </div>
        </div>
        <div className="cover6">
          <div className="img">
            <img src="./src/assets/Cover6.png" alt="subscription" />
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

export default Section1;

import React from "react";
import "./channel.css";
import { HiOutlineBell } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
const Channel = () => {
  return (
    <div className="channel px-4 py-2">
      <div className="imgTop">
        <img src="./src/assets/Cover16.png" alt="subscription" />
      </div>
      <div className="mainBottom py-2">
        <div className="div1 d-flex justify-content-between">
          <h2>Margaret Phelps</h2>
          <div className="button">
            <HiOutlineBell />
            <button className="btn btn-danger">Subscribe 2.3m</button>
          </div>
        </div>
      </div>

      <div className="category d-flex justify-content-between">
        <ul className="ul d-flex gap-5">
          <Link to="/">
            <li>Home</li>
          </Link>
          <li>Videos</li>
          <li>Playlists</li>
          <li>Channels</li>
          <li>Discussion</li>
          <li>About</li>
          <li>
            <FiSearch />
          </li>
        </ul>
        <div className="recommend">
          <p>Recommended channel</p>
        </div>
      </div>
      <div className="categoryMain d-flex justify-content-between">
        <div className="left1">
          <div className="images">
            <img src="./src/assets/Cover17.png" alt="subscription" />
          </div>
          <div className="text p-3">
            <h4>
              Choosing The Best Audio Player <br /> Software For Your Computer
            </h4>
            <p>
              Your cheap internet-based banner advertising <br /> will become
              one of the sought for ads <br /> there are. Today, the world of
              Internet <br /> advertising is rapidly evolving beyond <br />
              banner ads and intrusive pop-ups. <br /> A common medium for
              advertising on <br /> the Internet is the use of banner ads.
            </p>
            <h6>11k views · 6 months ago</h6>
          </div>
        </div>
        <div className="right1">
          <div className="users">
            <img src="./src/assets/oval7.png" alt="subscription" />
            <p>Flora Benson</p>
          </div>
          <div className="users">
            <img src="./src/assets/oval8.png" alt="subscription" />
            <p>Violet Cobb</p>
          </div>
          <div className="users">
            <img src="./src/assets/oval9.png" alt="subscription" />
            <p>Phillip Mullins</p>
          </div>
        </div>
      </div>

      <div className="end">
        <div className="section3">
          <div className="title ">
            <div className="scr">
              <img src="./src/assets/subs1.png" alt="subscription" />
              <h4>
                Food & Drink <span>Recommended channel for you</span>
              </h4>
            </div>
            <div className="scroll">
              <BiChevronLeft className="icon border" />
              <BiChevronRight className="icon border" />
            </div>
          </div>
          <div className="gif">
            <div className="cover10">
              <div className="img">
                <img src="./src/assets/Cover10.png" alt="subscription" />
              </div>
              <p className="ptop">A Brief History Of Creation</p>
              <div className="d-flex justify-content-between">
                <span className="pbot">80k views · 3 days ago</span>
                <span className="pbot">Dollie Blair</span>
              </div>
            </div>
            <div className="cover11">
              <div className="img">
                <img src="./src/assets/Cover11.png" alt="subscription" />
              </div>
              <p className="ptop">A Brief History Of Creation</p>
              <div className="d-flex justify-content-between">
                <span className="pbot">80k views · 3 days ago</span>
                <span className="pbot">Dollie Blair</span>
              </div>
            </div>
            <div className="cover12">
              <div className="img">
                <img src="./src/assets/Cover12.png" alt="subscription" />
              </div>
              <p className="ptop">A Brief History Of Creation</p>
              <div className="d-flex justify-content-between">
                <span className="pbot">80k views · 3 days ago</span>
                <span className="pbot">Dollie Blair</span>
              </div>
            </div>
            <div className="cover13">
              <div className="img">
                <img src="./src/assets/Cover13.png" alt="subscription" />
              </div>
              <p className="ptop">A Brief History Of Creation</p>
              <div className="d-flex justify-content-between">
                <span className="pbot">80k views · 3 days ago</span>
                <span className="pbot">Dollie Blair</span>
              </div>
            </div>
            <div className="cover14">
              <div className="img">
                <img src="./src/assets/Cover14.png" alt="subscription" />
              </div>
              <p className="ptop">A Brief History Of Creation</p>
              <div className="d-flex justify-content-between">
                <span className="pbot">80k views · 3 days ago</span>
                <span className="pbot">Dollie Blair</span>
              </div>
            </div>
            <div className="cover15">
              <div className="img">
                <img src="./src/assets/Cover15.png" alt="subscription" />
              </div>
              <p className="ptop">A Brief History Of Creation</p>
              <div className="d-flex justify-content-between">
                <span className="pbot">80k views · 3 days ago</span>
                <span className="pbot">Dollie Blair</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Channel;

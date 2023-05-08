import React from "react";
import { Link, NavLink } from "react-router-dom";
// style
import "./left.css";
// react icons
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineFire } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";
import { AiOutlineFolder } from "react-icons/ai";
import { RiHistoryFill } from "react-icons/ri";
import { TfiAlarmClock } from "react-icons/tfi";
import { HiOutlineStar } from "react-icons/hi";
import { MdFavoriteBorder } from "react-icons/md";
import { HiOutlineMusicNote } from "react-icons/hi";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdExpandMore } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineHelp } from "react-icons/md";

const Left = () => {
  return (
    <div className="left px-4 py-2">
      <div className="leftTop">
        <ul>
          <li className="text-danger">
            <AiOutlineHome className="icon" />
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <AiOutlineFire className="icon" /> <span>Trending</span>
          </li>
          <li>
            <MdOutlineSubscriptions className="icon" />{" "}
            <span>Subscriptions</span>
          </li>
          <br />
          <li>
            <AiOutlineFolder className="icon" /> <span>Library</span>
          </li>
          <li>
            <RiHistoryFill className="icon" /> <span>History</span>
          </li>
          <li>
            <TfiAlarmClock className="icon" /> <span>Watch later</span>
          </li>
          <li>
            <HiOutlineStar className="icon" /> <span>Favourites</span>
          </li>
          <li>
            <MdFavoriteBorder className="icon" /> <span>Liked videos</span>
          </li>
          <li>
            <HiOutlineMusicNote className="icon" /> <span>Music</span>
          </li>
          <li>
            <IoGameControllerOutline className="icon" /> <span>Games</span>
          </li>
          <li>
            <MdExpandMore className="icon" /> <span>Show more</span>
          </li>
        </ul>
      </div>
      <div className="leftBottom">
        <br />
        <h4>Subscriptions</h4>
        <ul className="leftBottomUl">
          <NavLink to="/channel">
            <li>
              <img src="./src/assets/subs1.png" alt="subscription" />
              <span>Guise Singleton</span>
            </li>
          </NavLink>
          <NavLink to="/channel">
            <li>
              <img src="./src/assets/subs2.png" alt="subscription" />
              <span> Nora Francis</span>
            </li>
          </NavLink>
          <NavLink to="/channel">
            <li>
              <img src="./src/assets/subs3.png" alt="subscription" />
              <span>Belle Briggs</span>
            </li>
          </NavLink>
          <NavLink to="/channel">
            <li>
              <img src="./src/assets/subs4.png" alt="subscription" />
              <span>Eunice Cortez</span>
            </li>
          </NavLink>
          <NavLink to="/channel">
            <li>
              <img src="./src/assets/subs5.png" alt="subscription" />
              <span>Emma Hanson</span>
            </li>
          </NavLink>
          <NavLink to="/channel">
            <li>
              <img src="./src/assets/subs6.png" alt="subscription" />
              <span>Leah Berry</span>
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="leftSettings">
        <ul>
          <li>
            <IoSettingsOutline className="icon" />
            <span>Setting</span>
          </li>
          <li>
            <MdOutlineHelp className="icon" />
            <span>Help</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Left;

import React from "react";
// style
import "./header.css";
// package
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillYoutube } from "react-icons/ai";

const Header = () => {
  return (
    <header className="px-4">
      <div className="logo gap-3">
        <RxHamburgerMenu className="hamburger" />
        <AiFillYoutube className="youtube" />

        <h4>You Tube</h4>
      </div>
      <div className="input w-50">
        <input
          type="search"
          name="search"
          id="search"
          className="form-control w-75"
          placeholder="Search..."
        />
      </div>
      <div className="profile w-25">
        <img src="./src/assets/phone.png" alt="phone" />
        <img src="./src/assets/shape.png" alt="shape" />
        <img src="./src/assets/call.png" alt="call" />
        <img src="./src/assets/user.png" alt="user" />
      </div>
    </header>
  );
};

export default Header;

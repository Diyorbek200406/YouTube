import React from "react";
import { Route, Routes } from "react-router-dom";
// component
import Right from "./right/Right";

// style
import "./home.css";
import Left from "./left/Left";
import Channel from "../ChannelPage/Channel";

import SingleVideo from "../singlePage/SingleVideo";
const Home = () => {
  return (
    <React.Fragment>
      <div className="home">
        <Left />
        <Routes>
          <Route path="/" element={<Right />} />
          <Route path="/channel" element={<Channel />} />
          <Route path="news/:id " element={<SingleVideo />} />
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default Home;

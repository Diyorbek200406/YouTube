import React from "react";
import { Route, Routes } from "react-router-dom";
// component
import Right from "./right/Right";
import Header from "./header/Header";
// style
import "./home.css";

import SingleVideo from "../singlePage/SingleVideo";
const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="home">
        <Routes>
          <Route path="/" element={<Right />} />
          <Route path="singleVideo/:id" element={<SingleVideo />} />
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default Home;

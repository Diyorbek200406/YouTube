import "./section3.css";
import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

const Section3 = () => {
  return (
    <div className="section3">
      <div className="title">
        <div className="scr">
          <img src="./src/assets/subs1.png" alt="subscription" />
          <h4>
            Food & Drink <span>Recommended channel for you</span>
          </h4>
        </div>
        <div className="scroll">
          <button className="btn btn-danger mx-2 px-4 Subscribe ">
            Subscribe 2.3m
          </button>
          <BiChevronLeft className="icon border" />
          <BiChevronRight className="icon border" />
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <div className="gif">
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Section3;

import "./section2.css";
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
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <div className="gif">
          <SwiperSlide>
            <div className="cover7">
              <div className="img">
                <img src="./src/assets/Cover7.png" alt="subscription" />
              </div>
              <p className="ptop">A Brief History Of Creation</p>
              <div className="d-flex justify-content-evenly">
                <span className="pbot">80k views · 3 days ago</span>
                <span className="pbot">Dollie Blair</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cover8">
              <div className="img">
                <img src="./src/assets/Cover8.png" alt="subscription" />
              </div>
              <p className="ptop">A Brief History Of Creation</p>
              <div className="d-flex justify-content-evenly">
                <span className="pbot">80k views · 3 days ago</span>
                <span className="pbot">Dollie Blair</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cover9">
              <div className="img">
                <img src="./src/assets/Cover9.png" alt="subscription" />
              </div>
              <p className="ptop">A Brief History Of Creation</p>
              <div className="d-flex justify-content-evenly">
                <span className="pbot">80k views · 3 days ago</span>
                <span className="pbot">Dollie Blair</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cover9">
              <div className="img">
                <img src="./src/assets/Cover9.png" alt="subscription" />
              </div>
              <p className="ptop">A Brief History Of Creation</p>
              <div className="d-flex justify-content-evenly">
                <span className="pbot">80k views · 3 days ago</span>
                <span className="pbot">Dollie Blair</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cover9">
              <div className="img">
                <img src="./src/assets/Cover9.png" alt="subscription" />
              </div>
              <p className="ptop">A Brief History Of Creation</p>
              <div className="d-flex justify-content-evenly">
                <span className="pbot">80k views · 3 days ago</span>
                <span className="pbot">Dollie Blair</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cover9">
              <div className="img">
                <img src="./src/assets/Cover9.png" alt="subscription" />
              </div>
              <p className="ptop">A Brief History Of Creation</p>
              <div className="d-flex justify-content-evenly">
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

export default Section2;

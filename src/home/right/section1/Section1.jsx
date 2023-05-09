import "./section1.css";
import React, { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import useFetch from "../../../useFetchApi/useFetch";
import { Link, useParams } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper";

const Section1 = () => {
  const [type, setType] = useState("");
  const url =
    "https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "47fc6574c5msh4cd22bef46fcac6p155ab1jsn4b1422a668fc",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
  const { data, loading, error } = useFetch(url, options);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h1>{error}</h1>
        {console.log(error)}
      </div>
    );
  }

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
          {data?.map((item) => {
            return (
              <SwiperSlide key={item.id.videoId}>
                <div key={item.id.videoId} className="cover1">
                  <div className="img">
                    <Link to={`/singleVideo/${item.id.videoId}`}>
                      <iframe
                        width="250"
                        height="150"
                        src={`https://www.youtube.com/embed/${item.id.videoId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </Link>
                  </div>
                  {console.log(item.snippet)}
                  <p className="ptop">{item.snippet.channelTitle}</p>
                  <div className="d-flex justify-content-between">
                    <span className="pbot">80k views · 3 days ago</span>
                    <span className="pbot">Dollie Blair</span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};

export default Section1;

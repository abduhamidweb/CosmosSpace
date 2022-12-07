import React, { useRef, useState } from "react";
import "./stylePlayedSlide.css";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import db from "../../db.json";
import ShortCard from "../ShortCard/ShortCard";

const PlayedSlider = ({secTitle, cardBorderclassName, awards}) => {
  console.log(cardBorderclassName)
  return (
    <>
    <h2 className="titlee mt-5 mb-3 ps-1">{secTitle}</h2>
      <div className="playedSlideWrapp">
        <Swiper
          slidesPerView={3.5}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {db.sliderCardforHomePage.map((slideCardInfo) => {
            return (
              <>
                <SwiperSlide>
                  <ShortCard
                    cardImg={slideCardInfo.cardImg}
                    cardTitle={slideCardInfo.cardTitle}
                    cardClassname={"card-img"}
                    borderClassName={cardBorderclassName}
                    awards={awards}
                    
                  />
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default PlayedSlider;

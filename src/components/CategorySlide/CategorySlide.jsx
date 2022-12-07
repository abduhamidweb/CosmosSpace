import React from 'react';
import "./styleCategorySlide.css"
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import db from "../../db.json";
import ShortCard from "../ShortCard/ShortCard";
import CategoryCard from './CategoryCard/CategoryCard';
const CategorySlide = () => {
    return (
        <>


        <h2 className="secTitle mb-4 ps-1">Categories</h2>
        <div className="categorySlide">
        <Swiper
          slidesPerView={4.5}
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
                  <CategoryCard cardTitle={slideCardInfo.cardTitle} cardImg={slideCardInfo.cardImg}/>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
        </div>
         
        </>
    );
};

export default CategorySlide;
import React, { Link } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "./style.css";
import Li from "../Li";

const index = () => {
  return (
    <>
      <section>
        <div className="container">
          {/* Plan title start*/}
          <div className="planTitle">
            <h2>Choose your plan</h2>
            <p>
              Discover our plans and choose the best option for you to enjoy ours
              content.
            </p>
          </div>
          <div className="planWrapper">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="row pt-5">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="planCard">
                      <h2>MONTHLY</h2>
                      <hr />
                      <p className="planCard-text">
                        At Infinity & Beyond you will find the best content
                        about space.
                      </p>
                      <ul className="plan-list">
                        <Li planItemText="lorem ipsum dolor sit" />
                        <Li planItemText="lorem ipsum dolor sit" />
                        <Li planItemText="lorem ipsum dolor sit" />
                        <Li planItemText="lorem ipsum dolor sit" />
                        <Li planItemText="lorem ipsum dolor sit" />
                      </ul>
                      <span>
                        <h2>$19,90</h2>
                        <p>/month</p>
                      </span>
                      <a href="#" className="plan-sign hoverBtn">
                        Sign Up Now!
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="row pt-5">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="planCard" id="planCard2">
                      <h2>6 MONTHS</h2>
                      <hr />
                      <p className="planCard-text">
                        At Infinity & Beyond you will find the best content
                        about space.
                      </p>
                      <ul className="plan-list">
                        <Li planItemText="lorem ipsum dolor sit" />
                        <Li planItemText="lorem ipsum dolor sit" />
                        <Li planItemText="lorem ipsum dolor sit" />
                        <Li planItemText="lorem ipsum dolor sit" />
                        <Li planItemText="lorem ipsum dolor sit" />
                        <Li planItemText="lorem ipsum dolor sit" />
                        <Li planItemText="lorem ipsum dolor sit" />
                      </ul>
                      <span>
                        <h2 className="center-card-senna">$19,90</h2>
                        <p>/month</p>
                      </span>
                      <a href="#" className="plan-sign hoverBtn">
                        Sign Up Now!
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="row pt-5">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="planCard">
                      <h2>YEARLY</h2>
                      <hr />
                      <p className="planCard-text">
                        At Infinity & Beyond you will find the best content
                        about space.
                      </p>
                      <ul className="plan-list">
                        <Li planItemText="lorem ipsum dolor sit" />
                        <Li planItemText="lorem ipsum dolor sit" />
                        <Li planItemText="lorem ipsum dolor sit" />
                        <Li planItemText="lorem ipsum dolor sit" />
                        <Li planItemText="lorem ipsum dolor sit" />
                        <Li planItemText="lorem ipsum dolor sit" />
                        <Li planItemText="lorem ipsum dolor sit" />
                      </ul>
                      <span>
                        <h2>$19,90</h2>
                        <p>/month</p>
                      </span>
                      <a href="#" className="plan-sign hoverBtn">
                        Sign Up Now!
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <p className="plan-see">
              *See more information about payment plans clicking here.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;

import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";
import Li from "../Li"


const index = () => {
  
  const Card1 = useRef();
  const Card2 = useRef();
  const Card3 = useRef();
    const CardLink1 = useRef();
    const CardLink2 = useRef();
    const CardLink3 = useRef();
  return (
    <>
      <section>
        <div className="container">
          {/* Plan title start*/}
          <div className="planTitle">
            <h2>Choose your plan</h2>
            <p>
              Discover our plans and choose the best option for you to enjoy our
              content.
            </p>
          </div>
          <div className="planWrapper">
            <div className="row">
              <div className="col-12">
                <div className="planLinks">
                  <a
                    ref={CardLink1}
                    onClick={(e) => {
                      Card1.current.classList.add("isActiveCard");
                      Card2.current.classList.remove("isActiveCard");
                      Card3.current.classList.remove("isActiveCard");
                      CardLink1.current.classList.add("isActiveLink");
                      CardLink2.current.classList.remove("isActiveLink");
                      CardLink3.current.classList.remove("isActiveLink");
                    }}
                  >
                    MONTHLY
                  </a>
                  <a
                    ref={CardLink2}
                    className="isActiveLink"
                    onClick={(e) => {
                      Card1.current.classList.remove("isActiveCard");
                      Card2.current.classList.add("isActiveCard");
                      Card3.current.classList.remove("isActiveCard");
                      CardLink1.current.classList.remove("isActiveLink");
                      CardLink2.current.classList.add("isActiveLink");
                      CardLink3.current.classList.remove("isActiveLink");
                    }}
                  >
                    6 MONTHS{" "}
                  </a>
                  <a
                    ref={CardLink3}
                    onClick={(e) => {
                      Card1.current.classList.remove("isActiveCard");
                      Card2.current.classList.remove("isActiveCard");
                      Card3.current.classList.add("isActiveCard");
                      CardLink1.current.classList.remove("isActiveLink");
                      CardLink2.current.classList.remove("isActiveLink");
                      CardLink3.current.classList.add("isActiveLink");
                    }}
                  >
                    YEARLY
                  </a>
                </div>
                <span className="recomended">
                  <i className="bi bi-star-fill"></i> <p>Recommended</p>
                </span>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="planCard" ref={Card1}>
                  <h2>MONTHLY</h2>
                  <hr />
                  <p className="planCard-text">
                    At Infinity & Beyond you will find the best content about
                    space.
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
                  <Link to="/signsteptwo" className="plan-sign">
                    Sign Up Now!
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="planCard isActiveCard"
                  id="planCard2"
                  ref={Card2}
                >
                  <h2>6 MONTHS</h2>
                  <hr />
                  <p className="planCard-text">
                    At Infinity & Beyond you will find the best content about
                    space.
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
                  <Link to="/signsteptwo" className="plan-sign sign-plan">
                    Sign Up Now!
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="planCard" ref={Card3}>
                  <h2>YEARLY</h2>
                  <hr />
                  <p className="planCard-text">
                    At Infinity & Beyond you will find the best content about
                    space.
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
                  <Link to="/signsteptwo" className="plan-sign">
                    Sign Up Now!
                  </Link>
                </div>
              </div>
              <p className="plan-see">
                *See more information about payment plans clicking here.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;

import React from "react";

import { Link } from "react-router-dom";
import "./styleLongCard.css";
const LongCard = ({cardImg, cardTitle, bgGreyClassName}) => {
  return (
    <>
      <div className="card longCard shadow-none">
        <div
          className="bg-image hover-overlay ripple longCardImgWrapp"
          data-mdb-ripple-color="light"
        >
          <img
            src={cardImg}
            className="card-top-img longCardImg"
          />
          <span className={bgGreyClassName}>
            <i className="bi bi-star-fill"></i>Original Infinity & Beyond{" "}
          </span>
        </div>
        <div className="card-body py-0 pt-3 px-1">
          <h5 className="card-title longCardTitle">{`${cardTitle.slice(0, 23)} ...`}</h5>

          {/* <Link to="/" className="card-text longCardText" target="_blank">
            Click to see an exclusive trailer
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default LongCard;

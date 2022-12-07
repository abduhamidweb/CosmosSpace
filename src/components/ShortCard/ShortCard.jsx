import React from "react";
import { Link } from "react-router-dom";
import "./styleShortCard.css";

const ShortCard = ({
  cardImg,
  cardTitle,
  cardDesc,
  cardClassname,
  borderClassName,
  awards,
  
}) => {
  console.log(borderClassName);
  return (
    <>
      <div className="card shadow-none shortCard">
        <div
          className={borderClassName ? borderClassName : cardClassname}
          data-mdb-ripple-color="light"
        >
          <img src={cardImg} className="card-img-top cardImgg" alt="card-img" />
          <div className={awards ? "awardWrapp d-flex" : "awardNone"}>
            <i className="fa-sharp fa-solid fa-award"></i>
            <p className="awardatext py-0 my-0 ms-1">Award Winner</p>
          </div>
        </div>
        <div className="card-body my-0 py-0 px-1 pt-3">
          <h5 className="card-title shortCardTitle">{cardTitle}</h5>
          <p className="card-text shortCardText">{cardDesc}</p>
        </div>
      </div>
    </>
  );
};

export default ShortCard;

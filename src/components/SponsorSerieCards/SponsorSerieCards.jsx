import React from "react";
import "./stylesponsorseriCard.css";
import db from "../../db.json";
import LongCard from "../LongCard/LongCard";
const SponsorSerieCards = () => {
  return (
    <>
      <div className="container">
        <div className="sponsorCardWrapp longCardWrapp">
          {db.cosmosFourCards.map((sponsorCardInfo) => {
            return (
              <LongCard
                cardImg={sponsorCardInfo.posterVideo}
                cardTitle={sponsorCardInfo.spaceTitle}
                bgGreyClassName={"starText bgStarawrapp"}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SponsorSerieCards;

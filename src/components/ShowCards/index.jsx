import React from 'react';
import "./style.css"
const index = ({ ShowCardImg, ShowCardTitle, ShowCardInfo,ShowCardDescription }) => {
  return (
    <>
      
        <div className="ShowCardRow d-flex">
          <div className="ShowCards">
            <img src={ShowCardImg} className=" ShowCardImg" alt="img" />
          </div>
          <div className="ShowCardsTexts">
            <h2 className="ShowCardTitle">{ShowCardTitle}</h2>
            <p className="ShowCardInfo">{ShowCardInfo}</p>
            <p className="ShowCardDescription">{ShowCardDescription}</p>
          </div>
        </div>
     
    </>
  );
};

export default index;
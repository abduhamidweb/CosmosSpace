import React, { useContext, useCallback, useEffect, useState } from "react";
import context from "../../context/context";
import Plan from "../../components/Plan";
import LongCard from "../../components/LongCard/LongCard";
import ShortCard from "../../components/ShortCard/ShortCard";
import Hero from "../../components/Hero/Hero";
import CardLinks from "../../db.json";
import favDevice from "../../assets/images/devices.png";
import Navbar from "../../UI/Navbar/Navbar"
import PlanSlide from "../../components/PlanSlide"
import "./styleHome.css";


import Acartion from "../../components/Acartion/Acartion";

const InfoPage = () => {
  const {} = useContext(context);
  return (
    <>
      <Navbar/>
      <Hero />
      <div className="container">
        <div className="shortCardWrapp d-flex justify-content-between flex-wrap">
          {CardLinks.cosmosThreeCards.map((shortCardInfo) => {
            return (
              <ShortCard
                cardImg={shortCardInfo.cardImg}
                cardTitle={shortCardInfo.cardTitle}
                cardDesc={shortCardInfo.cardDecription}
                cardClassname={"card-img hover-overlay ripple "}
              />
            );
          })}
        </div>
      </div>
      <section className="defoultPlan">
        <Plan />
      </section>
      <section className="swippers">
        <PlanSlide />
      </section>

      <div className="container">
        <h2 className="exlusiveTitle text-center">
          See Infinity & Beyond exclusive content
        </h2>
        <p className="exlusiveText mx-auto">
          See our exclusive content and learn more about what has been
          researched and produced about the space and beyond
        </p>
        <div className="longCardWrapp">
          {CardLinks.cosmosFourCards.map((longCardInfo) => {
            return (
              <LongCard
                cardImg={longCardInfo.posterVideo}
                cardTitle={longCardInfo.spaceTitle}
                bgGreyClassName={"starText bg-secondary"}
              
              />
            );
          })}
        </div>
      </div>

      <div className="container">
        <div className="favDeviceWrapp text-center">
          <h2 className="favDeviceTitle text-center">
            A complete experience available on your favorite devices
          </h2>
          <p className="favDeviceText text-center">
            Compatible with all devices and download available depending on
            subscription plan
          </p>

          <img
            src={favDevice}
            alt="favorite-device"
            className="favDeviceImg img-fluid"
          />
        </div>

        <div className="deviceLinksWrapp">
          <div className="devLinks d-flex flex-column">
            <h3 className="deviceLinkTitle">Computer</h3>
            <a href="#" className="dlink">
              Chrome OS
            </a>
            <a href="#" className="dlink">
              MacOS
            </a>
            <a href="#" className="dlink">
              Windows PC
            </a>
            <a href="#" className="dlink">
              Linux
            </a>
            <a href="#" className="dlink">
              See More
            </a>
          </div>
          <div className="devLinks d-flex flex-column">
            <h3 className="deviceLinkTitle">TV</h3>
            <a href="#" className="dlink">
              Amazon Fire TV
            </a>
            <a href="#" className="dlink">
              Android TV
            </a>
            <a href="#" className="dlink">
              Apple TV
            </a>
            <a href="#" className="dlink">
              Chromecast
            </a>
            <a href="#" className="dlink">
              See More
            </a>
          </div>
          <div className="devLinks d-flex flex-column">
            <h3 className="deviceLinkTitle">Video Games</h3>
            <a href="#" className="dlink">
              PS4
            </a>
            <a href="#" className="dlink">
              PS5
            </a>
            <a href="#" className="dlink">
              Xbox One
            </a>
            <a href="#" className="dlink">
              Xbox Series X
            </a>
            <a href="#" className="dlink">
              See More
            </a>
          </div>
          <div className="devLinks d-flex flex-column">
            <h3 className="deviceLinkTitle">Cellphones and Tablets</h3>
            <a href="#" className="dlink">
              Samsung
            </a>
            <a href="#" className="dlink">
              IPhones
            </a>
            <a href="#" className="dlink">
              Xiaomi
            </a>
            <a href="#" className="dlink">
              Windows Phone
            </a>
            <a href="#" className="dlink">
              See More
            </a>
          </div>
        </div>
      </div>
     

      <Acartion />
   
    </>
  );
};
// for import context

export default InfoPage;

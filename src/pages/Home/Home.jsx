import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

import ShowPageHero from "../../components/ShowPgaeHero/ShowPageHero";
import PlayedSlider from "../../components/PlayedSlider/PlayedSlider";
import SponsorSerieCards from "../../components/SponsorSerieCards/SponsorSerieCards";
import CategorySlide from "../../components/CategorySlide/CategorySlide";

const Home = () => {


  return (
    <>

      <ShowPageHero />

      <section>
        <div className="container">
          <Link to="/showpage">
            <PlayedSlider secTitle={"Recent Played"} />
          </Link>
        </div>
      </section>
      <section>
        <div className="container">
          <Link to="/showpage">
            <SponsorSerieCards />
          </Link>
          <h2 className="secTitlee mt-5 mb-4">Sponsored Series</h2>
        </div>
      </section>
      <section>
        <div className="container">
          <Link to="/showpage">
            <PlayedSlider secTitle={"Recommended Series"} />
          </Link>
        </div>
      </section>
      <section className="categorySec my-5">
        <div className="container">
          <Link to="/showpage">
            <CategorySlide />
          </Link>
        </div>
      </section>

      <section>
        <div className="container">
          <Link to="/showpage">

          <PlayedSlider
            secTitle={"Award Winning Documentaries"}
            cardBorderclassName={"golborder"}
            awards={"awardBlock"}
          />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;

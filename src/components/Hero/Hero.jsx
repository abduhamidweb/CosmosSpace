import React, { useRef } from "react";
import HeroImg from "../../assets/images/hero_bg-defoult.png";
import HeroVideoLink from "../../assets/videos/vidoe.mp4"
import Footer from "../../UI/Footer/Footer";
import "./style.scss";
const Hero = () => {
  const video = useRef();
  const icon = useRef();
  return (
    <>
      <section className="hero">
        <video poster={HeroImg} ref={video}>
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-traveling-between-brightly-colored-nebulae-and-stars-31780-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="AutoPlayAdd" ref={icon}>
          <i
            className="bi bi-play"
            onClick={() => {
              setInterval(() => {
                video.current.play();
              },1);
              icon.current.style.opacity = "0";
            }}
          ></i>
        </div>
        <div className="FormCountrols">
          <div className="form-text">
            <h4 className="form-title">
              How One Supernova Measured The Universe
            </h4>
            <p className="form-description">
              In 2015 astronomers successfully predicted the appearance of a
              supernova within a couple weeks. How did they do it?
            </p>
          </div>
          <form className="Hero-form">
            <label htmlFor="label-titil" className="label-titil">
              <h4>
                <span>Sign Up</span> and watch this documentary and others
                titles!
              </h4>
            </label>
            <div className="form-input">
              <input
                type="text"
                placeholder="example@email.com"
                className="forma-input"
                autoComplete="off"
              />
              <button className="btn btn-hero hoverBtn" type="submit">
                Sign Up Now!
              </button>
            </div>
            <p className="form-description">
              Ready to watch? Enter your email and enjoy the best of our
              content.
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;

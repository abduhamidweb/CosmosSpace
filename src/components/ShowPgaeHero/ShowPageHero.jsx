import React, { useRef } from "react";
import { Link } from "react-router-dom";
import HeroImg from "../../assets/images/Video_bg_hero.png";
import Logo from "../../assets/images/homeLogo.png";
import Profil from "../../components/Profile/Profil";
import "./stylee.scss";
const ShowPageHero = () => {
  const onClickPlay = useRef();
  const innerHTMLPause = useRef();
  const searchInput = useRef();

    return (
      <>
        <header className="homeHeadre">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <a className="navbar-brand" href="#">
                <img src={Logo} alt="" />
              </a>
              <button
                
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-bars text-light "></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-light"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Browse
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-star"></i>{" "}
                          <span className="ms-2">Eath</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-star"></i>{" "}
                          <span className="ms-2">Stars</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-star"></i>{" "}
                          <span className="ms-2">Nasa</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          see more
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="thisInputHero">
                  <label
                    htmlFor="search"
                    className="bi bi-search fs-5 text-light"
                    onClick={() => {
                      searchInput.current.classList.toggle("Type_Input");
                    }}
                  ></label>
                  <input
                    type="text"
                    className="search"
                    id="search"
                    name="search"
                    placeholder="search"
                    ref={searchInput}
                    autoComplete="off"
                  />
                </div>
                <div className="thisProfile">
                  <Profil />
                </div>
              </div>
            </div>
          </nav>
        </header>

        <section className="Video_hero_Player">
        <video poster={HeroImg} ref={onClickPlay}>
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-traveling-between-brightly-colored-nebulae-and-stars-31780-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="container">
          <div className="this-video-txt-wrapper">
            <span className="sponser">
              <i class="bi bi-star-fill"></i>
              <span>Sponsored</span>
            </span>
            <div className="this-title">
              <h4>Cosmic Cliffs</h4>
            </div>
            <div className="this-description">
              <p>star-forming region called NGC 3324 in the Carina Nebula</p>
            </div>
            <div className="this-btn">
              <button
                className="btn"
                onClick={() => {
                  innerHTMLPause.current.classList.toggle("bi-play-fill");
                  innerHTMLPause.current.classList.toggle("bi-pause");
                  onClickPlay.current.play();
                  if (
                    innerHTMLPause.current.classList.contains("bi-play-fill")
                  ) {
                    onClickPlay.current.pause();
                  }
                }}
              >
                <i class="bi bi-play-fill" ref={innerHTMLPause}></i>
                <span>video category</span>
              </button>
            </div>
            <div className="this-more">
              <Link to="/showpage">More info here</Link>
            </div>
          </div>
        </div>
      </section>

  

    </>
  );
};

export default ShowPageHero;

import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from "../../assets/images/LOGO.png";
import "./style.scss";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-Logo text-center">
            <Link to="/">
              <img src={FooterLogo} alt="" />
            </Link>
          </div>
          <footer className="text-center text-lg-start bg-white text-muted">
            <section className="">
              <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                  <div className="col-md-2 col-sm-6 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4"></h6>
                    <p>
                      <a href="#!" className="text-reset">
                        Audio Description
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Media Center
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Cookies Preferences
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Devices
                      </a>
                    </p>
                  </div>
                  <div className="col-md-2 col-sm-6 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4"></h6>
                    <p>
                      <a href="#!" className="text-reset">
                        Gift Cards Legal
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Jobs Information
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Corporate Information
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Notices
                      </a>
                    </p>
                  </div>
                  <div className="col-md-3 col-sm-12 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4"></h6>
                    <p>
                      <a href="#!" className="text-reset">
                        Contact Us
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Terms of Use
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Privacy Help
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Center
                      </a>
                    </p>
                  </div>
                  <div className="col-md-4 col-sm-12 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 footerLinkWrapper">
                    <div className="footerSelectet">
                      <div className="select_wrapper">
                        <select>
                          <option>English</option>
                          <option>Uzbekiston</option>
                          <option>Russia</option>
                        </select>
                        <i className="bi bi-globe ms-2 "></i>
                      </div>
                    </div>
                    <section className="d-flex footerLiknkIcons">
                      <div>
                        <a href="" className=" link-secondary">
                          <i className="fab fa-google"></i>
                        </a>
                        <a href="" className=" link-secondary">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className=" link-secondary">
                          <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="" className=" link-secondary">
                          <i className="fab fa-github"></i>
                        </a>
                      </div>
                    </section>
                  </div>
                </div>
                <div className="LineFooter"></div>
                <h4 className="text-center footerDescription">
                  © 2022 Infinity & Beyond, LLC. All rights reserved to Team by
                  RAM
                </h4>
              </div>
            </section>
          </footer>
        </div>
      </footer>
    </>
  );
};

export default Footer;

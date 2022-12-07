import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css"
import Logo from "../../assets/images/Logo.png"
import Input from "../Input/Input"
const index = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="logo d-flex justify-content-center mt-5 mb-5">
            <Link to="/">
              <img src={Logo} alt="img" />
            </Link>
          </div>
          <h2 className="text-center text-white plan2-title">
            Be part of Infinity & Beyond family
          </h2>
          <p className="text-center plan2-text">
            Get access to our wonderful content library.
          </p>
          <div className="PlanTwoLinks">
            <a href="#">Step 1</a>
            <a href="#">Step 2</a>
            <a href="#">Step 3</a>
          </div>
          <h2 className="text-white mt-5">
            Join the family, enter your details and create your account
          </h2>
          <p className="plan-deck">
            We're glad to see you here, you're just steps away from a wonderful
            world of amazing content!
          </p>

          <form action="#" className="PlanTwoForm mt-5">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <Input inputType="text" inputPlaceholder="First Name" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <Input inputType="text" inputPlaceholder="Last Name" />
              </div>
            </div>
            <div className="row mt-4 rowTwo">
              <div className="col-lg-12 col-md-12 col-sm-12 ">
                <Input inputType="email" inputPlaceholder="E-mail" />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-6 col-md-6 col-sm-12 d-flex inputPassword">
                <Input inputType="password" inputPlaceholder="Password" />
                <i class="bi bi-eye"></i>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 d-flex inputPassword">
                <Input
                  inputType="password"
                  inputPlaceholder="Confirm Password"
                />
                <i class="bi bi-eye"></i>
              </div>
              <p className="passwordDeck">
                *The password must be at least 8 characters long and include a
                number or special character.
              </p>
            </div>
          </form>
          <div className="planTwo-Deckription">
            <p>
              By clicking Create Account, you confirm that you are at least 18
              years old, that you agree to the <a href="#"> Terms of Use</a> and
              that you have read our <a href="#">Privacy Policy</a>. You also
              confirm that you agree to receive advertising, promotions and
              other offers via email, social media and other channels.
            </p>
            <Link to="/signstepthree" className="SignUpPlanTwo">
              sign up and be part of the family!
            </Link>
          </div>

          <p className="PlanTwoSignIn">
            Already a member? <Link to="/sigin"> Sign In</Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default index;
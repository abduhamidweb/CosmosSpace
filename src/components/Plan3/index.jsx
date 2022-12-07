import React from "react";
import { Link } from "react-router-dom";
import "./plan3.css";
import Logo from "../../assets/images/Logo.png";
import Input from "../Input/Input"
const index = ({ inputType, inputPlaceholder }) => {
  return (
    <>
      <section>
        <div className="container">
          <div className="logo d-flex justify-content-center mt-5 mb-5">
            <Link to="/">
              <img src={Logo} alt="img" />
            </Link>
          </div>
          <h2 className="text-center text-white plan3-title">
            Be part of Infinity & Beyond family
          </h2>
          <p className="text-center plan3-text">
            Get access to our wonderful content library.
          </p>
          <div className="PlanThreeLinks">
            <a href="#">Step 1</a>
            <a href="#">Step 2</a>
            <a href="#">Step 3</a>
          </div>
          <h2 className="plan3-title">Add Credit Card Information</h2>
          <p className="plan3-deck">
            Add your payment method and access our content immediately!
          </p>
          <div className="info d-flex justify-content-between">
            <h2 className="text-white">6 Months</h2>
            <span className="d-flex">
              <h2 className="text-white">$18,90</h2>
              <p className="text-white">/month</p>
              <h2 className="text-white">Hi</h2>
            </span>
          </div>

          <form action="#" className="mx-auto">
            <p>Card Information:</p>
            <div className="row">
              <div className="col-12">
                <Input
                  inputType="text"
                  inputPlaceholder="Name of card holder"
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <Input inputType="number" inputPlaceholder="Card Number" />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-6 col-md-6 col-sm-12 input-flex">
                <Input inputType="text" inputPlaceholder="Expiration date" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 input-flex">
                <Input inputType="text" inputPlaceholder="CVV" />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <Input inputType="text" inputPlaceholder="CPF" />
              </div>
            </div>
            <div className="row mt-4">
              <div
                className="col-12 d-flex justify-content-between "
                id="checkboxWrapper"
              >
                <label htmlFor="checkbox">Billing type:</label>
                <input type="checkbox" id="checkbox1" />
                <label htmlFor="checkbox1">Credit Card</label>
                <input type="checkbox" id="checkbox2" />
                <label htmlFor="checkbox2">Debit Card</label>
              </div>
            </div>
            <p className="pt-5">
              Do you have a promo code?? <a href="#"> Click Here</a>
            </p>
          </form>
          <div className="planTwo-Deckription2">
            <p>
              By clicking Create Account, you confirm that you are at least 18
              years old, that you agree to the Terms of Use and that you have
              read our Privacy Policy. You also confirm that you agree to
              receive advertising, promotions and other offers via email, social
              media and other channels.
            </p>
            <a href="#" className="SignUpPlanTwo2">
              sign up and be part of the family!
            </a>
          </div>
          <p className="text-center pt-5">
            Already a member? <a href="#"> Sign In</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default index;

import React from 'react';
import "./style.css"
import Input from "../Input/Input"
import Logo from "../../assets/images/Logo.png"
 
const index = () => {
    return (
      <>
        <section>
          <div className="container">
            <div className="singTexts">
              <div className="logo mx-auto d-flex justify-content-center pt-5 pb-5">
                <img src={Logo} alt="Logo" />
              </div>
              <h2 className="text-center pt-5 text-white sign-title" >SIGN IN</h2>
              <p className=" text-white sign-text">
                Hello, where have you been? We are so happy to have you back.
              </p>
              <form action="#" className='d-flex justify-content-center mt-5'>
                <div className="form">
                  <div className="inputOne">
                    <Input inputType="email" inputPlaceholder="E-mail" />
                  </div>
                  <div className="inputTwo d-flex mt-3 mb-2">
                    <Input inputType="password" inputPlaceholder="Password" />
                    <i className="bi bi-eye"></i>
                  </div>
                  <a href="#" className='forgot'>Forgot password?</a>
                </div>
              </form>

              <a href="#" className="SignWatching">
                sign in and start watching
              </a>

              <form action="#" className='d-flex form2'>
                <input type="checkbox" id="chechbox" />
                <label htmlFor="chechbox">Remember me</label>
              </form>
              <p className='botton-link'>
                New to Infinity & Beyond? <a href="#">Sign Up Here!</a>
              </p>
            </div>
          </div>
        </section>
      </>
    );
};

export default index;
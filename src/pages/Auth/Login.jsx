import React, { useState, useEffect, useRef } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const hendelSubmit = (e) => {
    const LocalForm = JSON.parse(localStorage.getItem("userData"));
    const [data = {}] = LocalForm;
    
    e.preventDefault();
    if (userEmail == data.userEmail && userPass == data.userPass) {
      navigate("/home");
    } else {
      toast.error('Login or password error', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false, 
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  };
  return (
    <>
      <section className="LoginSection">
        <div className="container">
          <div className="LoginWrapper">
            <form onSubmit={hendelSubmit} className="LoginForm">
              <label htmlFor="userEmail" className="loginEmailLabel">
                Email
              </label>
              <input
                className="loginEmailInput"
                type="email"
                id="useEmail"
                name="useEmail"
                placeholder="Email"
                value={userEmail}
                autoComplete="off"
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
                required
              />
              <label htmlFor="userPass" className="loginPasswordLabel">
                Password
              </label>
              <input
                className="loginPasswordInput"
                type="password"
                id="userPass"
                name="usePass"
                placeholder="Pasword"
                value={userPass}
                autoComplete="off"
                onChange={(e) => {
                  setUserPass(e.target.value);
                }}
                required
              />
              <button type="submit" className="LoginSubmitBtn">
                submit
              </button>
            </form>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </section>
    </>
  );
};

export default Login;

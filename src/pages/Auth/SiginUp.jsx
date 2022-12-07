import React, { useState, useRef, useEffect  } from "react";
import "./signUp.css"
import { json ,useNavigate} from "react-router-dom";

const SiginUp = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
    const [userPass, setUserPass] = useState("");
    const navigate =useNavigate()
  const AllInfo = [];
  const hendelSubmit = (e) => {
      e.preventDefault();
    navigate('/home')
    let localInfo = {
      userName: userName,
      userEmail: userEmail,
      userPass: userPass,
    };
    AllInfo.push(localInfo);
    localStorage.setItem("userData", JSON.stringify(AllInfo));
  };
  return (
    <>
      <section className="singUpSection">
        <div className="container">
          <div className="signInputsWrapper">
            <form onSubmit={hendelSubmit} className="signUpForm">
              <label htmlFor="userName" className="SignNameLabel">
                userName
              </label>
              <input
                className="signInputUserName"
                type="text"
                id="userName"
                name="userName"
                value={userName}
                placeholder="username"
                autoComplete="off"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                required
              />

              <label htmlFor="userEmail" className="SignEmailLabel">
                Email
              </label>
              <input
                className="signInputEmail"
                type="email"
                id="userEmail"
                name="userEmail"
                placeholder="Email"
                value={userEmail}
                autoComplete="off"
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
                required
              />

              <label htmlFor="userPass" className="SignPasswordlabel">
                Password
              </label>
              <input
                className="SignInputPassword"
                type="password"
                id="userPass"
                name="userPass"
                placeholder="Pasword"
                value={userPass}
                autoComplete="off"
                onChange={(e) => {
                  setUserPass(e.target.value);
                }}
                required
              />

              <div className="signButtons">
                <button type="submit" className="signSubmitBtn ">submit</button>
                <button className="signCloseBtn " onClick={()=>navigate(-1)} type="text">Back</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SiginUp;

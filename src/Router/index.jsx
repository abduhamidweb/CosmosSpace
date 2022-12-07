import React, {useState} from "react";
import Login from "../pages/Auth/Login"
import { Routes, Route } from "react-router-dom";
import SiginUp from "../pages/Auth/SiginUp.jsx";
import InfoPage from "../pages/InfoPage/InfoPage.jsx";
import SignStep2 from "../pages/SignStep2";
import SignStep3 from "../pages/SignStep3";
import Home from "../pages/Home/Home"
import ShowPage from "../pages/ShowCards"

const index = () => {
  return (
    // for pages routes
    <>
      <main>
        <section>
          <Routes>
            <Route path="/" element={<InfoPage />} />
            <Route path="/infopage" element={<InfoPage />} />
            <Route path="/signsteptwo" element={<SignStep2 />} />
            <Route path="/signstepthree" element={<SignStep3 />} />
            <Route path="/sigin" element={<SiginUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/showpage" element={<ShowPage />} />
          </Routes>
        </section>
      </main>
    </>
  );
};

export default index;

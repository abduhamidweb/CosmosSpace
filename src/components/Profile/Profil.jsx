import React,{useRef} from "react";
import { Link } from "react-router-dom";
import "./style.scss";
const Profil = () => {
    const toogleMenu = useRef()
  const borderAddMenu = useRef()
  const useData = JSON.parse(localStorage.getItem("userData"));
  let [arr]=useData
  return (
  
    <>
      <div className="profileSection" ref={borderAddMenu}>
        <ul class="navbar-nav ">
          <li
            class="nav-item dropdown d-flex"
            onClick={() => {
              toogleMenu.current.classList.toggle("toogleMenu");
              borderAddMenu.current.classList.toggle("borderAddMenu");
            }}
          >
            <a class="nav-link dropdown-toggle ">
              <span className="welcomUSER">Welcome,</span>
              <span className="USER">{arr.userName}</span>
            </a>
            <span className="UserNameFirst">{ arr.userName.substring(0,1)}</span>
          </li>
        </ul>
        <div className="childElement" ref={toogleMenu}>
          <hr />
          <ul>
            <li>
              <a href="#">
                <span>My contacts </span>
                <i class="bi bi-play-btn"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Subtitles</span>
                <i class="bi bi-translate"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Settings</span>
                <i class="bi bi-gear"></i>
              </a>
            </li>
            <hr />
            <li>
              <a href="#">
                <span>My account </span>
                <i class="bi bi-person-circle"></i>
              </a>
            </li>
            <li>
              <Link to={"/"} onClick={() => {
                localStorage.clear()
              }}>
                <span>Log out </span>
                <i class="bi bi-arrow-right-circle-fill"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Profil;

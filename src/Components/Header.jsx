import React, { useState, useEffect } from "react";
import logo from "../assets/icons/logo.svg";
import bar from "../assets/icons/bar-icon.svg";
import closeBar from "../assets/icons/bar-x-icon.svg";
import "../pages/Home/Home.css";
import NavMenu from "../Components/Modals/Navbar";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <header>
        <div className="row">
          <a href="#top" className="logo">
            <img src={logo} alt="Logo" />
          </a>

          <div className="header-text">
            <p>
              Официальный дилер немецкой <br /> компании <b>WashTec</b> в
              Беларуси
            </p>
            <p>
              Официальный представитель российских компаний: <br />
              <b>“Мой-ка! DS-Business”, “Cleanol”, “Агроснабтехсервис”</b>
            </p>
          </div>

          <div className="header-links">
            <a href="tel:+475293658070" className="tel">
              +375 29 365 80 70
            </a>

            <div className="social">
              <a href="#top">
                <i className="ri-whatsapp-line"></i>
              </a>
              <a href="#top">
                <i className="ri-phone-line"></i>
              </a>
              <a href="#top">
                <i className="ri-telegram-2-line"></i>
              </a>
              <a href="#top">
                <i className="ri-chat-3-line"></i>
              </a>
            </div>

            <a href="#top" className="email">
              sales@aqts.by
            </a>
          </div>

          <button
            className="menu-bar"
            onClick={toggleNav}
            style={{ position: "relative", zIndex: "1000" }}
          >
            <img
              src={isNavOpen ? closeBar : bar}
              alt="bar icon"
              className={isNavOpen ? "close-icon" : "bar-icon"}
            />
          </button>
        </div>
      </header>
      <NavMenu isOpen={isNavOpen} />
    </div>
  );
};

export default Header;

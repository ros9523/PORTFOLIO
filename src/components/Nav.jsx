import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import image from "../images/image.png";
import "./styles/nav.css";

const Nav = () => {
  const [nav, setNav] = useState("hideNav");

  const [btn, setbtn] = useState("portfolio-container__show");

  const handleNav = () => {
    if (nav == "hideNav") {
      setNav("showNav") && setbtn("hideBtn");
    } else {
      setNav("hideNav") && setbtn("portfolio-container__show");
    }
  };

  return (
    <div className="portfolio-container">
      <div className={`${btn} portfolio-container__title-arrow` }onClick={handleNav}>
      <i
          className= 'bx bx-left-arrow-circle portfolio-container__show'></i>
      <span className="portfolio-container__show">Portfolio</span>
      </div>
      <i className='bx bx-menu menu' onClick={handleNav}></i>
      <div className={`${nav}`}>
        <img
          className="portafolio-container__picture"
          src={image}
          alt="My picture"
        />
        <hr className="portfolio-container__line" />
        <ul className="portfolio-container__nav">
          <li className="portfolio-container__options">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <i className="bx bx-home portfolio-container__icon"></i>
              <span className="portfolio-container__icon">Home</span>
            </NavLink>
          </li>

          <li className="portfolio-container__options">
            <NavLink
              to="/about_me"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <i className="bx bx-spreadsheet portfolio-container__icon "></i>
              <span className="portfolio-container__icon">About me</span>
            </NavLink>
          </li>

          <li className="portfolio-container__options">
            <NavLink
              to="/portfolio"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <i className="bx bx-cabinet portfolio-container__icon"></i>
              <span className="portfolio-container__icon">Porfolio</span>
            </NavLink>
          </li>

          <li className="portfolio-container__options">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <i className="bx bx-id-card portfolio-container__icon"></i>
              <span className="portfolio-container__icon">Contact</span>
              
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

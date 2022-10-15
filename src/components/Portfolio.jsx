import React from "react";
import BG2 from "./bg/BG2";
import PokeApi from "../images/PokeApi.png";
import WeatherApi from "../images/WeatherApi.png";
import RickyAndMortyApi from "../images/RickyAndMortyApi.png";
import "./styles/portfolio.css";
import { Link, NavLink } from "react-router-dom";

const Portfolio = () => {
  return (
    <>
      <BG2/>
      <NavLink className='nav_home'  to='/'>
      <i className="bx bx-home portfolio-container__icon"></i>
    </NavLink>
      <div className="portfolio">
        <h1 className="portfolio__title">PORTFOLIO</h1>
        <div className="portfolio__text">See below my projects</div>

        <div className="portfolio__imagescontainer">
          
          <div className="portfolio__imageAndText">
          <div className="portfolio__imagecontainer "> <a target='_blank' href="https://kaleidoscopic-kitten-5bcc70.netlify.app/">
            <img className="portfolio__image" src={PokeApi} alt="PokeApi"/> </a>
            <div className="portfolio__imagetext">
              <p className="portfolio__texts">POKEAPP</p>
            </div>
          </div>
          <div className="portfolio__textcontainer">
            <p>On this project, I use: React Router Dom to enable the dynamic routing,the nested routes and protect routes,  useEffect, useStates and API consumption</p>
          </div>
          </div> 
         
          <div className="portfolio__imageAndText">
          <div className='portfolio__imagecontainer'> <a target='_blank' href="https://comforting-shortbread-915132.netlify.app/">
            <img
              className="portfolio__image portfolio__image--weather"
              src={WeatherApi}
              alt="WeatherApp"
            /></a>
           
            <div className="portfolio__imagetext">
              <p className="portfolio__texts"></p>
            </div>
          </div>
          <div className="portfolio__textcontainer">
            <p>On weather API, I focus on the usage of useEffect, useState, componenets and API consumption</p>
          </div>
          </div>
        

          <div className="portfolio__imageAndText">
          <div className="portfolio__imagecontainer">
          <a target='_blank' href='https://friendly-pavlova-cd4d98.netlify.app/'> <img
              className="portfolio__image"
              src={RickyAndMortyApi}
              alt="PokeApi"
            /></a>
            <div className="portfolio__imagetext">
              <p className="portfolio__texts">RICKY AND MORTY APP</p>
            </div>
          </div> 
          <div className="portfolio__textcontainer">
            <p>On RICKY and Morty APP, I focus on API Consumption, hooks usage and components</p>
          </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default Portfolio;

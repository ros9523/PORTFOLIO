import React from "react";
import { NavLink } from "react-router-dom";
import BG2 from "./bg/BG2";
import "./styles/aboutme.css";
import Mypicture from "../images/Mypicture.jpg";

const About_me = () => {
  return (
    <>
      <BG2 />
      <div className="about_me">

        <div className="about_me__picAndText">
          <NavLink className="nav_home" to="/">
          <i className="bx bx-home portfolio-container__icon"></i>
          </NavLink>
          <h1 className="about_me__title">ABOUT ME</h1>
          <div className="about_me__photostextsicons">
          <img className="about_me__myphoto" src={Mypicture} alt="My photo" />
          <div className="aboutme_texts">
            <p className="about_me__text">
              Hi, my name is Rosa and I am really in love with the web
              devolopment. Every day I get to know more techologies and the
              things we can do with them to implements solutions for humans
              needs makes me want to learn them all. Currently I have experience
              with JavaScript, HTML, CSS, library; React and the runtime
              enviroments Node.js, through projects done in Academlo.{" "}
            </p>
            <br />

            <p className="about_me__text">
              Regarding my interpersonal skills, I am a very Passionate and
              always looking for improvements. I never take things for granted
              and I am very receptive to constructive feedback since they make
              us get stronger because the make us realize the things we can
              improve to get better results. As{" "}
            </p>
          </div>
          </div>
        </div>



         
          <div className="about_me__techs">
            <h2 className="about_me__titletechs">Technologies</h2>
            <div className="aboutme__techs">

              <div>
                <i className=" button bx bxl-react"></i>
                {/* <span>REACT JS:Redux, Redux-Thunk</span> */}
              </div>

              <div>
                <i className="button bx bxl-javascript"></i>
              </div>

              <div>
                <i className=" button bx bxl-css3"></i>
              </div>

              <div>
                <i class='button bx bxl-redux'></i>
              </div>
            
            </div>
          </div>


      </div>
    </>
  );
};

export default About_me;

import React from 'react'
import image from '../images/Image.png'
import Typewriter from "typewriter-effect";
import './styles/home.css'
import Nav from './Nav';
import BG2 from './bg/BG2';

const Home = () => {
  return (
    <>
     <BG2/>
      <Nav/>
      <div className='typeWriter-container'>
      <img className="typeWriter-container__image" src={image} alt="my picture"/>
      <div>
      <Typewriter 
      onInit={(typewriter)=>{
      typewriter.typeString("Hello and Welcome")
      .pauseFor(1000)
      .deleteAll()
      .typeString("This is my Portfolio")
      .start();
      }}
    />
    </div>
    </div>
    </>
  )
}

export default Home
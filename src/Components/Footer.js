import React from "react";
import ProfilePic from "./Images/ProfilePic.jpg";
import "./CSS/Skills.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='about-me'>
        <div className='about'>
          <h2>About Me</h2>
          <div className='underline-2'></div>
        </div>
      </div>
      <div className='footer-container container'>
        <div className='visiting-card'>
          <div className='profile-img'>
            <img className='profile-pic ' src={ProfilePic} alt='Tu..' />
          </div>
          <div className='profile-details'>
            <div className='details'>
              <h1>I'm Tanish Vemu</h1>
              <div className='underline-2 mtb-20' />
              <p className='lead'>
                I am currently in SRM Institute of Science and Technology, I am
                currently pursuing my b.tech in computer science and
                engineering. I always had an interest in design in general and
                through which I came across web development and I started
                learning it along with Ui/Ux design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

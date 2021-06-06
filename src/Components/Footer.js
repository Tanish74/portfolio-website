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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus soluta aperiam magnam est quas iste nam, cumque
                pariatur ducimus officia nesciunt omnis quod laudantium fugiat
                impedit earum quibusdam amet ratione?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

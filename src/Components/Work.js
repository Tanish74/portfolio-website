import React from "react";
import MediBond from "./Images/1.jpeg";
import "./CSS/Work.css";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className='work'>
      <div className='project container'>
        <ScrollAnimation
          animateIn='animate__fadeInUp'
          animateOnce={true}
          className='selectedWorksBG'
        >
          <h1 className='bg'>Selected</h1>
          <h1 className='fg'>Works</h1>
        </ScrollAnimation>
        <div className='project-1'>
          <ScrollAnimation
            animateIn='animate__fadeInRight'
            delay={500}
            animateOnce={true}
            className='carousel C-left'
          >
            <img src={MediBond} alt='MediBond...' />
            <div className='project-name'>
              <h1>MediBond</h1>
              <div className='underline-2' />
              <h4>
                Web Application to search nearby pharmacies and help local
                pharmacies
              </h4>
            </div>
          </ScrollAnimation>
          <div className='underline-1 mtb-20' />
          <div className='info'>
            <div className='icon-container react'>
              <i class='fab fa-react fa-3x tools'></i>
            </div>
            <div className='icon-container html'>
              <i class='fab fa-html5 fa-3x tools'></i>
            </div>
            <div className='icon-container css'>
              <i class='fab fa-css3-alt fa-3x tools'></i>
            </div>
          </div>
        </div>
        <div className='project-2'>
          <ScrollAnimation
            animateIn='animate__fadeInLeft'
            animateOnce={true}
            className='carousel C-right'
          >
            <img src={MediBond} alt='MediBond...' />
            <div className='project-name'>
              <h1>Nivaas</h1>
              <div className='underline-2' />
              <h4>Mobile application for society and housing management</h4>
            </div>
          </ScrollAnimation>
          <div className='underline-1 mtb-20' />
          <div className='info'>
            <div className='icon-container react'>
              <i class='fab fa-react fa-3x tools'></i>
            </div>
            <div className='icon-container html'>
              <i class='fab fa-html5 fa-3x tools'></i>
            </div>
            <div className='icon-container css'>
              <i class='fab fa-css3-alt fa-3x tools'></i>
            </div>
          </div>
        </div>
      </div>
      <div className='more-projects'>
        <Link to='/projects'> &gt; More Projects &lt; </Link>
      </div>
    </div>
  );
};

export default Work;

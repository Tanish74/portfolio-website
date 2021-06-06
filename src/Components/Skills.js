import React from "react";
import "./CSS/Skills.css";
import ScrollAnimation from "react-animate-on-scroll";

const Skills = () => {
  return (
    <div className='skills'>
      <ScrollAnimation
        animateIn='animate__fadeInUp'
        animateOnce={true}
        className='skillsBG'
      >
        <h1 className='bg'>Skills</h1>
      </ScrollAnimation>
      <div className='skills-container container'>
        <div className='skill-bar mtb-10 skill-left'>
          <h1 className='skill-title'>HTML</h1>
          <div className='progress-bar bar-left' style={{ width: "60%" }} />
        </div>
        <div className='skill-bar mtb-10 skill-right'>
          <h1 className='skill-title'>CSS</h1>
          <div className='progress-bar bar-right' style={{ width: "50%" }} />
        </div>
        <div className='skill-bar mtb-10 skill-left'>
          <h1 className='skill-title'>Abode XD</h1>
          <div className='progress-bar bar-left' style={{ width: "95%" }} />
        </div>
        <div className='skill-bar mtb-10 skill-right'>
          <h1 className='skill-title'>ReactJS</h1>
          <div className='progress-bar bar-right' style={{ width: "70%" }} />
        </div>
        <div className='skill-bar mtb-10 skill-left'>
          <h1 className='skill-title'>JavaScript</h1>
          <div className='progress-bar bar-left' style={{ width: "65%" }} />
        </div>
        <div className='skill-bar more-skills'>
          <h1 className='skill-title'>Adobe Photoshop</h1>
          <h1 className='skill-title'>C++</h1>
          <h1 className='skill-title'>Python</h1>
          <h1 className='skill-title'>MySQL</h1>
        </div>
      </div>
    </div>
  );
};

export default Skills;

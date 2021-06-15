import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "./CSS/Landing.css";

const Landing = () => {
  return (
    <div className='landing'>
      <div className='landing-grid container'>
        <div className='landing-content'>
          <div className='landing-title'>Namaste!</div>
          <div className='underline'></div>
          <ScrollAnimation
            animateIn='animate__fadeInUp'
            animateOnce={true}
            delay={1800}
            className='lead'
          >
            I'm Tanish Vemu a 20-year-old Computer Science student who enjoys
            Designing and Developing websites. Welcome to my portfolio, scroll
            down to see my work and know more about me.
          </ScrollAnimation>
          {/* <ScrollAnimation
            animateIn='animate__fadeIn'
            animateOnce={true}
            className='lead'
          >
            The Quick, Brown Fox Jumps Over A Lazy Dog.
          </ScrollAnimation> */}
        </div>
      </div>
    </div>
  );
};

export default Landing;

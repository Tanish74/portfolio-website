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
            The Quick, Brown Fox Jumps Over A Lazy Dog. Djs Flock By When MTV Ax
            Quiz Prog. Junk MTV Quiz Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Totam, ut.
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

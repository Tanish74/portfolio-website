import React, { useLayoutEffect } from "react";
import "../CSS/Projects.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import QuickPharm from "../Images/QuickPharm.png";
import Nivaas from "../Images/Nivaas.png";
import Squad from "../Images/Squad.png";
import Shortly from "../Images/Shortly.png";

const Projects = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className='projects'>
      <ScrollAnimation
        animateIn='animate__fadeInRight'
        animateOnce={true}
        className='background'
      >
        <h1 className='bg'>List of projects</h1>
        <h1 className='fg'>I have worked on</h1>
      </ScrollAnimation>
      <section className='works'>
        <div className='container project-container'>
          <div className='project-details'>
            <div className='project-image'>
              <ScrollAnimation
                animateIn='animate__fadeInUp'
                animateOnce={true}
                className='overlay'
              >
                <img src={QuickPharm} alt='Medibond...' />
              </ScrollAnimation>
            </div>
          </div>
          <div className='project-desc'>
            <div className='description'>
              <p className='lead text-dark'>
                Web Application to search nearby pharmacies and help local
                pharmacies
              </p>
            </div>
            <div>
              <div className='project-tools'>
                <i class='fab fa-react fa-3x m-2'></i>
                <i class='fab fa-html5 fa-3x m-2'></i>
                <i class='fab fa-css3-alt fa-3x m-2'></i>
              </div>
              <div className='project-links'>
                <a href='/'>
                  <i class='fab fa-github fa-2x m-2' />
                </a>
                <a href='/'>
                  <i class='fas fa-link fa-2x m-2' />
                </a>
              </div>
            </div>
          </div>
          <ScrollAnimation
            animateIn='animate__fadeInUp'
            animateOnce={true}
            delay={500}
            className='project-title'
          >
            QuickPharm
          </ScrollAnimation>
        </div>
      </section>
      <section className='works'>
        <div className='container project-container'>
          <div className='project-details'>
            <div className='project-image'>
              <ScrollAnimation
                animateIn='animate__fadeInUp'
                animateOnce={true}
                className='overlay'
              >
                <img src={Nivaas} alt='Medibond...' />
              </ScrollAnimation>
            </div>
          </div>
          <div className='project-desc'>
            <div className='description'>
              <p className='lead text-dark'>
                UI/UX of a housing management application
              </p>
            </div>
            <div>
              <div className='project-tools'>
                <i class='fab fa-react fa-3x m-2'></i>
                <i class='fab fa-html5 fa-3x m-2'></i>
              </div>
              <div className='project-links'>
                <a href='/'>
                  <i class='fab fa-github fa-2x m-2' />
                </a>
                <a href='/'>
                  <i class='fas fa-link fa-2x m-2' />
                </a>
              </div>
            </div>
          </div>
          <ScrollAnimation
            animateIn='animate__fadeInUp'
            animateOnce={true}
            delay={500}
            className='project-title'
          >
            Nivaas App
          </ScrollAnimation>
        </div>
      </section>
      <section className='works'>
        <div className='container project-container'>
          <div className='project-details'>
            <div className='project-image'>
              <ScrollAnimation
                animateIn='animate__fadeInUp'
                animateOnce={true}
                className='overlay'
              >
                <img src={Squad} alt='Medibond...' />
              </ScrollAnimation>
            </div>
          </div>
          <div className='project-desc'>
            <div className='description'>
              <p className='lead text-dark'>
                A Team Building and Management App for coaches
              </p>
            </div>
            <div>
              <div className='project-tools'>
                <i class='fab fa-react fa-3x m-2'></i>
                <i class='fab fa-html5 fa-3x m-2'></i>
                <i class='fab fa-css3-alt fa-3x m-2'></i>
              </div>
              <div className='project-links'>
                <a href='/'>
                  <i class='fab fa-github fa-2x m-2' />
                </a>
                <a href='/'>
                  <i class='fas fa-link fa-2x m-2' />
                </a>
              </div>
            </div>
          </div>
          <ScrollAnimation
            animateIn='animate__fadeInUp'
            animateOnce={true}
            delay={500}
            className='project-title'
          >
            Squad
          </ScrollAnimation>
        </div>
      </section>
      <section className='works'>
        <div className='container project-container'>
          <div className='project-details'>
            <div className='project-image'>
              <ScrollAnimation
                animateIn='animate__fadeInUp'
                animateOnce={true}
                className='overlay'
              >
                <img src={Shortly} alt='Medibond...' />
              </ScrollAnimation>
            </div>
          </div>
          <div className='project-desc'>
            <div className='description'>
              <p className='lead text-dark'>
                A Simple Link shortener app built on shrtcode.api
              </p>
            </div>
            <div>
              <div className='project-tools'>
                <i class='fab fa-react fa-3x m-2'></i>
                <i class='fab fa-html5 fa-3x m-2'></i>
                <i class='fab fa-css3-alt fa-3x m-2'></i>
              </div>
              <div className='project-links'>
                <a href='/'>
                  <i class='fab fa-github fa-2x m-2' />
                </a>
                <a href='/'>
                  <i class='fas fa-link fa-2x m-2' />
                </a>
              </div>
            </div>
          </div>
          <ScrollAnimation
            animateIn='animate__fadeInUp'
            animateOnce={true}
            delay={500}
            className='project-title'
          >
            Shortly
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Projects;

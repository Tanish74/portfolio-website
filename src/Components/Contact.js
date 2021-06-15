import { React, useLayoutEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Contact = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className='contact'>
      <div className='contact-bg container'>
        <div className='page-title'>
          <h1 className='title-text'>Contact</h1>
          <h1 className='title-text text-white '>Me</h1>
        </div>
        <ScrollAnimation
          animateIn='animate__fadeInUp'
          animateOnce={true}
          className='contact-form'
        >
          <form className='form'>
            <div className='m-3'>
              <input
                placeholder='Type your name'
                type='text'
                className='form-control input-text'
              />
            </div>
            <div className='m-3'>
              <input
                placeholder='Type your e-mail'
                type='email'
                className='form-control input-text'
              />
            </div>
            <div className='m-3'>
              <textarea
                className='form-control input-text'
                placeholder='Leave a message here'
                id='floatingTextarea2'
                style={{ height: "200px" }}
              ></textarea>
            </div>
            <div className='m-3'>
              <div className='d-grid gap-2 '>
                <button className='btn btn-dark' type='button'>
                  Send
                </button>
              </div>
            </div>
          </form>
        </ScrollAnimation>
      </div>
      <div className='design' />
    </div>
  );
};

export default Contact;

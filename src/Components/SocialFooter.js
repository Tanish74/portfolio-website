import React from "react";
import "./CSS/Skills.css";

const SocialFooter = () => {
  return (
    <footer className='social-footer'>
      <div className='social-icons container'>
        <div className='social'>
          <a
            href='https://www.linkedin.com/in/tanish-vemu-611059184/'
            class='fab fa-linkedin-in'
          >
            {" "}
          </a>
          <a href='mailto: www.vtani74@gmail.com' class='fas fa-envelope'>
            {" "}
          </a>
          <a href='https://wa.me/917898370358' class='fab fa-whatsapp'>
            {" "}
          </a>
          <a href='https://github.com/tanish74' class='fab fa-github '>
            {" "}
          </a>
        </div>
      </div>
      <div className='trademark'>
        <p>&copy; Tanish Vemu 🔥</p>
      </div>
    </footer>
  );
};

export default SocialFooter;

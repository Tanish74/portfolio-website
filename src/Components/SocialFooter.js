import React from "react";
import "./CSS/Skills.css";

const SocialFooter = () => {
  return (
    <footer className='social-footer'>
      <div className='social-icons container'>
        <div className='social'>
          <i class='fab fa-linkedin-in' />
          <i class='fas fa-envelope' />
          <i class='fab fa-whatsapp' />
          <i class='fab fa-github' />
        </div>
      </div>
      <div className='trademark'>
        <p>&copy; Tanish Vemu 🔥</p>
      </div>
    </footer>
  );
};

export default SocialFooter;

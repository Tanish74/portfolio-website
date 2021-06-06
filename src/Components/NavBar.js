import React, { useState } from "react";
import GlitchText from "react-glitch-effect/core/GlitchText";
import logo from "./Images/Fin.png";

const NavBar = () => {
  const [isDisabled] = useState(false);

  return (
    <nav id='navbar'>
      <div className='navbar container'>
        <div className='logo'>
          <a href='/'>
            <img src={logo} alt='logo...' />
          </a>
        </div>
        <div className='text'>
          <GlitchText
            color1='#9dacff'
            color2='#c359ad'
            duration={5000}
            component='h2'
            disabled={isDisabled}
            className='my-name text-white '
          >
            Tanish
          </GlitchText>
          <GlitchText
            color1='#9dacff'
            color2='#c359ad'
            duration={5000}
            component='h2'
            disabled={isDisabled}
            className='my-name-1 text-white '
          >
            Vemu
          </GlitchText>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

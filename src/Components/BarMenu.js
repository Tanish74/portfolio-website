import { React, useState } from "react";
import { Link } from "react-router-dom";

const BarMenu = () => {
  const [inHover, setHover] = useState(false);
  const [inHover1, setHover1] = useState(false);
  const [inHover2, setHover2] = useState(false);
  return (
    <nav className='bar-menu'>
      <div
        className='bar-1'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {inHover && (
          <Link to='/projects' className='nav-links'>
            My Projects
          </Link>
        )}
      </div>
      <div
        className='bar-2'
        onMouseEnter={() => setHover1(true)}
        onMouseLeave={() => setHover1(false)}
      >
        {inHover1 && (
          <Link to='/contact' className='nav-links'>
            Contact Me
          </Link>
        )}
      </div>
      <div
        className='bar-3'
        onMouseEnter={() => setHover2(true)}
        onMouseLeave={() => setHover2(false)}
      >
        {inHover2 && (
          <Link to='/coming-soon' className='nav-links'>
            Coming Soon...
          </Link>
        )}
      </div>
    </nav>
  );
};

export default BarMenu;

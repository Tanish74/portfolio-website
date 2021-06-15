import React from "react";
import Working from "../Images/working.gif";

const ComingSoon = () => {
  return (
    <div className='soon'>
      <img src={Working} alt='Wait...' />
      <h3>
        Something <p>new</p> is on it's way!
      </h3>
    </div>
  );
};

export default ComingSoon;

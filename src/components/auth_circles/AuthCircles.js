import React from "react";
import right_circle from "../../assets/images/right-circle.svg";
import left_circle from "../../assets/images/left-circle.svg";
const AuthCircles = () => {
  return (
    <>
      <div>
        <img
          src={left_circle}
          alt=""
          className="circle-container2 circle-left"
        />
      </div>
      <div>
        <img
          src={right_circle}
          alt=""
          className="circle-container1 circle-right"
        />
      </div>
    </>
  );
};

export default AuthCircles;

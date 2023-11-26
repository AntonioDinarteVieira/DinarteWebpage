/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Dropdown = ({
  className,
  divClassName,
  text = "Type a question",
  frameClassName,
  divClassNameOverride,
  frameClassNameOverride,
  frame = "/img/frame-1.svg",
}) => {
  return (
    <div className={`dropdown ${className}`}>
      <div className={`type-a-question-5 ${divClassName}`}>{text}</div>
      <div className="frame-4">
        <div className={`frame-5 ${frameClassName}`}>
          <div className={`text-wrapper-7 ${divClassNameOverride}`}>Select Option</div>
        </div>
        <img className={`img ${frameClassNameOverride}`} alt="Frame" src={frame} />
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  text: PropTypes.string,
  frame: PropTypes.string,
};

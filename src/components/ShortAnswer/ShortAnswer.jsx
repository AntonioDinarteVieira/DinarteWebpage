/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ShortAnswer = ({
  className,
  divClassName,
  text = "Type a question",
  frameClassName,
  divClassNameOverride,
  divClassName1,
}) => {
  return (
    <div className={`short-answer ${className}`}>
      <div className={`type-a-question ${divClassName}`}>{text}</div>
      <div className={`frame ${frameClassName}`}>
        <div className={`text-wrapper ${divClassNameOverride}`}>Type here...</div>
      </div>
      <div className={`div ${divClassName1}`}>Error</div>
    </div>
  );
};

ShortAnswer.propTypes = {
  text: PropTypes.string,
};

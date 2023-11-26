/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Number = ({
  className,
  divClassName,
  text = "Type a question",
  frameClassName,
  divClassNameOverride,
  divClassName1,
}) => {
  return (
    <div className={`number ${className}`}>
      <div className={`type-a-question-3 ${divClassName}`}>{text}</div>
      <div className={`frame-2 ${frameClassName}`}>
        <div className={`text-wrapper-4 ${divClassNameOverride}`}>e.g.,26</div>
      </div>
      <div className={`text-wrapper-5 ${divClassName1}`}>Error</div>
    </div>
  );
};

Number.propTypes = {
  text: PropTypes.string,
};

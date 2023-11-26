/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Paragraph = ({
  className,
  divClassName,
  text = "Type a question",
  frameClassName,
  divClassNameOverride,
}) => {
  return (
    <div className={`paragraph ${className}`}>
      <div className={`type-a-question-4 ${divClassName}`}>{text}</div>
      <div className={`frame-3 ${frameClassName}`}>
        <div className={`text-wrapper-6 ${divClassNameOverride}`}>Type here...</div>
      </div>
    </div>
  );
};

Paragraph.propTypes = {
  text: PropTypes.string,
};

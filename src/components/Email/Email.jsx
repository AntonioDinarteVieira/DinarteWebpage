/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Email = ({
  className,
  divClassName,
  text = "Type a question",
  frameClassName,
  divClassNameOverride,
  divClassName1,
}) => {
  return (
    <div className={`email ${className}`}>
      <div className={`type-a-question-2 ${divClassName}`}>{text}</div>
      <div className={`div-wrapper ${frameClassName}`}>
        <div className={`text-wrapper-2 ${divClassNameOverride}`}>example@email.com</div>
      </div>
      <div className={`text-wrapper-3 ${divClassName1}`}>Error</div>
    </div>
  );
};

Email.propTypes = {
  text: PropTypes.string,
};

import React, { useContext } from "react";

import RadioGroupContext from "./RadioContext";

function RadioButton(props) {
  const context = useContext(RadioGroupContext);
  return (
    <label>
      <input
        {...props}
        {...context}
        className="custom-control-input"
        type="radio"
        
      />
      {props.label}
    </label>
  );
}

export default RadioButton;

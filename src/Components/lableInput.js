import React from "react";
import "./Filter.scss";

function lableInput({ name, id, type, displayname, onChange }) {
  // console.log("input", displayname);
  return (
    <label htmlFor={name} className="displayLable">
      <span className="spanWidth"> {displayname}</span>
      <input
        className="displayInput"
        type={type}
        id={id}
        name={name}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

export default React.memo(lableInput);

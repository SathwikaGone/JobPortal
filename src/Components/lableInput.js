import React from "react";
import "./Filter.scss";

export default function lableInput({ name, id, type, displayname, onChange }) {
  return (
    <label for={name} className="displayBlock">
      {displayname}
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

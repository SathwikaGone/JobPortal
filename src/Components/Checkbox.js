import React from "react";
import "./Filter.scss";

export default function Checkbox({ name, id, displayname, onChange }) {
  return (
    <label htmlFor={name} className="displayBlock">
      <input
        className="displayInput"
        type="checkbox"
        id={id}
        name={name}
        onChange={onChange}
      />
      {displayname}
    </label>
  );
}

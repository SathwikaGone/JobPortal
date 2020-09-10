import React from "react";

export default function textArea({ name, id, type, displayname, onChange }) {
  return (
    <label for={name} className="displayBlock">
      {displayname}
      <textArea
        className="displayInput"
        type={type}
        id={id}
        name={name}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

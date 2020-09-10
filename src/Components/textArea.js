import React from "react";

function TextArea({ name, id, type, displayname, onChange }) {
  return (
    <label htmlFor={name} className="displayBlock">
      <span className="spanWidth"> {displayname} </span>
      <input
        className="displayTextArea"
        type="textarea"
        id={id}
        name={name}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

export default React.memo(TextArea);

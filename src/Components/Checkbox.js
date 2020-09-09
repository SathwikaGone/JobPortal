import React from "react";

export default function Checkbox({ name, id }) {
  return (
    <React.Fragment>
      <input type="checkbox" id={id} name={name} />
      <label for={name}>{name}</label>
    </React.Fragment>
  );
}

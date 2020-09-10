import React from "react";

export default function selectOptions({ displayname, list, onChange, value }) {
  return (
    <label>
      {displayname}
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {list.map((item) => (
          <option value={item.displayValue}>{item.displayValue}</option>
        ))}
      </select>
    </label>
  );
}

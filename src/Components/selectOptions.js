import React from "react";

function selectOptions({ displayname, list, onChange, value }) {
  // console.log("select", displayname);

  return (
    <label className="displayLable">
      {displayname}
      <select
        className="displaySelect"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {list.map((item, id) => (
          <option key={id} value={item.displayValue}>
            {item.displayValue}
          </option>
        ))}
      </select>
    </label>
  );
}

export default React.memo(selectOptions);

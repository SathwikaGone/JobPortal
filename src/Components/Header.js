import React, { useState } from "react";
import "./Header.scss";
import { BsSearch } from "react-icons/bs";

export default function Header() {
  const [searchVal, setsearchVal] = useState("");
  return (
    <nav id="nav">
      <div className="logo">
        <span className="logostyle">r</span>ecruit
        <span className="logostyle"> m</span>e
      </div>
      <span className="moveLeft">Categories </span>
      <div className="searchDiv">
        <BsSearch className="icon" />
        <input
          className="inputSearch"
          name="search"
          value={searchVal}
          placeholder="search for anything"
          onChange={(e) => setsearchVal(e.target.value)}
        />
      </div>
    </nav>
  );
}

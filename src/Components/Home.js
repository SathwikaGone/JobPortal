import React from "react";
import displayImage from "../images/Remotelearning.png";
import all from "../images/wwwww.jpg";
import "./Home.scss";

export default function Home() {
  return (
    <div className="HomeDiv">
      <img src={displayImage} className="displayImage" alt="Display" />
      <img src={all} className="displayImage" alt="Display" />
    </div>
  );
}

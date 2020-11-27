import React from "react";
import displayImage from "../images/Remotelearning.png";
import all from "../images/wwwww.jpg";
import "./Home.scss";

export default function Home() {
  return (
    <div>
      <div className="HomeDiv">
        <img src={displayImage} className="displayImage" alt="Display" />
        <img src={all} className="displayImage" alt="Display" />
      </div>
      <div className="cardHome">
        <h4>Learn on your schedule</h4>
        <p>
          Study any topic, anytime. Choose from thousands of expert-led courses
          now.
        </p>
      </div>
    </div>
  );
}

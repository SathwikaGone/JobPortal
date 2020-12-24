import React from "react";
import displayImage from "../images/Remotelearning.png";
import all from "../images/wwwww.jpg";
import "./Home.scss";

export default function Home() {
  return (
    <div>
      <div className="HomeDiv">
        <img src={displayImage} className="displayImage1" alt="Display IMG" />
        <img src={all} className="displayImage2" alt="Display IMG" />
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

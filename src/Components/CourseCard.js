import React from "react";
import "./CourseCard.scss";
import imgg from "../images/Remotelearning.png";
export default function CourceCard(props) {
  return (
    <div className="cardDisplay">
      <img src={imgg} className="imgs" alt="course thumbnail" />
      <div className="details">
        <strong> {props.courseName}</strong>
        <p style={{ fontSize: "0.9rem", marginBottom: "0" }}>
          {props.shortDescription}
        </p>
        <p style={{ fontSize: "0.8rem", marginBottom: "0", color: "#73726c" }}>
          {props.author}
        </p>
        <p style={{ fontSize: "0.8rem", marginBottom: "0", color: "#73726c" }}>
          {props.hours} total hours, {props.level} level
        </p>
      </div>
      <div style={{ margin: "10px" }}>
        <strong>${props.price}</strong>
      </div>
    </div>
  );
}

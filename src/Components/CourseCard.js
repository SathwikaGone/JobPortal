import React from "react";
import "./CourseCard.scss";
import imgg from "../images/Remotelearning.png";
export default function CourceCard(props) {
  return (
    <div className="cardDisplay">
      <img src={imgg} className="imgs" alt="course thumbnail" />
      <div className="details">
        <p> {props.courseName}</p>
        <p> {props.shortDescription}</p>
        <p> {props.hours}</p>
        <p> {props.level}</p>
        <p> {props.price}</p>
      </div>
    </div>
  );
}

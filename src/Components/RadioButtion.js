import React from "react";
import "./Filter.scss";
import RatingFilter from "../Components/RatingFilter";

export default function RadioButton({ name, id, displayname, onChange }) {
  const handleOptionChange = () => {};
  return (
    <React.Fragment>
      <div className="displayrow">
        <input
          type="radio"
          id="5"
          name="rating"
          value={5}
          className="radioInput"
        />
        <RatingFilter defaultValue={5} />
      </div>
      <div className="displayrow">
        <input
          type="radio"
          id="4"
          name="rating"
          value={4}
          className="radioInput"
        />
        <RatingFilter defaultValue={4} />
      </div>

      <div className="displayrow">
        <input
          type="radio"
          id="3"
          name="rating"
          value={3}
          className="radioInput"
        />
        <RatingFilter defaultValue={3} />
      </div>

      <div className="displayrow">
        <input
          type="radio"
          id="2"
          name="rating"
          value={2}
          className="radioInput"
        />
        <RatingFilter defaultValue={2} />
      </div>

      <div className="displayrow">
        <input
          type="radio"
          id="1"
          name="rating"
          value={1}
          className="radioInput"
        />
        <RatingFilter defaultValue={1} />
      </div>
    </React.Fragment>
  );
}

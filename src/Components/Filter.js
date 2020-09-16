import React, { useState } from "react";
import Checkbox from "./Checkbox";
import { connect } from "react-redux";
import * as actions from "../Redux/actions/course";
import { Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import RadioButton from "./RadioButtion";

function Filter(props) {
  const [openVideo, setopenVideo] = useState(true);
  const [openLevel, setopenLevel] = useState(false);
  const [openRating, setopenRating] = useState(false);
  const [openCost, setopenCost] = useState(false);
  const [Filters, setFilters] = useState([]);

  let handleChecked = (e) => {
    const options = Filters;
    let index;
    if (e.target.checked) {
      options.push(e.target.name);
    } else {
      index = options.indexOf(e.target.name);
      options.splice(index, 1);
    }
    // console.log("Filters", options);
    setFilters(options);
  };

  const applyFilter = () => {
    props.dispatch(actions.get_course_by_filter(Filters));
  };

  return (
    <div>
      <p
        className="makeH5"
        onClick={() => setopenVideo(!openVideo)}
        aria-controls="example-collapse-text"
        aria-expanded={openVideo}
      >
        Video Duration
        {openVideo ? (
          <AiOutlineUp display="false" size={18} className="moveRight" />
        ) : (
          <AiOutlineDown size={18} className="moveRight" />
        )}
      </p>
      <Collapse in={openVideo}>
        <div id="example-collapse-text">
          <Checkbox
            id="small"
            name="lessthanfive"
            displayname="0-5 Hours"
            onChange={(e) => handleChecked(e)}
          />
          <Checkbox
            id="medium"
            name="sixtotwenty"
            displayname="6-20 Hours"
            onChange={(e) => handleChecked(e)}
          />
          <Checkbox
            id="large"
            name="tewntyandmore"
            displayname="20+ Hours"
            onChange={(e) => handleChecked(e)}
          />
        </div>
      </Collapse>

      <p
        className="makeH5"
        onClick={() => setopenLevel(!openLevel)}
        aria-controls="example-collapse-text"
        aria-expanded={openLevel}
      >
        Level
        {openLevel ? (
          <AiOutlineUp display="false" size={18} className="moveRight" />
        ) : (
          <AiOutlineDown size={18} className="moveRight" />
        )}
      </p>
      <Collapse in={openLevel}>
        <div id="example-collapse-text">
          <Checkbox
            id="beginner"
            name="Beginner"
            displayname="Beginner"
            onChange={(e) => handleChecked(e)}
          />
          <Checkbox
            id="intermediate"
            name="Intermediate"
            displayname="Intermediate"
            onChange={(e) => handleChecked(e)}
          />
          <Checkbox
            id="expert"
            name="Expert"
            displayname="Expert"
            onChange={(e) => handleChecked(e)}
          />
        </div>
      </Collapse>

      <p
        className="makeH5"
        onClick={() => setopenCost(!openCost)}
        aria-controls="example-collapse-text"
        aria-expanded={openCost}
      >
        Price
        {openCost ? (
          <AiOutlineUp display="false" size={18} className="moveRight" />
        ) : (
          <AiOutlineDown size={18} className="moveRight" />
        )}{" "}
      </p>
      <Collapse in={openCost}>
        <div id="example-collapse-text">
          <Checkbox
            id="paid"
            name="paid"
            displayname="Paid"
            onChange={(e) => handleChecked(e)}
          />
          <Checkbox
            id="free"
            name="free"
            displayname="Free"
            onChange={(e) => handleChecked(e)}
          />
        </div>
      </Collapse>

      <p
        className="makeH5"
        onClick={() => setopenRating(!openRating)}
        aria-controls="example-collapse-text"
        aria-expanded={openRating}
      >
        Rating
        {openRating ? (
          <AiOutlineUp display="false" size={18} className="moveRight" />
        ) : (
          <AiOutlineDown size={18} className="moveRight" />
        )}{" "}
      </p>
      <Collapse in={openRating}>
        <div id="example-collapse-text">
          <RadioButton />
        </div>
      </Collapse>

      <button onClick={applyFilter}>Apply</button>
    </div>
  );
}

export default connect()(Filter);

import React, { useState } from "react";
import Checkbox from "./Checkbox";

import { Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineDown } from "react-icons/ai";

export default function Filter() {
  const [openVideo, setopenVideo] = useState(false);
  const [openLevel, setopenLevel] = useState(false);
  const [openCost, setopenCost] = useState(false);

  return (
    <div>
      <h5
        onClick={() => setopenVideo(!openVideo)}
        aria-controls="example-collapse-text"
        aria-expanded={openVideo}
      >
        Video Duration
        <AiOutlineDown size={18} />
      </h5>
      <Collapse in={openVideo}>
        <div id="example-collapse-text">
          <Checkbox id="small" name="lessthanfive" displayname="0-5 Hours" />
          <Checkbox id="medium" name="fivetotwenty" displayname="5-20 Hours" />
          <Checkbox id="large" name="tewntyandmore" displayname=">20 Hours" />
        </div>
      </Collapse>

      <h5
        onClick={() => setopenLevel(!openLevel)}
        aria-controls="example-collapse-text"
        aria-expanded={openLevel}
      >
        Level
        <AiOutlineDown size={18} />
      </h5>
      <Collapse in={openLevel}>
        <div id="example-collapse-text">
          <Checkbox id="beginner" name="beginner" displayname="Beginner" />
          <Checkbox
            id="intermediate"
            name="intermediate"
            displayname="Intermediate"
          />
          <Checkbox id="expert" name="expert" displayname="Expert" />
        </div>
      </Collapse>

      <h5
        onClick={() => setopenCost(!openCost)}
        aria-controls="example-collapse-text"
        aria-expanded={openCost}
      >
        Price
        <AiOutlineDown size={18} />
      </h5>
      <Collapse in={openCost}>
        <div id="example-collapse-text">
          <Checkbox id="paid" name="paid" displayname="Paid" />
          <Checkbox id="free" name="free" displayname="Free" />
        </div>
      </Collapse>
    </div>
  );
}

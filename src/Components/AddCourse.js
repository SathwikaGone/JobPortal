import React, { useState } from "react";
import LableInput from "./lableInput";
import SelectOptions from "./selectOptions";
import TextArea from "./textArea";
import "./AddCourse.scss";

export default function AddCourse() {
  const [details, setdetails] = useState({
    courseName: "",
    description: "",
    catogery: "",
    level: "",
    createdBy: "",
    toLearn: "",
    Requirements: "",
    access: "",
    certification: "",
    duration: 0,
    price: 0,
  });

  let catg = [
    { displayValue: "Java" },
    { displayValue: "SQL" },
    { displayValue: "React.js" },
    { displayValue: "GraphQl" },
    { displayValue: "Node.js" },
    { displayValue: "AWS" },
  ];

  let level = [
    { displayValue: "Beginner" },
    { displayValue: "Intermediate" },
    { displayValue: "Expert" },
  ];

  return (
    <div className="displayBlock">
      <div className="formLayout">
        <form>
          <h3>Add Course</h3>
          <p>Let us the know the course details</p>
          <LableInput
            name="courseName"
            id="courseName"
            type="text"
            displayname="Course Name"
            onChange={(value) => setdetails({ ...details, courseName: value })}
          />

          <SelectOptions
            displayname="Catogery"
            list={catg}
            onChange={(value) => setdetails({ ...details, catogery: value })}
            value={details.catogery}
          />

          <SelectOptions
            displayname="Level"
            list={level}
            onChange={(value) => setdetails({ ...details, level: value })}
            value={details.level}
          />

          <TextArea
            name="description"
            id="description"
            type="text"
            displayname="Description"
            onChange={(value) => setdetails({ ...details, description: value })}
          />

          <LableInput
            name="price"
            id="price"
            type="price"
            displayname="Price"
            onChange={(value) => setdetails({ ...details, price: value })}
          />

          <SelectOptions
            displayname="Access"
            list={[{ displayValue: "1 Month" }, { displayValue: "Life Time" }]}
            onChange={(value) => setdetails({ ...details, access: value })}
            value={details.access}
          />

          <SelectOptions
            displayname="Certification"
            list={[{ displayValue: "Yes" }, { displayValue: "No" }]}
            onChange={(value) =>
              setdetails({ ...details, certification: value })
            }
            value={details.certification}
          />

          <TextArea
            name="toLearn"
            id="toLearn"
            type="text"
            displayname="To Learn"
            onChange={(value) => setdetails({ ...details, toLearn: value })}
          />
          <TextArea
            name="Requirements"
            id="Requirements"
            type="text"
            displayname="Requirements"
            onChange={(value) =>
              setdetails({ ...details, Requirements: value })
            }
          />

          <LableInput
            name="duration"
            id="duration"
            type="duration"
            displayname="Duration"
            onChange={(value) => setdetails({ ...details, duration: value })}
          />

          <LableInput
            name="createdBy"
            id="createdBy"
            type="createdBy"
            displayname="Created By"
            onChange={(value) => setdetails({ ...details, createdBy: value })}
          />

          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}

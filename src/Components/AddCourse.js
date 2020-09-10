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

  console.log("details", details);

  return (
    <div>
      <div className="formLayout">
        <form>
          <h3>Add Course</h3>

          <LableInput
            name="courseName"
            id="courseName"
            type="text"
            displayname="courseName"
            onChange={(value) => setdetails({ ...details, courseName: value })}
          />

          <TextArea
            name="description"
            id="description"
            type="text"
            displayname="description"
            onChange={(value) => setdetails({ ...details, description: value })}
          />

          <SelectOptions
            displayname="catogery"
            list={catg}
            onChange={(value) => setdetails({ ...details, catogery: value })}
            value={details.catogery}
          />

          <SelectOptions
            displayname="level"
            list={level}
            onChange={(value) => setdetails({ ...details, level: value })}
            value={details.level}
          />

          <LableInput
            name="createdBy"
            id="createdBy"
            type="createdBy"
            displayname="createdBy"
            onChange={(value) => setdetails({ ...details, createdBy: value })}
          />
          <LableInput
            name="toLearn"
            id="toLearn"
            type="toLearn"
            displayname="toLearn"
            onChange={(value) => setdetails({ ...details, toLearn: value })}
          />
          <LableInput
            name="Requirements"
            id="Requirements"
            type="Requirements"
            displayname="Requirements"
            onChange={(value) =>
              setdetails({ ...details, Requirements: value })
            }
          />
          <LableInput
            name="access"
            id="access"
            type="access"
            displayname="access"
            onChange={(value) => setdetails({ ...details, access: value })}
          />

          <SelectOptions
            displayname="certification"
            list={[{ displayValue: "Yes" }, { displayValue: "No" }]}
            onChange={(value) =>
              setdetails({ ...details, certification: value })
            }
            value={details.certification}
          />
          <LableInput
            name="duration"
            id="duration"
            type="duration"
            displayname="duration"
            onChange={(value) => setdetails({ ...details, duration: value })}
          />
          <LableInput
            name="price"
            id="price"
            type="price"
            displayname="price"
            onChange={(value) => setdetails({ ...details, price: value })}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import LableInput from "./lableInput";
import SelectOptions from "./selectOptions";
import TextArea from "./textArea";
import "./AddCourse.scss";

export default function AddCourse() {
  const [details, setdetails] = useState({
    courseName: "",
    description: "",
    category: "Java",
    level: "Beginner",
    createdBy: "",
    toLearn: "",
    requirments: "",
    access: "1 Month",
    certification: "Yes",
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

  // console.log("det", details);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      query: `mutation{
    addCourse(Course: {
      courseName:"${details.courseName}",
      description:" ${details.description}",
      category:"${details.category}",
      level:" ${details.level}",
      createdBy: "${details.createdBy}",
      toLearn: "${details.toLearn}",
      requirments:" ${details.requirments}",
      access: "${details.access}",
      certification : "${details.certification}",
      duration: ${details.duration},
      price: ${details.price},
    } ){
      courseName
      category
    }
  }`,
    };

    console.log("det", body.toString());

    try {
      const data = await fetch("http://localhost:5000/api/", {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      });
      console.log("data", data);
    } catch (error) {
      console.log(error);
    }
  };

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
            onChange={(value, name) =>
              setdetails({ ...details, courseName: value })
            }
          />

          <SelectOptions
            displayname="Category"
            list={catg}
            onChange={(value) => setdetails({ ...details, category: value })}
            value={details.category}
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
            type="number"
            displayname="Price"
            onChange={(value) =>
              setdetails({ ...details, price: Number(value) })
            }
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
            onChange={(value) => setdetails({ ...details, requirments: value })}
          />

          <LableInput
            name="duration"
            id="duration"
            type="number"
            displayname="Duration"
            onChange={(value) =>
              setdetails({ ...details, duration: Number(value) })
            }
          />

          <LableInput
            name="createdBy"
            id="createdBy"
            type="text"
            displayname="Created By"
            onChange={(value) => setdetails({ ...details, createdBy: value })}
          />

          <div className="buttonRight">
            <button type="submit" onClick={handleSubmit} className="button">
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

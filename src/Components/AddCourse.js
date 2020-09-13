import React, { useState } from "react";
import LableInput from "./lableInput";
import SelectOptions from "./selectOptions";
import TextArea from "./textArea";
import "./AddCourse.scss";
import { connect } from "react-redux";
import * as actions from "../Redux/actions/course";

function AddCourse(props) {
  const [details, setdetails] = useState({
    courseName: "",
    description: "",
    category: "Business",
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
    { displayValue: "Business" },
    { displayValue: "IT" },
    { displayValue: "Music" },
    { displayValue: "Marketing" },
    { displayValue: "Lifestyle" },
    { displayValue: "Design" },
  ];

  let level = [
    { displayValue: "Beginner" },
    { displayValue: "Intermediate" },
    { displayValue: "Expert" },
  ];

  // console.log("det", details);

  const handleSubmitData = async (e) => {
    e.preventDefault();
    props.dispatch(actions.add_course(details));
    alert("Thank you");
    props.history.push("/");
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

          <button onClick={handleSubmitData} className="button">
            submit
          </button>
          <div className="buttonRight"></div>
        </form>
      </div>
    </div>
  );
}

export default connect()(AddCourse);

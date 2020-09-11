import React, { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
import Filter from "./Filter";
import { FiFilter } from "react-icons/fi";
import cx from "classnames";
import "./Category.scss";
const Formbody = {
  query: `query{
    allCourses{
      courseName
      category
      level
      description
      price
      access
      certification
      toLearn
      requirments
      duration
      createdBy
      date
    }
  }`,
};
export default function Category() {
  const [showFilter, setshowFilter] = useState(true);
  let filterClassnames = cx("sectionClass", "otherclass");
  const [fetchedData, setfetchedData] = useState([]);
  const [error, seterror] = useState("");

  useEffect(() => {
    const handleFetch = () => {
      fetch("http://localhost:5000/api/", {
        method: "POST",
        body: JSON.stringify(Formbody),
        headers: { "Content-Type": "application/json" },
      })
        .then((resdata) => setfetchedData(resdata))
        .catch((error) => seterror(error));
    };
    handleFetch();
  }, []);

  console.log("fetchdata", fetchedData);
  console.log("error", error);

  return (
    <div className="display">
      <h4 className="headerName">Category name</h4>
      <div className="dispCat">
        <button className="lft" onClick={() => setshowFilter(!showFilter)}>
          <FiFilter /> Filter
        </button>
        <span className="right">results 150 </span>
      </div>
      <div className="displayCategory">
        {showFilter && (
          <aside className="asideClass">
            <Filter />
          </aside>
        )}
        <section className={showFilter ? "sectionClass" : filterClassnames}>
          <CourseCard
            pp=""
            courseName="courseName"
            shortDescription="Description"
            hours="hours"
            level="intermideate"
            price="22$"
          />
        </section>
      </div>
    </div>
  );
}

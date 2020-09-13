import React, { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
import { useSelector } from "react-redux";

import Filter from "./Filter";
import { FiFilter } from "react-icons/fi";
import cx from "classnames";
import "./Category.scss";
import { connect } from "react-redux";
import * as actions from "../Redux/actions/course";

function Category(props) {
  const category = props.location.param;

  const [showFilter, setshowFilter] = useState(true);
  let filterClassnames = cx("sectionClass", "otherclass");
  // const [fetchedData, setfetchedData] = useState([]);
  const [error, seterror] = useState("");

  const fetchedData = useSelector((state) => state.courses.allCourse);

  useEffect(() => {
    if (category !== "") props.dispatch(actions.get_course(category));
  }, [category]);

  console.log("fetchdata", fetchedData);
  console.log("error", error);

  // let filterData = fetchedData();

  return (
    <div className="display">
      <h4 className="headerName">All {category} Courses</h4>
      <div className="dispCat">
        <button className="lft" onClick={() => setshowFilter(!showFilter)}>
          <FiFilter /> Filter
        </button>
        <span className="right">results {fetchedData.length} </span>
      </div>
      <div className="displayCategory">
        {showFilter && (
          <aside className="asideClass">
            <Filter />
          </aside>
        )}
        <section className={showFilter ? "sectionClass" : filterClassnames}>
          {fetchedData.length > 0
            ? fetchedData.map((item) => (
                <CourseCard
                  courseName={item.courseName}
                  shortDescription={item.description}
                  hours={item.duration}
                  level={item.level}
                  author={item.createdBy}
                  price={item.price}
                />
              ))
            : "No Data :("}
        </section>
      </div>
    </div>
  );
}

export default connect()(Category);

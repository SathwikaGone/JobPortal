import React, { useState } from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { FiFilter } from "react-icons/fi";

import CourseCard from "./CourseCard";
import Filter from "./Filter";
import cx from "classnames";
import "./Category.scss";

function Category(props) {
  const category = props.location.param;
  const [showFilter, setshowFilter] = useState(true);
  const fetchedData = useSelector((state) => state.courses.allCourse);
  let filterClassnames = cx("sectionClass", "otherclass");
  // console.log("fetchdata", fetchedData);

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
          {fetchedData.length > 0 ? (
            fetchedData.map((item, id) => (
              <CourseCard
                key={id}
                courseName={item.courseName}
                shortDescription={item.description}
                hours={item.duration}
                level={item.level}
                author={item.createdBy}
                price={item.price}
              />
            ))
          ) : (
            <h3 style={{ textAlign: "center" }}>No Data :(</h3>
          )}
        </section>
      </div>
    </div>
  );
}

export default connect()(Category);

import React from "react";
import CourseCard from "./CourseCard";
import Filter from "./Filter";
import "./Category.scss";

export default function Category() {
  return (
    <div>
      <h4>Category name</h4>
      <div className="displayCategory">
        <p>dislay filter button</p>
        <p>results </p>
      </div>
      <div className="displayCategory">
        <aside className="asideClass">
          <Filter />
        </aside>

        <section className="sectionClass">
          <CourseCard
            pp=""
            courseName="dddd"
            shortDescription="ddddddddddddddd"
            hours="1212"
            level="hh"
            price="22"
          />
        </section>
      </div>
    </div>
  );
}

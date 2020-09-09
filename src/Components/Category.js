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

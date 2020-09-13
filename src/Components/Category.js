import React, { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
import Filter from "./Filter";
import { FiFilter } from "react-icons/fi";
import cx from "classnames";
import "./Category.scss";

export default function Category(props) {
  const category = props.location.param;
  console.log("param", category);
  const [showFilter, setshowFilter] = useState(true);
  let filterClassnames = cx("sectionClass", "otherclass");
  const [fetchedData, setfetchedData] = useState([]);
  const [error, seterror] = useState("");

  useEffect(() => {
    const Formbody = {
      query: `query{
        getCategory(category: "${category}"){
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
    const handleFetch = () => {
      fetch("http://localhost:5000/api/", {
        method: "POST",
        body: JSON.stringify(Formbody),
        headers: { "Content-Type": "application/json" },
      })
        .then((resdata) => resdata.json())
        .then((da) => setfetchedData(da.data?.getCategory))
        .catch((error) => seterror(error));
    };
    handleFetch();
  }, [category]);

  console.log("fetchdata", fetchedData);
  console.log("error", error);

  return (
    <div className="display">
      <h4 className="headerName">{category}</h4>
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

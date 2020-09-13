import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { Dropdown } from "react-bootstrap";
export default function Header() {
  const [searchVal, setsearchVal] = useState("");
  return (
    <nav id="nav">
      <Link to="/">
        <div className="logo">
          e<span className="logostyle">L</span>earning
        </div>
      </Link>
      <Link className="btn-primary " to="/AddCourse">
        AddCourse
      </Link>

      <Dropdown>
        <Dropdown.Toggle>Categories</Dropdown.Toggle>
        <Dropdown.Menu>
          <Link
            className="btn-primaryy "
            to={{
              pathname: "/Category",
              param: "Business",
            }}
          >
            Business
          </Link>
          <Link
            className="btn-primaryy "
            to={{
              pathname: "/Category",
              param: "IT",
            }}
          >
            IT
          </Link>
          <Link
            className="btn-primaryy "
            to={{
              pathname: "/Category",
              param: "Music",
            }}
          >
            Music
          </Link>
          <Link
            className="btn-primaryy "
            to={{
              pathname: "/Category",
              param: "Marketing",
            }}
          >
            Marketing
          </Link>
          <Link
            className="btn-primaryy "
            to={{
              pathname: "/Category",
              param: "Lifestyle",
            }}
          >
            Lifestyle
          </Link>
          <Link
            className="btn-primaryy "
            to={{
              pathname: "/Category",
              param: "Design",
            }}
          >
            Design
          </Link>
        </Dropdown.Menu>
      </Dropdown>
      <div className="searchDiv">
        <BsSearch className="icon" />
        <input
          className="inputSearch"
          name="search"
          value={searchVal}
          placeholder="search for anything"
          onChange={(e) => setsearchVal(e.target.value)}
        />
      </div>
    </nav>
  );
}

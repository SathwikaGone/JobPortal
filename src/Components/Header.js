import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { Dropdown } from "react-bootstrap";

export default function Header() {
  const [searchVal, setsearchVal] = useState("");
  const [Show, setShow] = useState(false);
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
        <Dropdown.Toggle onClick={() => setShow(!Show)}>
          Categories
        </Dropdown.Toggle>
        <Dropdown.Menu show={Show}>
          <Link
            className="btn-primaryy "
            to={{
              pathname: "/Category",
              param: "Business",
            }}
            onClick={() => setShow(!Show)}
          >
            Business
          </Link>
          <Link
            className="btn-primaryy "
            to={{
              pathname: "/Category",
              param: "IT",
            }}
            onClick={() => setShow(!Show)}
          >
            IT
          </Link>
          <Link
            className="btn-primaryy "
            to={{
              pathname: "/Category",
              param: "Music",
            }}
            onClick={() => setShow(!Show)}
          >
            Music
          </Link>
          <Link
            className="btn-primaryy "
            to={{
              pathname: "/Category",
              param: "Marketing",
            }}
            onClick={() => setShow(!Show)}
          >
            Marketing
          </Link>
          <Link
            className="btn-primaryy "
            to={{
              pathname: "/Category",
              param: "Lifestyle",
            }}
            onClick={() => setShow(!Show)}
          >
            Lifestyle
          </Link>
          <Link
            className="btn-primaryy "
            to={{
              pathname: "/Category",
              param: "Design",
            }}
            onClick={() => setShow(!Show)}
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

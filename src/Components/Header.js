import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import "./Header.scss";
import * as actions from "../Redux/actions/course";

function Header(props) {
  const [searchVal, setsearchVal] = useState("");
  const [Show, setShow] = useState(false);

  const searchData = (e) => {
    props.dispatch(actions.get_course_by_search(searchVal));
  };

  const dispatchGetCource = (category) => {
    setShow(!Show);
    props.dispatch(actions.get_course(category));
  };

  return (
    <nav id="nav" data-test="nav">
      <Link to="/">
        <div className="logo" data-test="logo">
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
            className="btn-primaryy"
            data-test="business"
            to={{ pathname: "/Category", param: "Business" }}
            onClick={() => dispatchGetCource("Business")}
          >
            Business
          </Link>
          <Link
            className="btn-primaryy "
            to={{ pathname: "/Category", param: "IT" }}
            onClick={() => dispatchGetCource("IT")}
          >
            IT
          </Link>
          <Link
            className="btn-primaryy "
            to={{ pathname: "/Category", param: "Music" }}
            onClick={() => dispatchGetCource("Music")}
          >
            Music
          </Link>
          <Link
            className="btn-primaryy "
            to={{ pathname: "/Category", param: "Marketing" }}
            onClick={() => dispatchGetCource("Marketing")}
          >
            Marketing
          </Link>
          <Link
            className="btn-primaryy "
            to={{ pathname: "/Category", param: "Lifestyle" }}
            onClick={() => dispatchGetCource("Lifestyle")}
          >
            Lifestyle
          </Link>
          <Link
            className="btn-primaryy "
            to={{ pathname: "/Category", param: "Design" }}
            onClick={() => dispatchGetCource("Design")}
          >
            Design
          </Link>
        </Dropdown.Menu>
      </Dropdown>
      <div className="searchDiv">
        <input
          className="inputSearch"
          name="search"
          value={searchVal}
          placeholder="search for anything"
          onChange={(e) => setsearchVal(e.target.value)}
        />

        <Link className="btn-primary" to="/Category">
          <BsSearch
            className="icon"
            data-test="search"
            size={18}
            onClick={searchData}
          />
        </Link>
      </div>
    </nav>
  );
}

export default connect()(Header);
//export default Header;

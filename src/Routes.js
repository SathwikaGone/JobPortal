import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import AddCourse from "./Components/AddCourse";
import MyHeader from "./Components/Header";
import Category from "./Components/Category";
import Footer from "./Components/AppFooter";
import "./App.css";
export default function Routes() {
  return (
    <Router>
      <MyHeader />
      <Route exact path="/" component={Home} />
      <Route exact path="/AddCourse" component={AddCourse} />
      <Route exact path="/Category" component={Category} />
      <div className="position">
        <Footer />
      </div>
    </Router>
  );
}

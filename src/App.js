import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/AppFooter";
import Category from "./Components/Category";
import AddCourse from "./Components/AddCourse";
function App() {
  return (
    <React.Fragment>
      <Header />
      {/** <Home />      */}

      {/**   <AddCourse /> */}
      <Category />
      <div className="position">
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;

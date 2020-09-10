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

      {/** <Category />  */}
      <AddCourse />
      <div className="position">
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;

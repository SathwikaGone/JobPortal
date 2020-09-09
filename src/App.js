import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/AppFooter";
import Category from "./Components/Category";

function App() {
  return (
    <React.Fragment>
      <Header />
      {/** <Home />*/}
      <Category />
      <Footer />
    </React.Fragment>
  );
}

export default App;

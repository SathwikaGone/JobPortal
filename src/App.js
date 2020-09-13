import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Routs from "./Routes";

import { store } from "./Redux/store/index";

function App() {
  return (
    <Provider store={store}>
      <Routs />
      {/** <Home />     
      <AddCourse />  
       <Category />*/}
    </Provider>
  );
}

export default App;

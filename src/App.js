import React from "react";
import "./App.css";
import { Header } from "./components/header";
import Register from "./components/register";
import Button from "./components/counter/button";
import Label  from "./components/counter/label";
import { Provider } from "react-redux";
import { createStore } from "redux";
import combineReducers from "./redux";
const App = () => {
  let store = createStore(combineReducers);
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Button />
        <Label />
        {/* <Register/> */}
      </div>
    </Provider>
  );
};

export default App;

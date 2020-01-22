import React from "react";
import "./App.css";
import { Header } from "./components/header";
import Register from "./components/register";
import Button from "./components/counter/button";
import Label  from "./components/counter/label";
import { Provider } from "react-redux";
import { createStore ,applyMiddleware} from "redux";
import combineReducers from "./redux";
import thunk from 'redux-thunk';
import  {Login}  from "./components/login";
const App = () => {
  let store = createStore(combineReducers,applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Login/>
        {/* <Button />
        <Label /> */}
        {/* <Register/> */}
      </div>
    </Provider>
  );
};

export default App;

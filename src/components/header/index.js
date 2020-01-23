import React from "react";
import NavItems  from "./navitems";
// import {withRouter} from 'react-router-dom'
export const Header = (props) => {
  let navItems = [
    { name: "home", id: 1, displayName: "Home",route:"home" },
    { name: "register", id: 2, displayName: "Register" ,route:"register"},
    { name: "login", id: 2, displayName: "Login",route:"login" }
  ];
  const handleClick =(item)=>{
    console.log(item);
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <NavItems navItems={navItems} handleClick={handleClick} history={props.history}/>
    </nav>
  );
};


  
import React from "react";
import { NavItems } from "./navitems";

export const Header = () => {
  let navItems = [
    { name: "home", id: 1, displayName: "Home" },
    { name: "electronics", id: 2, displayName: "Electronics" },
    { name: "apparel", id: 2, displayName: "Apparel" }
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
      <NavItems navItems={navItems} handleClick={handleClick}/>
    </nav>
  );
};

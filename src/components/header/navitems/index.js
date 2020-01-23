import React from "react";
import {withRouter} from 'react-router-dom';
const NavItems = props => {
  let home = "Home";
  console.log(props.navItems);
  return (
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav mr-auto">
          {getItems(props.navItems,props)}
      </ul>
    </div>
  );
};

const getItems = (items,props) => {
  return items.map((item, index) => {
    return (
      <li className="nav-item" key={index}  onClick={
        e=>{
         props.handleClick(item);
         props.history.push(item.route);
        }
    }>
        <a className="nav-link" href="javascript:void(0)">
          {item.displayName}
        </a>
      </li>
    );
  });
};
export default withRouter(NavItems);
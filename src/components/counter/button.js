import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../../redux/action";
import { getCountries } from "../../redux/action-countrylist";


const Button = props => {
  console.log(props);
 
  return (
    <div>
      <button className="btn btn-primary" onClick={e=>{
          props.dispatch(increment());
          props.dispatch(getCountries());
      }}>Increment</button>
      <button className="btn btn-warning" onClick={e=>{
           props.dispatch(decrement());
      }}>Decrement</button>
    </div>
  );
};
function mapStateToProps(state, actions) {
  return state;
}
export default connect(mapStateToProps)(Button);

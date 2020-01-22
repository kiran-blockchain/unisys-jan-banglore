import React from "react";
import { connect } from "react-redux";

export const Label = props => {
    console.log(props);
  return <label className="badge badge-primary">{props.Counter.count}</label>;
};

function mapStateToProps(state, actions) {
  return state;
}
export default connect(mapStateToProps)(Label);

import React, { Component } from "react";
import Axios from "axios";
import { Dropdown } from "../common/dropdown";

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "M",
      countryList: []
    };
  }
  handleChange = e => {
    console.log(e.target.name);
    console.log(e.target.value);
    let state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };
  getTextBox = obj => {
    return (
      <div className="form-group row">
        <label htmlFor={obj.name} className="col-sm-2 col-form-label">
          {obj.label}
        </label>
        <div className="col-sm-6">
          <input
            type="text"
            className="form-control-plaintext"
            name={obj.name}
            id={obj.name}
            value={obj.value}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  };

  async componentDidMount() {
    console.log("Component Mounted");
    try {
      let items = await Axios.get("https://restcountries.eu/rest/v2/all");
      //console.log(items);
      let countryList = items.data.map(x => {
        return { name: x.name, value: x.alpha2Code };
      });
      console.log(countryList);
      this.setState({ ...this.state, countryList });
    } catch (ex) {
      console.log(ex.message);
    }
  }
  componentWillUnmount() {}
  componentDidUpdate() {
    console.log("Component updated");
  }
  componentDidCatch() {
    console.log("Exception");
  }

  render() {
    return (
      <div className="container">
        {this.getTextBox({
          name: "firstName",
          label: "First Name",
          value: this.state.firstName
        })}
        {this.getTextBox({
          name: "lastName",
          label: "Last Name",
          value: this.state.lastName
        })}
        {this.getTextBox({ name: "age", label: "Age", value: this.state.age })}
        <div className="form-group row">
          <label htmlFor="gender" className="col-sm-2 col-form-label">
            Countries
          </label>
          <Dropdown
            items={this.state.countryList}
            handleChange={this.handleChange}
            name={"selectedCountry"}
          />
        </div>
        <div className="form-group row">
          <label htmlFor="gender" className="col-sm-2 col-form-label">
            Gender
          </label>
          <input
            type="radio"
            name="gender"
            className="ml-1 mt-3"
            value="M"
            defaultChecked={this.state.gender == "M"}
            onChange={this.handleChange}
            title="Male"
          />
          <span className="ml-2 mt-2">Male</span>
          <input
            type="radio"
            name="gender"
            title="Female"
            value="F"
            defaultChecked={this.state.gender == "F"}
            onChange={this.handleChange}
          />
          <span className="ml-2 mt-2">Female</span>
        </div>
        <div>{JSON.stringify(this.state.selectedCountry)}</div>
      </div>
    );
  }
}

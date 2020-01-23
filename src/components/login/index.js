import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "../common/dropdown";
import { getCountries } from "../../redux/action-countrylist";
export const Login = () => {
  const [userDetails, setUserDetails] = useState({
    username: "Kiran",
    password: "Test"
  });

  const dispatch = useDispatch();
  const state = useSelector(x => {
    return x.CountryList;
  });
  const handleChange = e => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  console.log(state);
  useEffect(() => {
    if (state.list.length == 0) {
      dispatch(getCountries());
    }
  });
  return (
    <div className="card">
      <div className="form-group">
        <input
          type="text"
          name="username"
          className="form-control"
          value={userDetails.username}
          onChange={handleChange}
          placeholder="User Name"
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          value={userDetails.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </div>
      <Dropdown items={state.list} />
    </div>
  );
};

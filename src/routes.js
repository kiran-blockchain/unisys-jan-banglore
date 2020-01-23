import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./pages/login/login";
import DashBoardPage from "./pages/dashboard/dashboard";
import RegisterPage from "./pages/register/register";
import  {Header} from "./components/header";
import HomePage from "./pages/home/home";
import { createBrowserHistory } from 'history';
const history = createBrowserHistory()
const Routes = () => {
  return (
    <div class="container">
      <Header history ={history} />
      <Switch>
        <Route path="/login" component={LoginPage}   />
        <Route path="/dashboard" component={DashBoardPage}  />
        <Route path="/register" component={RegisterPage}   />
        <Route path="/" component={LoginPage}  />
      </Switch>
    </div>
  );
};
export default Routes;

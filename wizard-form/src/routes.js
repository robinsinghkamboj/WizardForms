import React from "react";
import { Route } from "react-router-dom";
import App from "./App";
import ApexChart from './views/ApexChart'
import UnStatedExample from "./views/UnStatedExample";
import DatatablePage from "./views/datatable";
import RegisterPage from "./views/registerPage";
import LoginPage from "./views/loginPage";

function MyRoutes() {
  return (
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/apexChart" component={ApexChart} />
      <Route exact path="/createToDO" component={UnStatedExample} />
      <Route exact path="/datatable" component={DatatablePage} />
      <Route exact path="/registerationPage" component={RegisterPage} />
      <Route exact path="/loginPage" component={LoginPage} />
    </div>
  );
}

export default MyRoutes;

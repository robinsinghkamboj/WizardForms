import React from "react";
import MyRoutes from "../routes";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Router>
        <nav className="navbar">          
          <div>
            <Link to={"/"} className="justify-content-end">
              WizardForm
            </Link>
            <b> | </b>
            <Link to={"/apexChart"} className="justify-content-end">
              ApexChart
            </Link>
            <b> | </b>
            <Link to={"/createToDo"} className="justify-content-end">
              CreateToDo
            </Link>
            <b> | </b>
            <Link to={"/datatable"} className="justify-content-end">
              DataTable
            </Link>
            <b> | </b>
            <Link to={"/registerationPage"} className="justify-content-end">
              RegisterationPage
            </Link>
            <b> | </b>
            <Link to={"/loginPage"} className="justify-content-end">
              LoginPage
            </Link>
          </div>
        </nav>
        <Switch>
          <MyRoutes />
        </Switch>
      </Router>
    );
  }
}

export default Header;
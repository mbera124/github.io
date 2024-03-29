import React from "react";
import "./Dashboard.css";
import { Route, Switch } from "react-router-dom";
import swal from "sweetalert";
import { logout } from "../utils";
import Sidebar from "./Sidebar";

import UserDetails from "./UserDetails";
import Timer from "./TokenTimer";
class Dashboard extends React.Component {
  logout = (e) => {
    logout();
    swal("Successfully Logout");
  };
  render() {
    return (
      <div>
        <div className="container-fluid dashboardBackground">
          <div className="row">
            <div className="col-md-3 profileDashboard">
              <Sidebar />
            </div>
            <div className="col-md-9 quotes">
              <Timer />
              <Switch>
                <Route path="UserDetails" component={UserDetails} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;

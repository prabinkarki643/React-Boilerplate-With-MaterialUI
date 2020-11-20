import React, { Component } from "react";
import { Switch, Route, withRouter, Link } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Home from "../pages/DashBoard/Home";
import RouteNotFound from "../pages/Error/RouteNotFound";
import AppLayout from "../components/common/AppLayout";
class Routes extends Component {
  render() {
    const { location } = this.props;
    return (
      <AppLayout noLayout={location.pathname == "/"}>
        <div>
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/Home" component={Home} exact />

            {/* Not Found */}
            <Route component={RouteNotFound} />
          </Switch>
        </div>
      </AppLayout>
    );
  }
}

export default withRouter(Routes);

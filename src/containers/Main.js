import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/home/HomeComponent";

export default class Main extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => <Home {...props} theme={this.props.theme} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

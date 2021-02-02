import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Navigation from "./NavigationComponent";

class Main extends Component {
  render() {
    return(
      <div className="app">
        <Navigation />
        <Switch>
          <Route path="/" component={Home}></Route>
          <Redirect to="/"/>
        </Switch>
        <Footer />
      </div>
    );
  };
}

export default Main;
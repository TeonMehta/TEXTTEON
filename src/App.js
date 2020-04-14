import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Contacts from "./components/Contacts";
import Create from "./components/Create";
import Edit from "./components/Edit";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <br />
        <Switch>
            <Route path="/" exact>
                <Contacts/>
            </Route>
            <Route path="/create" exact >
                <Create/>
            </Route>
            <Route path="/edit/:id" exact >
                {/*<Edit/>*/}
            </Route>
        </Switch>
      </>
    );
  }
}

import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Contacts from "./components/Contacts";
import Create from "./components/Create";
import Update from "./components/Update";

function App() {
  return (
    <>
      <Navbar />
      <br />
      <Switch>
        <Route path="/" exact component={Contacts} />
        <Route path="/create" exact component={Create} />
        <Route path="/edit/:id" exact component={Update} />
      </Switch>
    </>
  );
}
export default App;

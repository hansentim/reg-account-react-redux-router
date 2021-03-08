import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Registration from "./components/Registration";
import Account from "./components/Account";
//import SaveData from "./components/SaveData";

function App() {
  return (
    <section className="wrapper">
      <div className="welcome">
        <h2>Välkommen!</h2>
      </div>
      <Switch>
        <Route path="/" component={Registration} exact />
        <Route path="/account" component={Account} />
      </Switch>
    </section>
  );
}

export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import Header from "./Components/Header";
import Actors from "./Pages/Actors";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route path="/Actors" component={Actors} />
      </Switch>
    </div>
  );
};
export default App;

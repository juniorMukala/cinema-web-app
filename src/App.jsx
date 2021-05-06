import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Accueil from './Components/Accueil';
import CardContainer from './Components/CardContainer';
import ToShowMovies from './Components/ToShowMovies';
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <div className="App">
        <Switch>
         <Route exact path='/' component={CardContainer}>
          </Route>
          <Route path='/ToShowMovies' component={ToShowMovies}>
          </Route>
        </Switch>
    </div>
  );
}

export default App; 
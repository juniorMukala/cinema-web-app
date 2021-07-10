import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Home from '../views/Home';
import Pagination from '../Components/Pagination'

export default function Layout(dataMovies, series) {
  console.log(dataMovies);
    return (
      <div>
        <Switch>
          <Route path="/">
            <Home 
            
            // currentPagePagination={props.currentPagePagination}
            pagination={Pagination}
            // currentPage={props.currentPage}
            // router={props.router}
            // searchMovies={props.searchMovies}
            />
          </Route>
        </Switch>
      </div>
    );
  }
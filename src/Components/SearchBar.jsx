import React from 'react';
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import 'bootstrap/dist/css/bootstrap.min.css'

const SearchBar = (props) => {
  return (
    <div class="input-group">
      <input type="search" placeholder="Search" onChange={props.onChange}/>
    </div>
  )}
export default SearchBar;
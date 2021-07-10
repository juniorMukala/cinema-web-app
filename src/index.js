import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import * as serviceWorker from './serviceWorker';

ReactDom.render(
<React.StrictMode>
    <App/>
</React.StrictMode>
, document.getElementById("root"));
serviceWorker.unregister()
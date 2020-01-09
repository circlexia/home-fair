import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, Switch } from "react-router";
import {HashRouter,Route,Switch} from 'react-router-dom';
import {Home} from './container';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render( <HashRouter>
  <Switch>
      <Route exact path="/" component={Home}/>
      {/* <Route exact path="/detail" component={Detail}/> */}
  </Switch>
</HashRouter>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

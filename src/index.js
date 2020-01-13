import React from 'react';
import ReactDOM from 'react-dom';
// import LazyLoad from 'react-lazyload';
import {HashRouter,Route,Switch} from 'react-router-dom';
import {Home,OutdateClient} from './container';
import 'antd-mobile/dist/antd-mobile.css';
import * as serviceWorker from './serviceWorker';
ReactDOM.render( <HashRouter>
  <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/outdate" component={OutdateClient}/>
  </Switch>
</HashRouter>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';
import Signin from './components/Signin/Signin';
import Home from './components/Home/Home';
import Home2 from './components/Home/Home2';
import Home3 from './components/Home/Home3';
import UsersDash from './components/UsersDash/UsersDash' ;

import HelloWorld from './components/HelloWorld/HelloWorld';
// Put any other imports below so that CSS from your
// components takes precedence over default style
import './styles/styles.scss';

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/helloworld" component={HelloWorld}/>
        <Route path="/signin" component={Signin} />
        <Route path="/home2" component={Home2} />
        <Route path="/home3" component={Home3} />
        <Route path="/usersdash" component={UsersDash} />


        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));

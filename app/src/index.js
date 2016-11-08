import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './components/About'
import Contact from './components/Contact'
import User from './components/User'
import './index.css';
import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="about" component={About}/>
    <Route path="contact" component={Contact}/>
    <Route path="user/:name/:about" component={User}/>
  </Router>,
  document.getElementById('root')
);

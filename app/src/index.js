import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './components/About'
import Contact from './components/Contact'
import User from './components/User'
import './index.css';
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import store from './configureStore'

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="about" component={About}/>
      <Route path="contact" component={Contact}/>
      <Route path="user/:name/:about" component={User}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

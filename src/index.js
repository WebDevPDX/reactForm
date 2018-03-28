import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App.js'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/form' component={App} />
      <Route path='/review' component={App} />
      <Route path='/final' component={App} />
    </div>
  </Router>,
  document.getElementById('root')
);
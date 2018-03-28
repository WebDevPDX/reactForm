import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './app/App.js';
import './index.css';

const url = 'http://localhost:3001/api/entry';

ReactDOM.render(
  <Router>
    <App url={url}/>
  </Router>,
  document.getElementById('root')
);

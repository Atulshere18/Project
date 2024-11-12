// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // optional, if you have a custom CSS file
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

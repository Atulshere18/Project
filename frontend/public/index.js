// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional: If you have any global CSS
import App from './App'; // Import the main App component
import { BrowserRouter as Router } from 'react-router-dom'; // Import React Router for routing

// Render the App component inside the div with id 'root' in index.html
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root') // This matches the id in index.html
);
// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional: If you have any global CSS
import App from './App'; // Import the main App component
import { BrowserRouter as Router } from 'react-router-dom'; // Import React Router for routing

// Render the App component inside the div with id 'root' in index.html
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root') // This matches the id in index.html
);

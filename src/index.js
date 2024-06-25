// src/index.js or src/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Add this line

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
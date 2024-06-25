import React from 'react';
import Weather from './Weather';
import './Weather.css';  // Import the CSS file for styling

export default function App() {
  return (
    <div className="app-container">
      <div className="weather-section">
        <h1><i className="fas fa-cloud-sun"></i> Weather App</h1>
        <Weather />
      </div>
    </div>
  );
}







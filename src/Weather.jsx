import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';  // Import the CSS file for styling

export default function Weather() {
  const [weather, setWeather] = useState({ city: '', temp: '' });
  const [city, setCity] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fecb8d615e54799b5f9424cb16c955bf&units=metric`
      )
      .then((res) => {
        setWeather({ city: res.data.name, temp: res.data.main.temp });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="weather-app">
      <form onSubmit={submitHandler} className="weather-form">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="city-input"
        />
        <button type="submit" className="get-weather-btn">Get Weather</button>
      </form>
      {weather.city && (
        <div className="weather-result">
          <h2>{weather.city}</h2>
          <p>{Math.floor(weather.temp)}°C</p>
        </div>
      )}
    </div>
  );
}



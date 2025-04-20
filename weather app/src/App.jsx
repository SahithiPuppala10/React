// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your actual API key

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const fetchWeather = async () => {
    setError('');
    setWeatherData(null);
    if (!city.trim()) {
      setError('Please enter a city name.');
      return;
    }

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError('City not found. Please try again.');
      } else {
        setError('Failed to fetch weather data.');
        console.error('Error fetching weather:', error);
      }
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={handleInputChange}
        />
        <button onClick={fetchWeather}>Get Weather</button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p className="temperature">Temperature: {weatherData.main.temp}°C</p>
          <p className="description">
            {weatherData.weather[0].main} ({weatherData.weather[0].description})
          </p>
          <p className="humidity">Humidity: {weatherData.main.humidity}%</p>
          <p className="wind">Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default App;
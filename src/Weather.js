import axios from "axios";
import React, { useState } from "react";
import "./Weather.css";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      feels_like: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
      description: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form>
            <input type="search" placeholder="Enter a city"></input>
            <input type="submit" value="Search"></input>
          </form>
          <h1>
            {weatherData.city}, {weatherData.country}
          </h1>
          <h2>Wednesday | June, 16 | 08h58</h2>
          <div className="row">
            <div className="col-5">
              <div className="row current-weather-description">
                {weatherData.description}
              </div>
              <div className="row">
                <div className=" col-4 current-temperature">
                  {Math.round(weatherData.temperature)}
                </div>
                <div className=" col-4 unit">
                  <div>
                    <input type="radio" id="celsius" defaultChecked></input>{" "}
                    <label for="celsius">°C</label>
                  </div>
                  <div>
                    <input type="radio" id="fahrenheit"></input>{" "}
                    <label for="fahrenheit">°F</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-2">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt={weatherData.description}
                id="weather-icon"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <ul>
            <li>🤔 Feels like: {Math.round(weatherData.feels_like)}°C</li>
            <li>💨 Wind: {Math.round(weatherData.wind * 3.6)} km/h</li>
            <li>💧 Humidity: {Math.round(weatherData.humidity)} %</li>
          </ul>
        </div>
      </div>
    );
  } else {
    const apiKey = "07fdd9a483e10a4554fcd7222bb43e7b";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=San Francisco&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
    return (
      <Loader
        id="loader"
        type="Puff"
        color="#E99497"
        height={100}
        width={100}
      />
    );
  }
}

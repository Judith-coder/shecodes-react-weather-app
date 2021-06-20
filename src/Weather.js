import axios from "axios";
import React, { useState } from "react";
import "./Weather.css";
import Loader from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import WeatherHourlyForecast from "./WeatherHourlyForecast";
import WeatherDailyForecast from "./WeatherDailyForecast";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
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
      date: new Date(response.data.dt * 1000),
      timeZoneOffsetSearchedCity: response.data.timezone, // Needed to calculate the local hour and date - timeZoneOffsetSearchedCity exprimé en secondes
    });
  }

  function search() {
    const apiKey = "07fdd9a483e10a4554fcd7222bb43e7b";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

    // Check if the city is valid
    var request = new XMLHttpRequest();
    request.open("GET", apiUrl, true);
    request.send();
    request.onload = function () {
      if (request.status === 404) {
        alert`Please enter your city again`;
        window.location.reload();
      } else {
        axios.get(apiUrl).then(handleResponse);
      }
    };
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityName(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city"
              onChange={handleCityName}
            ></input>
            <input type="submit" value="Search"></input>
          </form>
          <WeatherInfo data={weatherData} />
          <WeatherHourlyForecast />
          <WeatherDailyForecast />
        </div>
      </div>
    );
  } else {
    search();
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

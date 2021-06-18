import axios from "axios";
import React, { useState } from "react";
import "./Weather.css";
import Loader from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });

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

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form>
            <input type="search" placeholder="Enter a city"></input>
            <input type="submit" value="Search"></input>
          </form>
          <WeatherInfo data={weatherData} />
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

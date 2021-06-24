import React, { useState } from "react";

export default function WeatherChangeUnits(props) {
  const [unit, setUnit] = useState("celsius");
  const [chooseCelsius, setChooseCelsius] = useState(true);
  const [chooseFahrenheit, setChooseFahrenheit] = useState(false);

  function showCelsius() {
    setUnit("celsius");
    setChooseCelsius(true);
    setChooseFahrenheit(false);
  }

  function showFahrenheit() {
    setUnit("fahrenheit");
    setChooseCelsius(false);
    setChooseFahrenheit(true);
  }

  function fahrenheitTemperature() {
    return (props.celsiusTemperature * 9) / 5 + 32;
  }

  function fahrenheitFeelsLikeTemperature() {
    return (props.celsiusFeelsLike * 9) / 5 + 32;
  }

  function milesPerHour() {
    return props.wind / 1.609;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherChangeUnits">
        <div className="row">
          <div className=" col-4 current-temperature">
            {Math.round(props.celsiusTemperature)}
          </div>
          <div className=" col-4 unit">
            <div onClick={showCelsius}>
              <input
                type="radio"
                id="celsius"
                checked={chooseCelsius}
                onChange={showCelsius}
              ></input>{" "}
              <label for="celsius">°C</label>
            </div>
            <div onClick={showFahrenheit}>
              <input
                type="radio"
                id="fahrenheit"
                checked={chooseFahrenheit}
                onChange={showFahrenheit}
              ></input>{" "}
              <label for="fahrenheit">°F</label>
            </div>
          </div>
        </div>

        <div className="row">
          <ul>
            <li>🤔 Feels like: {Math.round(props.celsiusFeelsLike)}°C</li>
            <li>💨 Wind: {Math.round(props.wind)} km/h</li>
            <li>💧 Humidity: {Math.round(props.humidity)} %</li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherChangeUnits">
        <div className="row">
          <div className=" col-4 current-temperature">
            {Math.round(fahrenheitTemperature())}
          </div>
          <div className=" col-4 unit">
            <div onClick={showCelsius}>
              <input type="radio" id="celsius" checked={chooseCelsius}></input>{" "}
              <label for="celsius">°C</label>
            </div>
            <div onClick={showFahrenheit}>
              <input
                type="radio"
                id="fahrenheit"
                checked={chooseFahrenheit}
              ></input>{" "}
              <label for="fahrenheit">°F</label>
            </div>
          </div>
        </div>

        <div className="row">
          <ul>
            <li>
              🤔 Feels like: {Math.round(fahrenheitFeelsLikeTemperature())}°F
            </li>
            <li>💨 Wind: {Math.round(milesPerHour())} miles/h</li>
            <li>💧 Humidity: {Math.round(props.humidity)} %</li>
          </ul>
        </div>
      </div>
    );
  }
}

import React from "react";

export default function DisplayCurrentWeather(props) {
  return (
    <div className="DisplayCurrentWeather">
      <div className="row">
        <div className=" col-4 current-temperature">
          {Math.round(props.celsiusTemperature)}
        </div>
        <div className=" col-4 unit">°C</div>
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
}

import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherHourlyForecast() {
  return (
    <div className="WeatherDailyForecast">
      <h3 className="WeatherForecast-heading">Next days forecast</h3>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <h4 className="WeatherForecast-day">Mon</h4>
            <WeatherIcon
              code="02d"
              size={32}
              className="WeatherForecast-icon"
            />
            <span className="WeatherForecast-temperature">22°|26°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

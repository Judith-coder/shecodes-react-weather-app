import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherHourlyForecast() {
  return (
    <div className="WeatherHourlyForecast">
      <h3 className="WeatherForecast-heading">Next hours forecast</h3>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <h4 className="WeatherForecast-hour">16h23</h4>
            <WeatherIcon
              code="02d"
              size={32}
              className="WeatherForecast-icon"
            />
            <p className="WeatherForecast-temperature">22°</p>
          </div>
        </div>
      </div>
    </div>
  );
}

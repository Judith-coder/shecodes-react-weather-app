import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherHourlyForecast(props) {
  function temperatureMax() {
    let temperatureMax = Math.round(props.data.temp.max);
    return `${temperatureMax}°`;
  }
  function temperatureMin() {
    let temperatureMin = Math.round(props.data.temp.min);
    return `${temperatureMin}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="card">
      <div className="card-body" id="card-body-hourly-forecast">
        <h4 className="WeatherForecast-day">{day()}</h4>
        <WeatherIcon
          code={props.data.weather[0].icon}
          className="WeatherForecast-icon"
        />
        <div className="WeatherForecast-temperature">
          {temperatureMin()} | {temperatureMax()}
        </div>
      </div>
    </div>
  );
}

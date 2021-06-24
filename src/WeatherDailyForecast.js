import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherHourlyForecast(props) {
  function temperatureMax() {
    let temperatureMax = Math.round(props.data[0].temp.max);
    return `${temperatureMax}°`;
  }
  function temperatureMin() {
    let temperatureMin = Math.round(props.data[0].temp.min);
    return `${temperatureMin}°`;
  }
  function day() {
    let date = new Date(props.data[1].dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="WeatherDailyForecast">
      <h3 className="WeatherForecast-heading">Next days forecast</h3>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <h4 className="WeatherForecast-day">{day()}</h4>
            <WeatherIcon
              code={props.data[0].weather[0].icon}
              size={32}
              className="WeatherForecast-icon"
            />
            <span className="WeatherForecast-temperature">
              {temperatureMin()}|{temperatureMax()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

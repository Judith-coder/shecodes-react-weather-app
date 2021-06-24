import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherHourlyForecast(props) {
  function temperature() {
    let temperature = Math.round(props.data.temp);
    return `${temperature}°`;
  }

  function hour() {
    let date = new Date(props.data.dt * 1000);
    let currentTime = new Date();
    let currentLocationTimeZoneOffset = currentTime.getTimezoneOffset();
    let hour =
      date.getHours() +
      currentLocationTimeZoneOffset / 60 +
      props.timeZoneOffsetSearchedCity / 3600;

    if (hour >= 24) {
      hour = hour - 24;
    } else if (hour < 0) {
      hour = 24 + hour;
    }
    if (hour < 10) {
      hour = `0${hour}`;
    }

    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hour}:${minutes}`;
  }

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="WeatherForecast-hour">{hour()}</h4>
        <WeatherIcon
          code={props.data.weather[0].icon}
          size={32}
          className="WeatherForecast-icon"
        />
        <p className="WeatherForecast-temperature">{temperature()}</p>
      </div>
    </div>
  );
}

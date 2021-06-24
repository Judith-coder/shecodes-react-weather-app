import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherHourlyForecast() {
  function handleResponse(response) {}

  const apiKey = "07fdd9a483e10a4554fcd7222bb43e7b";
  const unit = "metric";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;

  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(handleResponse);

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

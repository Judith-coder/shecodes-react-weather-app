import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        {props.data.city}, {props.data.country}
      </h1>
      <h2>
        <FormattedDate
          date={props.data.date}
          timeZoneOffsetSearchedCity={props.data.timeZoneOffsetSearchedCity}
        />
      </h2>
      <div className="row">
        <div className="col-5">
          <div className="row current-weather-description">
            {props.data.description}
          </div>
          <div className="row">
            <div className=" col-4 current-temperature">
              {Math.round(props.data.temperature)}
            </div>
            <div className=" col-4 unit">
              <div>
                <input type="radio" id="celsius" defaultChecked></input>{" "}
                <label for="celsius">°C</label>
              </div>
              <div>
                <input type="radio" id="fahrenheit"></input>{" "}
                <label for="fahrenheit">°F</label>
              </div>
            </div>
          </div>
        </div>

        <div className="col-2 weather-icon">
          <WeatherIcon code={props.data.icon} />
        </div>
      </div>

      <div className="row">
        <ul>
          <li>🤔 Feels like: {Math.round(props.data.feels_like)}°C</li>
          <li>💨 Wind: {Math.round(props.data.wind * 3.6)} km/h</li>
          <li>💧 Humidity: {Math.round(props.data.humidity)} %</li>
        </ul>
      </div>
    </div>
  );
}

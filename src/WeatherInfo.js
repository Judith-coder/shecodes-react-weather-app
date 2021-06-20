import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherChangeUnits from "./WeatherChangeUnits";

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
          <WeatherChangeUnits
            celsiusTemperature={props.data.temperature}
            celsiusFeelsLike={props.data.feels_like}
            wind={props.data.wind * 3.6}
            humidity={props.data.humidity}
          />
        </div>
        <div className="col-2 weather-icon">
          <WeatherIcon code={props.data.icon} />
        </div>
      </div>
    </div>
  );
}

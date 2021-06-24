import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherHourlyForecast from "./WeatherHourlyForecast";
import WeatherDailyForecast from "./WeatherDailyForecast";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastDataHours, setForecastDataHours] = useState({});
  let [forecastDataDays, setForecastDataDays] = useState({});

  function handleResponse(response) {
    setForecastDataHours(response.data.hourly);
    setForecastDataDays(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <WeatherHourlyForecast
          data={forecastDataHours}
          timeZoneOffsetSearchedCity={props.timeZoneOffsetSearchedCity}
        />
        <WeatherDailyForecast
          data={forecastDataDays}
          timeZoneOffsetSearchedCity={props.timeZoneOffsetSearchedCity}
        />
      </div>
    );
  } else {
    const apiKey = "07fdd9a483e10a4554fcd7222bb43e7b";
    const unit = "metric";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}

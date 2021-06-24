import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="WeatherHourlyForecast">
          <h3 className="WeatherForecast-heading">Next hours forecast</h3>
          <div className="row">
            {forecastDataHours.map(function (hourlyForecast, index) {
              if (
                index === 2 ||
                index === 4 ||
                index === 6 ||
                index === 8 ||
                index === 10
              ) {
                return (
                  <div className="col" key={index}>
                    <WeatherHourlyForecast
                      data={hourlyForecast}
                      timeZoneOffsetSearchedCity={
                        props.timeZoneOffsetSearchedCity
                      }
                    />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
        <div className="WeatherDailyForecast">
          <h3 className="WeatherForecast-heading">Next days forecast</h3>
          <div className="row">
            {forecastDataDays.map(function (dailyForecast, index) {
              if (index >= 1 && index < 6) {
                return (
                  <div className="col" key={index}>
                    <WeatherDailyForecast
                      data={dailyForecast}
                      timeZoneOffsetSearchedCity={
                        props.timeZoneOffsetSearchedCity
                      }
                    />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
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

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./weather-icons.min.css";
//import "./font/weathericons-regular-webfont.eot";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "wi wi-day-sunny day",
    "01n": "wi wi-night-clear night",
    "02d": "wi wi-day-sunny-overcast day",
    "02n": "wi wi-night-alt-partly-cloudy night",
    "03d": "wi wi-day-cloudy day",
    "03n": "wi wi-night-alt-cloudy night",
    "04d": "wi wi-cloudy day",
    "04n": "wi wi-cloudy night",
    "09d": "wi wi-day-showers day",
    "09n": "wi wi-night-showers night",
    "10d": "wi wi-day-rain day",
    "10n": "wi wi-night-rain night",
    "11d": "wi wi-day-thunderstorm day",
    "11n": "wi wi-night-alt-thunderstorm night",
    "13d": "wi wi-day-snow day",
    "13n": "wi wi-night-snow night",
    "50d": "wi wi-day-fog day",
    "50n": "wi wi-night-fog night",
  };

  return <i className={codeMapping[props.code]} />;
}

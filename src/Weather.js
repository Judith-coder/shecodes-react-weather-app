import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <form>
          <input type="search" placeholder="Enter a city"></input>
          <input type="submit" value="Search"></input>
        </form>
        <h1>San Francisco, USA</h1>
        <h2>Wednesday | June, 16 | 08h58</h2>
        <div className="row">
          <div className="col-5">
            <div className="row current-weather-description">Clear</div>
            <div className="row">
              <div className=" col-4 current-temperature">21</div>
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

          <div className="col-2">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="weather-icon"
              id="weather-icon"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <ul>
          <li>🤔 Feels like: 21°C</li>
          <li>💨 Wind: 5km/h</li>
          <li>💧 Humidity: 71%</li>
        </ul>
      </div>
    </div>
  );
}

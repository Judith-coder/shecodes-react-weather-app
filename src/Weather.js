import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <form>
          <input type="search" placeholder="Enter a city"></input>
          <input type="submit" value="Search"></input>
        </form>
        <h1>Berlin, DE</h1>
        <h2>Monday | June, 14 | 17h34</h2>
        <div className="row">
          <div className="col-4">
            <div className="row">Clear</div>
            <div className="row">27°C</div>
          </div>

          <div className="col-4">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="weather-icon"
            />
          </div>
          <div className="col-4">
            <ul>
              <li>Feels like: 27°C</li>
              <li>Wind: 10km/h</li>
              <li>Humidity: 38%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

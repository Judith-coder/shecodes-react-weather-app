import React from "react";

export default function FormattedDate(props) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentLocationTimeZoneOffset = props.date.getTimezoneOffset(); // Time zone offset provided in minutes

  let month = props.date.getMonth();
  let day = props.date.getDay();
  let date = props.date.getDate();
  if (date < 10) {
    date = `0${date}`;
  }

  let hours =
    props.date.getHours() +
    currentLocationTimeZoneOffset / 60 +
    props.timeZoneOffsetSearchedCity / 3600;

  if (hours >= 24) {
    hours = hours - 24;
  } else if (hours < 0) {
    hours = 24 + hours;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      {days[day]} | {months[month]}, {date} | {hours}h{minutes}
    </div>
  );
}

import React from "react";

export default function () {
  function seeForecast(event) {
    event.preventDefault();
    alert("Forecast is not ready yet");
  }
  return (
    <a onClick={seeForecast} href="/">
      See Forecast
    </a>
  );
}

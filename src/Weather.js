import React from "react";

export default function Weather(props) {
  function currentTemperature(event) {
    event.preventDefault();
    alert("Coming soon...");
  }

  return <button onClick={currentTemperature}>current Temperature</button>;
}

import React from "react";
import WeatherLast from "../components/WeatherLast";
import WeatherFirst from "../components/WeatherFirst";
import Dropdown from "./Dropdown";

function Card() {
  return (
    <div className="mt-5 fluid ts ">
      <div className="container card">
        <div className="mt-2 ">
          <Dropdown />
        </div>
        <div className="container mt-3">
          <WeatherFirst />
        </div>
        <div className="container seven-day">
          <WeatherLast />
        </div>
      </div>
    </div>
  );
}

export default Card;

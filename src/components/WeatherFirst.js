import React, { useEffect } from "react";
import { fetchData } from "../redux/weatherSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function WeatherFirst() {
  const item = useSelector((state) => state.weather.items);
  const value = useSelector((state) => state.weather.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData(value));
  }, [value]);

  return (
    <div className="row">
      <div className="weather-card-2">
        <div className="col-sm-4 first ">
          <img
            src={` http://openweathermap.org/img/wn/${item[0]?.weather[0].icon}@2x.png`}
            alt=""
          />
          <h4>{item[0]?.weather[0].description}</h4>
        </div>
        <div className="col-sm-4 mid">
          <h3>{Math.floor(item[0]?.temp?.day)}°C</h3>
        </div>
      </div>
    </div>
  );
}

export default WeatherFirst;

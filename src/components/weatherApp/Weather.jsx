import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useWeather from "../../context/WeatherContext";

function Weather(props) {
  const { wicon, setWicon, data, setData, input, setInput } = useWeather();
  const { city } = useParams();

  useEffect(() => {
    setInput(city);
  }, [city]);

  return (
    <div>
      <h2>Weather Forecast for {city}</h2>
    </div>
  );
}

export default Weather;

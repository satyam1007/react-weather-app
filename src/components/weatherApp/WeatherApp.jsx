import React, { useState } from "react";
import clearIcon from "../assets/clear.png";
import cloudIcon from "../assets/cloud.png";
import drizzelIcon from "../assets/drizzle.png";
import rainIcon from "../assets/rain.png";
import snowIcon from "../assets/snow.png";

function WeatherApp() {
  const [wicon, setWicon] = useState(cloudIcon);
  const [data, setData] = useState({});
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.length === 0) {
      alert("Enter the city name ");
      return;
    }

    let apiKey = "0aa3184fd23a64e15c3690d3db907af3";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=Metric&appid=${apiKey}`;

    fetch(url)
      .then((res) => res.json())
      .then((userData) => {
        setData(userData);
        if (
          userData.weather[0].icon === "01d" ||
          userData.weather[0].icon === "01n"
        ) {
          setWicon(clearIcon);
        } else if (
          userData.weather[0].icon === "02d" ||
          userData.weather[0].icon === "02n"
        ) {
          setWicon(cloudIcon);
        } else if (
          userData.weather[0].icon === "03d" ||
          userData.weather[0].icon === "03n"
        ) {
          setWicon(drizzelIcon);
        } else if (
          userData.weather[0].icon === "04d" ||
          userData.weather[0].icon === "04n"
        ) {
          setWicon(drizzelIcon);
        } else if (
          userData.weather[0].icon === "09d" ||
          userData.weather[0].icon === "09n"
        ) {
          setWicon(rainIcon);
        } else if (
          userData.weather[0].icon === "010d" ||
          userData.weather[0].icon === "010n"
        ) {
          setWicon(rainIcon);
        } else if (
          userData.weather[0].icon === "013d" ||
          userData.weather[0].icon === "013n"
        ) {
          setWicon(snowIcon);
        } else {
          setWicon(clearIcon);
        }
        setInput("");
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };

  return (
    <div className="container">
      <form
        className="topBar mt-5 flex justify-center items-center gap-5"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={input}
          className="cityName w-1/2 p-2 border-2 border-gray-300 rounded-md outline-none"
          placeholder="Search"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-gray-300 text-black pl-4 pr-4 pt-2.5 pb-2.5 rounded-md"
        >
          Search
        </button>
      </form>
      <div className="weatherLocation text-4xl mt-5 tracking-wider">
        Weather of {data.name || ""}
      </div>
      <div className="weatherImage flex justify-center">
        <img src={wicon} alt="" />
      </div>
      <div className="flex justify-center flex-wrap gap-8 items-center mt-10">
        <div
          className="rounded-lg"
          style={{
            border: `2px solid #475569`,
            width: `272px`,
            height: `290px`,
          }}
        >
          <button className="bg-gray-100 w-full px-8 py-2 text-2xl tracking-widest rounded-md text-center border-b-2">
            Temprature
          </button>
          <div className="text-3xl pt-5">
            {data.main && data.main.temp && (
              <h3 className="weahtherTemp">{Math.floor(data.main.temp)} °C</h3>
            )}
          </div>

          <div className="pt-3">
            {data.main && data.main.temp_min && (
              <p className="minTemp">Min temprature is {data.main.temp_min}</p>
            )}
            {data.main && data.main.temp_max && (
              <p className="maxTemp">Max temprature is {data.main.temp_max}</p>
            )}
          </div>
          <button className="px-16 py-3 border-blue-500 border-2 rounded-md mt-7 text-blue-500">
            Sign up for free
          </button>
        </div>
        <div
          className="rounded-lg"
          style={{
            border: `2px solid #475569`,
            width: `272px`,
            height: `290px`,
          }}
        >
          <button className="bg-gray-100 w-full px-8 py-2 text-2xl tracking-widest rounded-t-md text-center border-b-2">
            Humidity Info
          </button>
          <div className="text-3xl pt-5">
            {data.main && data.main.humidity && (
              <h3 className="humidityPercentage">{data.main.humidity} %</h3>
            )}
          </div>
          <div className="pt-3">
            {data.wind && data.wind.deg && (
              <div className="windDegree">
                Wind Degree {Math.floor(data.wind.deg)}
              </div>
            )}

            {data.main && data.main.feels_like && (
              <div className="feelsLike">
                Feels Like {Math.floor(data.main.feels_like)}
              </div>
            )}

            {data.main && data.main.humidity && (
              <div className="humidity">
                Humidity is {Math.floor(data.main.humidity)}
              </div>
            )}
          </div>
          <button className="px-20 py-3 bg-blue-500 rounded-md mt-7 text-slate-100">
            Get Started
          </button>
        </div>
        <div
          className="rounded-lg"
          style={{
            border: `2px solid #475569`,
            width: `272px`,
            height: `290px`,
          }}
        >
          <button className="bg-blue-500 w-full px-8 py-2 text-2xl tracking-widest rounded-t-md text-center text-slate-100">
            Wind Info
          </button>
          <div className="text-3xl pt-5">
            {data.wind && data.wind.speed && (
              <h3 className="windRate">{Math.floor(data.wind.speed)} km/h</h3>
            )}
          </div>
          <div className="pt-3">
            {data.wind && data.wind.speed && (
              <div className="windSpeed">Wind Speed {data.wind.speed}</div>
            )}
            {data.sys && data.sys.sunrise && (
              <div className="sunRise">Sunrice Time is {data.sys.sunrise}</div>
            )}
            {data.sys && data.sys.sunset && (
              <div className="sunSet">Sunset Time is {data.sys.sunset}</div>
            )}
          </div>
          <button className="px-20 py-3 bg-blue-500 rounded-md mt-7 text-slate-100">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;

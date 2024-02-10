import React, { createContext, useContext, useState } from "react";

const defaultValues = {
  wicon: "cloudIcon",
  data: {},
  input: "",
};

export const WeatherContext = createContext(defaultValues);

export const WeatherProvider = ({ children }) => {
  const [wicon, setWicon] = useState(defaultValues.wicon);
  const [data, setData] = useState(defaultValues.data);
  const [input, setInput] = useState(defaultValues.input);

  return (
    <WeatherContext.Provider
      value={{ wicon, setWicon, data, setData, input, setInput }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default function useWeather() {
  return useContext(WeatherContext);
}

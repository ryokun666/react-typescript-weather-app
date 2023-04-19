import { useState } from "react";

//api.weatherapi.com/v1/current.json?key=13547371807a408a837122301231704&q=London&aqi=no

type FormPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function Form({ setCity, getWeather }: FormPropsType) {
  return (
    <div>
      <form onSubmit={getWeather}>
        <input
          type="text"
          name="city"
          placeholder="都市名"
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
}

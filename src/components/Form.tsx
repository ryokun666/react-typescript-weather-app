import { useState } from "react";

//api.weatherapi.com/v1/current.json?key=13547371807a408a837122301231704&q=London&aqi=no

type FormPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function Form(props: FormPropsType) {
  const [city, setCity] = useState<string>("");
  const getWeather = (e: any) => {
    e.preventDefault();
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=13547371807a408a837122301231704&q=London&aqi=no"
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <form onSubmit={props.getWeather}>
        <input
          type="text"
          name="city"
          placeholder="都市名"
          onChange={(e) => props.setCity(e.target.value)}
        />
      </form>
    </div>
  );
}

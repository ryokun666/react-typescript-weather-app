import React from "react";

type ResultsPropsType = {
  results: {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
  };
};

export default function Results({ results }: ResultsPropsType) {
  const { country, cityName, temperature, conditionText, icon } = results; // 分割代入(Destructuring aasignment)
  return (
    <>
      {country && <div>{country}</div>}
      {temperature && (
        <div>
          temperature
          <span>℃</span>
        </div>
      )}
      {conditionText && (
        <div>
          {conditionText}
          <span>℃</span>
        </div>
      )}
      {conditionText && (
        <div>
          <img src={icon} alt="icon" />
          <span>{conditionText}</span>
        </div>
      )}
    </>
  );
}

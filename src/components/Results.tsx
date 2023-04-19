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

export default function Results(props: ResultsPropsType) {
  return (
    <>
      {props.results.country && <div>{props.results.country}</div>}
      {props.results.temperature && (
        <div>
          props.results.temperature
          <span>℃</span>
        </div>
      )}
      {props.results.conditionText && (
        <div>
          {props.results.conditionText}
          <span>℃</span>
        </div>
      )}
      {props.results.conditionText && (
        <div>
          <img src={props.results.icon} alt="icon" />
          <span>{props.results.conditionText}</span>
        </div>
      )}
      {console.log(props)}
    </>
  );
}

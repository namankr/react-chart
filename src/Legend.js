import React from "react";
import "./App.css";

const Legend = (percentageData) => {
  const {
    composureScorePercentage,
    motivationScorePercentage,
    concentrationScorePercentage,
    energyScorePercentage,
    confidenceScorePercentage,
  } = percentageData.data;

  const data = [
    {
      name: "composureScorePercentage",
      value: composureScorePercentage,
      alias: "Composure",
    },
    {
      name: "motivationScorePercentage",
      value: motivationScorePercentage,
      alias: "Motivation",
    },
    {
      name: "concentrationScorePercentage",
      value: concentrationScorePercentage,
      alias: "Concentration",
    },
    {
      name: "energyScorePercentage",
      value: energyScorePercentage,
      alias: "Tirelessness",
    },
    {
      name: "confidenceScorePercentage",
      value: confidenceScorePercentage,
      alias: "Confidence",
    },
  ];

  const ListComponent = (data) => {
    console.log(data, "under list");
    return (
      <ul>
        {data.data.map((item, index) => {
            console.log(index, "index", item.name);
          <li key={item.name}>
            <div>{item.value}</div>
            <div>{item.alias}</div>
          </li>
        })}
      </ul>
    );
  };

  return (
    <>
      <p>Score Breakdown</p>
      
    </>
  );
};

export default Legend;

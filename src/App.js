import "./App.css";
import HustleGraph from "./HustleGraph";
import responseData from "./updated-response.json";

function App() {
  const { mentalData } = responseData.result.mental;
  const COLORS = ["#FEEFB8", "#FEDC62", "#FFC700", "#CA9D00", "#9A7A07"];
  const {
    composureScorePercentage,
    motivationScorePercentage,
    concentrationScorePercentage,
    energyScorePercentage,
    confidenceScorePercentage,
  } = mentalData;

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

  return (
    <>
      <div className="container-parent">
        <div className="hustle">HUSTLE</div>
        <div className="container-child1">
          <HustleGraph data={mentalData} />
        </div>
        <div className="container-child2">
          <div className="legend">
            <div>Score Breakdown</div>
          </div>
          <div className="list" >
            {data.map((item, index) => {
              return (
                <div className="col" key={index}>
                  <div className="dot" style ={{backgroundColor: COLORS[index]}}></div>
                  <span> {`${item.value} %`}</span>
                  <span> {item.alias} </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

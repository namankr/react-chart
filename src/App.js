import logo from "./logo.svg";
import "./App.css";
import Graph1 from "./Graph1";
import Graph2 from "./Graph2";
import Graph3 from "./Graph3";
import Legend from "./Legend";
import HustleGraph from "./HustleGraph";
import responseData from "./updated-response.json";

function App() {
  const { mentalData } = responseData.result.mental;
  return (
    <>
      <div className="container-parent">
        <div className="hustle">HUSTLE</div>
        <div className="container-child1">
          {/* <Graph1 data={responseData.result.mental.moodData} />
        <Graph2 data={responseData.result.mental.moodData}/>
        <Graph3 data={responseData.result.mental.moodData} /> */}
          <HustleGraph data={mentalData} />
        </div>
        <div className="container-child2">
          <div className="legend">
            <Legend data={mentalData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

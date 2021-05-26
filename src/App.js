import logo from "./logo.svg";
import "./App.css";
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

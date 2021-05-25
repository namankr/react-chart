import logo from './logo.svg';
import './App.css';
import Graph1 from './Graph1';
import Graph2 from './Graph2';
import Graph3 from './Graph3';
import responseData from './updated-response.json';


function App() {
  return (
    <>
      <div className="container">
        <Graph1 data={responseData.result.mental.moodData} />
        <Graph2 data={responseData.result.mental.moodData}/>
        <Graph3 data={responseData.result.mental.moodData} />
      </div>
    </>
  );
}

export default App;

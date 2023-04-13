import { useState } from "react";
import BarChart from "./components/BarChart";

import "./App.css";
import LineChart from "./components/LineChart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2>Bar Chart</h2>
      <BarChart data={[12, 5, 6, 6, 9, 10]} width={700} height={300} />
      <br />
      <br />
      <h2>Line Chart</h2>
      <LineChart />
    </div>
  );
}

export default App;

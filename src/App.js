import { useState } from "react";
import Horizontal from "./components/Horizontal";
import Vertical from "./components/Vertical";

function App() {
  const [direction, setDirection] = useState(false);

  return (
    <div className="App">
      <div className="wrapper">
        <button onClick={() => setDirection('vertical')}>Vertical</button>
        <button onClick={() => setDirection('horizontal')}>Horizontal</button>
      </div>
      {direction === "vertical" ? <Vertical /> : <Horizontal />}
    </div>
  );
}

export default App;

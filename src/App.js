import React, { useState } from "react";
import "./App.css";
import Autorisation from "./component/autrisation";
import Black from "./component/black";

function App() {
  const [state, setState] = useState(true);
  return (
    <div className="App">
      {state ? (
        <Autorisation setState={setState} />
      ) : (
        <Black setState={setState} />
      )}
    </div>
  );
}

export default App;

import * as React from "react";
import "./App.css";
import Request1 from "./request1";
import plus from "./plus.svg"

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">

        <Request1 />
      </header>
      <div className="test">
           <img src={plus} className="img"/>
        </div>
    </div>
  );
};

export default App;

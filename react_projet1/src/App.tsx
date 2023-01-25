import * as React from "react";
import "./App.css";
import Request1 from "./request1";
import plus from "./plus.svg"


interface IProps {
}

const App: React.FC<IProps> = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <Request1 />
        <div className="test">
          <img src={plus} className="imgPlus"/>
      </div>  
      </header>

    </div>
  );
};

export default App;

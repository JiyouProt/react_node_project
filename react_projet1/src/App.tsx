import * as React from "react";
import "./App.css";
import Request1 from "./request1";
import plus from "./plus.svg"
import { ITile } from "./interface/tile.interface";



interface IStates {
  data: ITile[];
}

class App extends React.Component<{}, IStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      data : [],
    };
  }

  newTile : ITile = {
  userId : 300,
  id : 300,
  title : "jacob",
  completed : "true"
  };

  private addcard = () =>{
    console.log("add");
    let data = this.state.data!;
    data.push(this.newTile);
    this.setState({data});
  };

  render() {
  return (
    <div className="App">
      <header className="App-header">
       <div className="test">
          <img src={plus} className="img" onClick={()=>this.addcard()}/>
      </div>  
        <Request1 newTabTile={this.state.data}/>
      </header>
    </div>
  );}
};

export default App;

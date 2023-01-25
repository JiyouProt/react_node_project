import * as React from "react";
import { ITile } from "../interface/tile.interface";
import "./styles.css";
import croix from "../croix.svg";



interface IProps {
  delete(id: number): void;
  key: any;
  tile: ITile;
}

interface IStates {
}

class ProfileTile extends React.Component<IProps, IStates> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  

  render() {
    return( 
        <div className="card horizontal">
                  <div className="card-content">
                    <p className="textCard">User Id : {this.props.tile.userId}</p>
                    <p className="textCard">Id : {this.props.tile.id}</p>
                    <p className="textCard">Title : {this.props.tile.title}</p>
                    <p className="textCard">completed : {this.props.tile.completed}</p>
                  </div>
              <div className ="card-image">
                   <img src={croix} className="img" onClick={()=>this.props.delete(this.props.tile.id)}/>
              </div>
        </div>
  )
  }
}

export default ProfileTile;

import * as React from "react";
import { ITile } from "../interface/tile.interface";
import "./styles.css";
import croix from "../croix.svg";



interface IProps {
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
    function suppresionTile(): void {
      throw new Error("Function not implemented.");
    }

    return( 
    <div className="col s6 m6">
        <div className="card horizontal">
              <div className="card-stacked">
                  <div className="card-content">
                    <p className="textCard">User Id : {this.props.tile.userId}</p>
                    <p className="textCard">Id : {this.props.tile.id}</p>
                    <p className="textCard">Title : {this.props.tile.title}</p>
                    <p className="textCard">completed : {this.props.tile.completed}</p>
                  </div>
              </div>
              <div className ="card-image">
                   <img src={croix} className="img" onClick={()=>suppresionTile()}/>
              </div>

        </div>
  </div>)
  }
}

export default ProfileTile;

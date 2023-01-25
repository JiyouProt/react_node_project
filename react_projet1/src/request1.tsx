import * as React from "react";
import axios from "axios";
import ProfileTile from "./profileTile";
import { ITile } from "./interface/tile.interface";
import "./profileTile/styles.css";
import plus from "./plus.svg"


const instance = axios.create({ baseURL: "http://localhost:3000" });

interface IStates {
  isLoading: boolean;
  data: ITile[] | undefined;
}

class Request1 extends React.Component<{}, IStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: true,
      data: undefined,
    };
  }

  componentDidMount() {
    instance
      .get("/api")
      .then((response: any) => {
        this.setState({
          isLoading: false,
          data: response.data,
        });
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  newTile : ITile = {
  userId : 300,
  id : 300,
  title : "jacob",
  completed : "true"
  };



  private deleteTile = (id: number) => { 
    let data = this.state.data!;
    data.splice(id,1);
    this.setState({data}); 
    }

    private ajoutTile = () => { 
      this.state.data?.push(this.newTile);
      this.setState({data: this.state.data});
      }; 

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <p>Loading...</p>
        ) : (

      //  <div className="test">
      //     <img src={plus} className="img" onClick={()=>this.ajoutTile}/>
          <div className="container">
            {this.state.data && this.state.data.map((elt: ITile, index: number) => (
              <ProfileTile delete={this.deleteTile} key={index} tile={elt} />
            ))}
          </div>
          // </div> 
        )}
      </div>
    );
  }
}

export default Request1;
import * as React from "react";
import axios from "axios";
import ProfileTile from "./profileTile";
import { ITile } from "./interface/tile.interface";
import "./profileTile/styles.css";

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


  private deleteTile = (id: any) => { 
    console.log(id);
    var data1: ITile[] | undefined;
    data1 = this.state.data?.splice(id);
    this.setState({isLoading:false,data:data1}); 
    }

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="container">
            {this.state.data && this.state.data.map((elt: ITile, index: any) => (
              <ProfileTile delete={this.deleteTile} key={index} tile={elt} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Request1;

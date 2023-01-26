  import * as React from "react";
  import axios from "axios";
  import ProfileTile from "./profileTile";
  import { ITile } from "./interface/tile.interface";
  import "./profileTile/styles.css";
  import plus from "./plus.svg"


  const instance = axios.create({ baseURL: "http://localhost:3000" });

  interface IProps {
    newTabTile:ITile[];
  }

  interface IStates {
    isLoading: boolean;
    data: ITile[] ;
    newdata: ITile[] ;
  }

  class Request1 extends React.Component<IProps, IStates> {
    constructor(props: any) {
      console.log("Request1");
      super(props);
      this.state = {
        isLoading : true,
        data: [],
        newdata: [],
      };
    }

  i : number =0;

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

        this.setState({
          newdata: []});
    }



    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<IStates>, snapshot?: any): void {
      if (this.props.newTabTile.length == 1){
        const found = prevState.data?.find(element => element.id == this.props.newTabTile[0].id);
        if(typeof found =="undefined" ){
              let newTabTile : ITile[] = this.state.data;
              newTabTile.push(this.props.newTabTile[0]);
              this.setState({data:newTabTile});
              this.props.newTabTile.splice(0);
      }
      }
  }

    private deleteTile = (id: number) => { 
      let data = this.state.data!;
      data.splice(id,1);
      this.setState({data}); 
      }

    render() {
      return (
        <div>
          {this.state.isLoading ? (
            <p>Loading...</p>
          ) : (
            <div className="container">
              {this.state.data && this.state.data.map((elt: ITile, index: number) => (
                <ProfileTile delete={this.deleteTile} key={index} tile={elt} />
              ))}
            </div>
          )}
        </div>
      );
    }
  }

  export default Request1;
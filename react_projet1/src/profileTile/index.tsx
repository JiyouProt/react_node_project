import * as React from "react";
import { ITile } from "../interface/tile.interface";

interface IProps {
  tile: ITile;
}

interface IStates {}

class ProfileTile extends React.Component<IProps, IStates> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>{this.props.tile.title}</div>;
  }
}

export default ProfileTile;

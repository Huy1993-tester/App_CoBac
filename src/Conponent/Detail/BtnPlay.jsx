import React, { Component } from "react";

export default class BtnPlay extends Component {
  render() {
    const { handleGamePlay } = this.props;
    return (
      <button className="btn btn-success" style={{ fontSize: 30 }} onClick={()=>handleGamePlay()}>
        PLAY GAME
      </button>
    );
  }
}

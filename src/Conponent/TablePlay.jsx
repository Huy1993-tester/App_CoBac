import React, { Component } from "react";
import BtnTaiOrXiu from "./Detail/BtnTaiOrXiu";
import XucXac from "./Detail/XucXac";

export default class TablePlay extends Component {
  renderImgXucXac = () => {
    let { xucXac } = this.props;
    return xucXac.map((xucXac) => {
      return <XucXac xucXacs={xucXac} />;
    });
  };
  render() {
    const { handleChoice } = this.props;
    return (
      <div className="row text-center">
        <div className="col-4">
          <BtnTaiOrXiu taiOrXiu={true} handleChoice={handleChoice} />
        </div>
        <div className="col-4">
          <div className="d-flex justify-content-center">
            {this.renderImgXucXac()}
          </div>
        </div>
        <div className="col-4">
          <BtnTaiOrXiu taiOrXiu={false} handleChoice={handleChoice} />
        </div>
      </div>
    );
  }
}

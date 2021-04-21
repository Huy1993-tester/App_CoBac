import React, { Component } from "react";

export default class BtnTaiOrXiu extends Component {
  state = {
    color: "bg-info display-4 p-5 text-light",
  };
  changeColor = () => {
    this.setState({
      color: "bg-danger display-4 p-5 text-light",
    });
  };
  render() {
    const { taiOrXiu, handleChoice } = this.props;
    return (
      <button
        className={this.state.color}
        onClick={() => handleChoice(taiOrXiu)}
      >
        {taiOrXiu ? "Tài" : "Xỉu"}
      </button>
    );
  }
}

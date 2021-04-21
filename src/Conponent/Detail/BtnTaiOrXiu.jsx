import React, { Component } from "react";

export default class BtnTaiOrXiu extends Component {
  render() {
    const { taiOrXiu, handleChoice } = this.props;
    return (
      <button
        className="bg-danger display-4 p-5 text-light"
        onClick={() => handleChoice(taiOrXiu)}
      >
        {taiOrXiu ? "Tài" : "Xỉu"}
      </button>
    );
  }
}

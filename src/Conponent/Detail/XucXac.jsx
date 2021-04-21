import React, { Component } from "react";

export default class XucXac extends Component {
  render() {
    const { xucXacs } = this.props;
    return (
      
        <img src={xucXacs.hinhAnh} width={50} height={50} alt="hinh" />
     
    );
  }
}

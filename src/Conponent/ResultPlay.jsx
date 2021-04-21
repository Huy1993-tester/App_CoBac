import React, { Component } from "react";

export default class ResultPlay extends Component {
  render() {
    const { banChon, soBanThang, soBanChoi } = this.props;
    return (
      <div className="container text-center display-4">
        <div>
          bạn chọn :
          <span className="text-danger">{banChon ? "Tài" : "Xỉu"}</span>
        </div>
        <div>
          số bàn thắng : <span className="text-success">{soBanThang}</span>
        </div>
        <div>
          tổng số bàn chơi : <span className="text-warning">{soBanChoi}</span>
        </div>
      </div>
    );
  }
}

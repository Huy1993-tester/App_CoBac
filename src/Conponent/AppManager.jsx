import React, { Component } from "react";
import BtnPlay from "./Detail/BtnPlay";
import ResultPlay from "./ResultPlay";
import TablePlay from "./TablePlay";

const renderRandom = () => {
  return Math.floor(Math.random() * 6);
};
export default class AppManager extends Component {
  xucXacMau = [
    {
      hinhAnh: "./img/gameXucXac/1.png",
      soDiem: 1,
    },
    {
      hinhAnh: "./img/gameXucXac/2.png",
      soDiem: 2,
    },
    {
      hinhAnh: "./img/gameXucXac/3.png",
      soDiem: 3,
    },
    {
      hinhAnh: "./img/gameXucXac/4.png",
      soDiem: 4,
    },
    {
      hinhAnh: "./img/gameXucXac/5.png",
      soDiem: 5,
    },
    {
      hinhAnh: "./img/gameXucXac/6.png",
      soDiem: 6,
    },
  ];
  state = {
    banChon: false,
    soBanThang: 0,
    soBanChoi: 0,
    xucXac: [
      {
        hinhAnh: "./img/gameXucXac/1.png",
        soDiem: 1,
      },
      {
        hinhAnh: "./img/gameXucXac/2.png",
        soDiem: 2,
      },
      {
        hinhAnh: "./img/gameXucXac/3.png",
        soDiem: 3,
      },
    ],
  };

  handleGamePlay = () => {
    let count = 0;
    const lacXucXac = setInterval(() => {
      const xucXac = [
        this.xucXacMau[renderRandom()],
        this.xucXacMau[renderRandom()],
        this.xucXacMau[renderRandom()],
      ];
      this.setState({
        xucXac: xucXac,
      });

      count += 1;
      if (count > 10) {
        clearInterval(lacXucXac);
        this.handleResult();
      }
    }, 100);
  };
  handleResult = () => {
    const { banChon, xucXac } = this.state;
    const tongDiem = xucXac.reduce((tongDiem, item) => {
      return (tongDiem += item.soDiem);
    },0);
    let taiOrXiu;
    if (tongDiem <= 9) {
      taiOrXiu = false;
    } else {
      taiOrXiu = true;
    }
    if (banChon === taiOrXiu) {
      this.setState({
        soBanThang: (this.state.soBanThang += 1),
        soBanChoi: (this.state.soBanChoi += 1),
      });
    } else {
      this.setState({
        soBanChoi: (this.state.soBanChoi += 1),
      });
    }
  };
  handleChoice = (taiOrXiu) => {
    this.setState({
      banChon: taiOrXiu,
    });
  };

  render() {
    const { xucXac, banChon, soBanChoi, soBanThang } = this.state;
    return (
      <div>
        <div>
          <div
            className="gameXucXac"
            style={{
              backgroundImage: 'url("./img/gameXucXac/bgGame.png")',
              width: "100%",
              height: "100%",
              position: "fixed",
              left: 0,
              top: 0,
            }}
          >
            <div className="container">
              <h3 className="display-4 text-center">GAME XÚC XẮC</h3>
              <TablePlay xucXac={xucXac} handleChoice={this.handleChoice} />
            </div>
            <ResultPlay
              banChon={banChon}
              soBanChoi={soBanChoi}
              soBanThang={soBanThang}
            />
            <div className="text-center">
              <BtnPlay handleGamePlay={this.handleGamePlay} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

import SemiCircleProgressBar from "react-progressbar-semicircle";

export default class App extends Component {
  render() {
    return (
      <div>
        <SemiCircleProgressBar percentage={33} />
        <SemiCircleProgressBar percentage={33} showPercentValue />
      </div>
    );
  }
}

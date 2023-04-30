import React, { Component } from 'react';
import ReactSpeedometer from 'react-d3-speedometer';


export default class SpeedMeter extends Component {
  render() {
    return (
      <ReactSpeedometer value={80} maxValue={100} />
    );
  }
}







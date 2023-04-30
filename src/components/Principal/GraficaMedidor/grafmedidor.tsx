import React, { Component } from 'react';
import ReactSpeedometer from 'react-d3-speedometer';


export default class SpeedMeter extends Component {
  render() {
    return (
      <ReactSpeedometer value={50} maxValue={100} />
    );
  }
}








































/* import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import Box from "@mui/material/Box";
const data = {

  datasets: [
    {
      data: [500, 500, 500],
      backgroundColor: ["red", "#FFCE56", "lightgreen"],
      hoverBackgroundColor: ["red", "#FFCE56", "lightgreen"]
    }
  ],
  options: {
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
    legend: {
      display: false
    },
    tooltip: {
      enabled: false
    },
    cutoutPercentage: 70
  }
};

export default class MedidorChart {
  render() {
    return (
      <Box>
        <Doughnut height="100px" data={data} options={data.options} />
      </Box>
      
    );
  }
} */
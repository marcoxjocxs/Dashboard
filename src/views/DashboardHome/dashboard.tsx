import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header/header";
import LayoutLeft from "../../components/LayoutLeft/layoutleft";
import Grafica1 from "../../components/Principal/Graf1/Grafica1";
import Dashboardfinal from "../DashboardFinal/dashboardfinal";
import DashboardInfo from "../DashboardInfo/DashboardInfo";
import { Bar2 } from "../../components/Principal/Graf2/grafica2";
import { Graf4 } from "../../components/Principal/Graf4/Grafica4Pastel";
import { Fullscreen } from "@mui/icons-material";
import { Grafica3 } from "../../components/Principal/Graf3/Grafica3";
export default function DashboardHome() {
  return (
    <>
      <Header />
      <DashboardInfo />
      <Box minWidth={"300px"} maxHeight={"300px"} display="flex">
        <Bar2 />

        <Grafica3 />

        <Graf4 />
      </Box>
      <Dashboardfinal />
    </>
  );
}

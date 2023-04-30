import { Box } from "@mui/material";
import Header from "../../components/Header/header";
import Dashboardfinal from "../DashboardFinal/dashboardfinal";
import DashboardInfo from "../DashboardInfo/DashboardInfo";
import { Bar2 } from "../../components/Principal/Graf2/grafica2";
import { Graf4 } from "../../components/Principal/Graf4/Grafica4Pastel";
import { Grafica3 } from "../../components/Principal/Graf3/Grafica3";
import CardPart1FULL from "../../components/Cards/CardPart1";
import CardPart2FULL from "../../components/Cards/CardPart2";
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
      <CardPart1FULL/>
      <CardPart2FULL/>
    </>
  );
}

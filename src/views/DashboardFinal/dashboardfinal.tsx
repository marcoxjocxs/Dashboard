import { Box } from "@mui/material";
import React from "react";
import Cards1 from "../../components/Cards/card1";
import Cards2 from "../../components/Cards/card2";
import Cards3 from "../../components/Cards/card3";
import Cards4 from "../../components/Cards/card4";
import Cards5 from "../../components/Cards/card5";

import Header from "../../components/Header/header";

export default function Dashboardfinal() {
  return (
    <>
      <Box display={"flex"}>
        <Cards1 />
        <Cards2 />
        <Cards3 />
        <Cards4 />
        <Cards5 />
      </Box>
    </>
  );
}

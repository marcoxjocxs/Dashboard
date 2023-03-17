import { Box } from "@mui/material";
import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LayoutLeft from "../../components/LayoutLeft/layoutleft";
import Grafica1 from "../../components/Principal/Graf1/Grafica1";

import BasicTable from "../../components/Principal/Tabla/tableInfo";
import { Graf4 } from "../../components/Principal/Graf4/Grafica4Pastel";
const DashboardInfo = () => {
  return (
    <>
      <Box style={{ paddingTop: "100px", paddingBottom: "50px" }} border="1px solid black">
        <Grid container>
          <Grid item xs={4} md={3}>
            <Box>
              <LayoutLeft />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Grafica1 />
              
            </Box>
          </Grid>
          <Grid item xs={4} md={3}>
            <Box>
              <BasicTable />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default DashboardInfo;

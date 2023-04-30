import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import LayoutLeft from "../../components/LayoutLeft/layoutleft";
import Grafica1 from "../../components/Principal/Graf1/Grafica1";

import BasicTable from "../../components/Principal/Tabla/tableInfo";
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

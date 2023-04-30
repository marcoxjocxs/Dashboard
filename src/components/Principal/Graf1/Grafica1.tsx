import { Box } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { Bar1 } from "./BarChart/barchart";

const Grafica1 = () => {
/*   const [dis, setDis] = React.useState("");
  const [mtbf, setmtbf] = React.useState("");
  const [mttr, setmttr] = React.useState("");
  const [inter, setinter] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setDis(event.target.value as string);
    setmtbf(event.target.value as string);
    setmttr(event.target.value as string);
    setinter(event.target.value as string);
  }; */
  return (
    <>
      <Box>
        <Box>
          <Grid container>
            <Grid item xs={3}>
              <Box display={"flex"}>
                <Box>
                  <h4>Disponibilidad</h4>
                </Box>
                <Box>
                  <TextField
                    id="outlined-basic"
                    label=""
                    variant="outlined"
                    size="small"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box display={"flex"}>
                <Box>
                  <h4>MTBF</h4>
                </Box>
                <Box>
                  <TextField
                    id="outlined-basic"
                    label=""
                    variant="outlined"
                    size="small"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box display={"flex"}>
                <Box>
                  <h4>MTTR</h4>
                </Box>
                <Box>
                  <TextField
                    id="outlined-basic"
                    label=""
                    variant="outlined"
                    size="small"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box display={"flex"}>
                <Box>
                  <h4>Intervenciones</h4>
                </Box>
                <Box>
                  <TextField
                    id="outlined-basic"
                    label=""
                    variant="outlined"
                    size="small"
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Box>
            <Grid container>
              <Grid item xs={3}>
                <Box display={"flex"} paddingTop="40px">
                  <Box alignItems={"center"} textAlign="center">
                    <Typography variant="h6">Preventivos</Typography>
                    <TextField
                      id="outlined-basic"
                      label=""
                      variant="outlined"
                      size="small"
                    />
                    <TextField
                      id="outlined-basic"
                      label=""
                      variant="outlined"
                      size="small"
                    />
                  </Box>
                </Box>
                <Box display={"flex"}>
                  <Box alignItems={"center"} textAlign="center">
                    <Typography variant="h6">Correctivos</Typography>
                    <TextField
                      id="outlined-basic"
                      label=""
                      variant="outlined"
                      size="small"
                    />
                    <TextField
                      id="outlined-basic"
                      label=""
                      variant="outlined"
                      size="small"
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={9}>
                <Box margin={"0px 10px"}>
                  <Box border={"1px solid black"}>
                    {/* //Grafica 1 */}
                    <Bar1 />
                  </Box>
                  {/* <Box margin={"0 40px"}>
                    <Bar2 />
                  </Box> */}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Grafica1;

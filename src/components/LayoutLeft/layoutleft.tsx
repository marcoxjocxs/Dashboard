import { Box } from "@mui/material";
import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "../../utils/Styles/layoutLeft.css";
import TextField from "@mui/material/TextField";
const LayoutLeft = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <>
      <Box className="BoxMenu">
        <Grid container>
          <Grid item md={4} alignSelf="center">
            <Box
              border={"3px solid blue"}
              borderRadius={"5px"}
              marginRight="0.2rem"
            >
              <Typography variant="h6">Tipo de Equipo</Typography>
            </Box>
          </Grid>
          <Grid item md={4}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label"></InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Box className="BoxMenu">
          <Grid container>
            <Grid item md={4} alignSelf="center">
              <Box
                border={"3px solid blue"}
                borderRadius={"5px"}
                marginRight="0.2rem"
              >
                <Typography variant="h6">Equipo</Typography>
              </Box>
            </Grid>
            <Grid item md={4}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>PE06</MenuItem>
                  <MenuItem value={20}>PE01</MenuItem>
                  <MenuItem value={30}>PE04</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
        <Box className="BoxMenu">
          <Grid container>
            <Grid item md={4} alignSelf="center">
              <Box
                border={"3px solid blue"}
                borderRadius={"5px"}
                marginRight="0.2rem"
              >
                <Typography variant="h6">Ultimo Pm</Typography>
              </Box>
            </Grid>
            <Grid item md={4}>
            <TextField
                id="outlined-basic"
                label=""
                variant="outlined"
                size="small"
              />
            </Grid>
          </Grid>
        </Box>
        <Box className="BoxMenu">
          <Grid container>
            <Grid item md={4} alignSelf="center">
              <Box
                border={"3px solid blue"}
                borderRadius={"5px"}
                marginRight="0.2rem"
              >
                <Typography variant="h6">Horometro</Typography>
              </Box>
            </Grid>
            <Grid item md={4}>
              <TextField
                id="outlined-basic"
                label=""
                variant="outlined"
                size="small"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default LayoutLeft;

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MedidorChart from "../Principal/GraficaMedidor/grafmedidor";
import SpeedMeter from "../Principal/GraficaMedidor/grafmedidor";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function createData(id:number,fecha: String, cantidad: number) {
  return {id, fecha, cantidad };
}

const rows = [createData(1,"31-May", 15578)];

export default function Cards1() {
  return (
    <Card sx={{ minWidth: 275 ,minHeight:200}}>
      <Box width={"300px"} border="1px solid black">
        <Box display={"flex"}>
          <Box paddingRight={"5px"}>
            <Typography variant="h5" component="div">
              Acumulador
            </Typography>
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
        <Box paddingTop={4}>
          <TableContainer component={Paper} >
            <Table aria-label="simple table" size="small">
              <TableHead></TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    
                  >
                    <TableCell align="right">{row.fecha}</TableCell>
                    <TableCell align="right">{row.cantidad}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box paddingTop={10}>
          <SpeedMeter></SpeedMeter>
        </Box>
      </Box>
    </Card>
  );
}

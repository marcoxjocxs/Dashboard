import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

function createData(
  numero: number,
  description: string,
  aviso: number,
  reserva: string,
  estado: string
) {
  return { numero, description, aviso, reserva, estado };
}

const rows = [
  createData(410, "Grupo Condensador", 15578, "", "R"),
  createData(411, "Bl 398IVAC cambio  de CE", 14856, "", "R"),
  createData(412, "Bl HVAC cambio  de HC", 115724, "", "A"),
];

export default function BasicTable() {
  return (
    <Box border={"1px solid black"} margin="0px 10px">
      <Box border={"1px solid black"} textAlign="center">
        <h5>Backlogs</h5>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Numero</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Aviso</TableCell>
              <TableCell align="right">Reserva</TableCell>
              <TableCell align="right">Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.numero}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.numero}
                </TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.aviso}</TableCell>
                <TableCell align="right">{row.reserva}</TableCell>
                <TableCell align="right">{row.estado}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

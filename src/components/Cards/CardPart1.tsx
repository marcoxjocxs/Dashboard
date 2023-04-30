import { Box, Grid } from "@mui/material";
import "../../components/Cards/styleCards.scss";
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SpeedMeter from "../Principal/GraficaMedidor/grafmedidor";
import SpeedMeter2 from "../Principal/GraficaMedidor/grafmedidor2";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
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

function createData(id: number, fecha: String, cantidad: number) {
  return { id, fecha, cantidad };
}

const rows = [createData(1, "31-May", 15578)];
const rows1 = [createData(1, "31-May", 15578), createData(2, "4-Jun", 5124)];
const rows2 = [createData(1, "8-Ene", 15578)];
export default function CardPart1FULL() {
  /* const classes = useStyles(); */

  return (
    <Box width="100%" paddingBottom="80px">
      <Box>
        <Box textAlign="center" paddingBottom="8%">
          <Typography className="textCertification">Nuevos Styles</Typography>
        </Box>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={12} md={5} lg={4} className="cardUnidadCertificado">
              <Box className="Cards">
                <Box className="TittleCardFirst">
                  <Box paddingRight={"50px"}>
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
                <Box className="CardSecondPart">
                  <TableContainer component={Paper}>
                    <Box>
                      <Box>
                        {rows.map((row) => (
                          <TableRow key={row.id}>
                            <TableCell align="right">{row.fecha}</TableCell>
                            <TableCell align="right">{row.cantidad}</TableCell>
                          </TableRow>
                        ))}
                      </Box>
                    </Box>
                  </TableContainer>
                </Box>
                <Box className="CardThirdPart">
                  <SpeedMeter></SpeedMeter>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={8} lg={4} className="cardUnidadCertificado">
              <Box className="Cards">
                <Box className="TittleCardFirst">
                  <Box paddingRight={"50px"}>
                    <Typography variant="h5" component="div">
                      Blower
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
                <Box className="CardSecondPart">
                  <TableContainer component={Paper}>
                    <Box>
                      <Box>
                        {rows1.map((row) => (
                          <TableRow key={row.id}>
                            <TableCell align="right">{row.fecha}</TableCell>
                            <TableCell align="right">{row.cantidad}</TableCell>
                          </TableRow>
                        ))}
                      </Box>
                    </Box>
                  </TableContainer>
                </Box>
                <Box className="CardThirdPart">
                  <SpeedMeter2></SpeedMeter2>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={8} lg={4} className="cardUnidadCertificado">
              <Box className="Cards">
                <Box className="TittleCardFirst">
                  <Box paddingRight={"50px"}>
                    <Typography variant="h5" component="div">
                      Chapa Puerta
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
                <Box className="CardSecondPart">
                  <TableContainer component={Paper}>
                    <Box>
                      <Box>
                        {rows2.map((row) => (
                          <TableRow key={row.id}>
                            <TableCell align="right">{row.fecha}</TableCell>
                            <TableCell align="right">{row.cantidad}</TableCell>
                          </TableRow>
                        ))}
                      </Box>
                    </Box>
                  </TableContainer>
                </Box>
                <Box className="CardThirdPart">
                  <SpeedMeter></SpeedMeter>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

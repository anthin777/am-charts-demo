import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import TrendChart from './components/TrendChart';
import "./App.css";


function App() {
 
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1, margin: "16px", maxHeight: "400px" }}>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  color="text.secondary"
                  align="left"
                >
                  Net Sales
                </Typography>
                <Typography sx={{ mb: 1.5 }} align="left">
                  $14.7M
                </Typography>

               <TrendChart id="net-sales" />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={7}>
          <Card sx={{ minWidth: 275 }}>
          <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  color="text.secondary"
                  align="left"
                >
                 Sumamry Details
                </Typography>
                <Typography sx={{ mb: 1.5 }} align="left">
                  $14.7M
                </Typography>
                <TrendChart id="summary-details" />              
                </CardContent>
                </Card>
          </Grid>
        </Grid>
      </Box>

    </div>
  );
}

export default App;

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import TrendChart from "./components/TrendChart";
import ChartWrapper from "./components/TrendChart/chartWrapper";
import { CardTitle, CardSubTitle } from "./utils/StyledComponentUtils";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1, margin: "16px", maxHeight: "400px" }}>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <ChartWrapper />
          </Grid>
          <Grid item xs={7}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <CardTitle>Sumamry Details</CardTitle>
                <CardSubTitle sx={{ mb: 1.5 }} align="left">
                  $14.7M
                </CardSubTitle>
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

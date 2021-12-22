import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import TrendChart from "./chart";
import { CardTitle, CardSubTitle } from "../../utils/StyledComponentUtils";

function ChartWrapper() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <CardTitle>Net Sales</CardTitle>
        <CardSubTitle align="left">$14.7M</CardSubTitle>
        <TrendChart id="net-sales" />
      </CardContent>
    </Card>
  );
}

export default ChartWrapper;

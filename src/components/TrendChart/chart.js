import { useRef, useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { chartConfig } from './config';
am4core.useTheme(am4themes_animated);


function TrendChart(props) {
  const chart = useRef(null);
  const {id} = props;

  useLayoutEffect(() => {
    let x = am4core.createFromConfig(
      {
        ...chartConfig
      },
      id,
      am4charts.XYChart
    );
    chart.current = x;
    return () => {
      x.dispose();
    };
  }, []);
  return (
    <div className="chart">
        <div
            id={id}
            style={{ width: "100%", height: "330px" }}
        />
    </div>
  );
}

export default TrendChart;

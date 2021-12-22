import { useRef, useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { chartConfig } from "./config";
am4core.useTheme(am4themes_animated);

function TrendChart(props) {
  const chart = useRef(null);
  const { id } = props;

  useLayoutEffect(() => {
    let data = [];
    let visits = 10;
    for (let i = 1; i < 10; i++) {
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({
        date: new Date(2018, 0, i),
        name: "name" + i,
        value: visits,
        value2: visits + 20
      });
    }

    let x = am4core.createFromConfig(
      {
        ...chartConfig,
        data: data
      },
      id,
      am4charts.XYChart
    );
    chart.current = x;
    return () => {
      x.dispose();
    };
  }, [id]);
  return (
    <div className="chart">
      <div id={id} style={{ width: "100%", height: "330px" }} />
    </div>
  );
}

export default TrendChart;

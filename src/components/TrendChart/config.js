export const chartConfig = {
  xAxes: [
    {
      type: "DateAxis",
      dateFormatter: {
        day: "dt"
      },
      renderer: {
        grid: {
          template: {
            disabled: true
          }
        },
        labels:{
          fill : "#333333"
        }
      }
    }
  ],
  yAxes: [
    {
      type: "ValueAxis",
      renderer: {
        opposite: true,
        grid: {
          stroke: "#DADCEO",
          strokeWidth:0.5
        },
        labels:{
          fill : "#333333"
        }
      }
    }
  ],
  legend: {
    maxWidth: 300,
    // useDefaultMarker: true,
    markers: {
      width: 16,
      height: 8
    },
    strokeWidth : "8"
  },
  series: [
    {
      type: "LineSeries",
      name: "This Year",
      stroke: "#3C228A",
      dataFields: {
        valueY: "value",
        dateX: "date"
      }
    },
    {
      type: "LineSeries",
      name: "Last Year",
      stroke: "#3C228A",
      strokeDasharray: "8,4",
      dataFields: {
        valueY: "value2",
        dateX: "date"
      }
    }
  ],
  data: [
    {
      SalesWeek: "Tue",
      SalesLastYear: 95,
      SalesThisYear: 110
    },
    {
      SalesWeek: "Wed",
      SalesLastYear: 70,
      SalesThisYear: 78
    },
    {
      SalesWeek: "Thu",
      SalesLastYear: 60,
      SalesThisYear: 70
    },
    {
      SalesWeek: "Fri",
      SalesLastYear: 40,
      SalesThisYear: 50
    },
    {
      SalesWeek: "Sat",
      SalesLastYear: 65,
      SalesThisYear: 70
    },
    {
      SalesWeek: "Sun",
      SalesLastYear: 80,
      SalesThisYear: 90
    },
    {
      SalesWeek: "Mon",
      SalesLastYear: 100,
      SalesThisYear: 115
    }
  ]
};
